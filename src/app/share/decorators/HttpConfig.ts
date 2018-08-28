import { HttpData } from '../interfaces/httpData';
import { SessionService } from '../services/session.service';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { TestConfig } from '../../../config';

const sessionService = new SessionService();
const host = location.host; // localhost:9877
// 设置url
function setUrl(config, data, url) {
  const params = Object.assign({}, config.params, data.params);
  let new_url = (host === 'localhost:9877' ? TestConfig.url : '') + url, str = '';
  const urlArr = new_url.split('/');
  for (const p in params) {
    if (urlArr.indexOf(':' + p) !== -1) {
      new_url = new_url.replace(':' + p, params[p]);
    } else {
      const tag = str ? '&' : '?';
      str += tag + p + '=' + params[p];
    }
  }
  new_url = new_url.split('/').filter(i => i[0] !== ':').join('/') + str;
  return new_url;
}
// 设置请求体data
function setData(config, data) {
  let newData = {};
  if (config.data) {
    newData = Object.assign(newData, config.data);
  }
  if (data.data) {
    newData = Object.assign(newData, data.data);
  }
  return newData;
}
// 判断用户接口权限
function getPermission(roles) {
  if (roles && roles.length) {
    const localRoles = sessionService.getItem('roles');
    if (!localRoles) {
      return false;
    } else {
      const ar = localRoles.split(',');
      let key = false;
      for (let i = 0; i < roles.length; i++) {
        if (key) {
          break;
        }
        for (let j = 0; j < ar.length; j++) {
          if (roles[i] == ar[j]) {
            key = true;
            break;
          }
        }
      }
      return key;
    }
  } else {
    return true;
  }
}
// http请求装饰器
export const HttpConfig = function (httpData: HttpData) {
  return (target: any, name: string, descriptor: PropertyDescriptor) => {
    const method = descriptor.value;
    descriptor.value = function () {
      const permission = getPermission(httpData.roles);
      if (permission) {
        let body: any;
        let headers: any;
        // 如果为上传文件数据FormData数据，修改boday,和headers
        if (arguments[0].data instanceof FormData) {
          body = arguments[0].data;
          for (const i in httpData.data) {
            if (i) {
              body.append(i, httpData.data[i]);
            }
          }
          headers = new HttpHeaders({
            'Authorization': sessionService.getItem('token') || ''
          });
        } else {
          body = JSON.stringify(setData(httpData, arguments[0]));
          headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': sessionService.getItem('token') || ''
          });
        }
        // 配置HttpRequest
        const req = new HttpRequest(
          httpData.method.toUpperCase(),
          setUrl(httpData, arguments[0], this.url),
          body,
          { headers }
        );
        // 创建请求observable对象
        arguments[0].observable = this.httpClient.request(req)
          .pipe(
            filter(e => e instanceof HttpResponse),
            map(e => {
              if (e['body']) {
                return e['body'];
              }
              return e;
            })
          );
      } else {
        // 没有接口权限返回observable对象
        arguments[0].observable = Observable.create(observer => {
          observer.next({
            code: 401,
            data: {},
            msg: '没有权限'
          });
        });
      }
      // .toPromise()
      // .then(response => response)
      // .catch((err): Promise<any> => {
      //   return Promise.reject(err.message || err);
      // });
      return method.apply(this, arguments);
    };
  };
};
