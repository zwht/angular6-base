import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class HttpServer {
  constructor(private http: HttpClient) {
  }
  S(that) {
    for (const key in that.urls) {
      that[key] = (cf, c1, c2): Promise<void> => {
        const cfg = Object.assign({}, that.urls[key], cf, {params: {}});
        const params = Object.assign({}, that.urls[key].params, cf.params);
        let new_url = that.url, str = '';
        const urlArr = new_url.split('/');
        for (const p in params) {
          if (urlArr.indexOf(':' + p)!=-1) {
            new_url = new_url.replace(':' + p, params[p]);
          } else {
            const tag = str ? '&' : '?';
            str += tag + p + '=' + params[p];
          }
        }
        new_url = new_url.split('/').filter(i => i[0] !== ':').join('/') + str;
        cfg.url = new_url;
        return this.http[that.urls[key].method.toLowerCase()](cfg.url, JSON.stringify(cfg.data || {}), c1 ? c1 : {})
          .toPromise()
          .then(response => response)
          .catch((err): Promise<any> => {
            return Promise.reject(err.message || err);
          });
      };
    }
  }
}
