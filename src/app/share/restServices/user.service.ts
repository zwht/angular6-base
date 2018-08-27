import { Injectable } from '@angular/core';
import { HttpData } from '../interfaces/httpData';
import { HttpConfig } from '../decorators/HttpConfig';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private httpClient: HttpClient
  ) { }
  private url = '/v1/user/:params1/:params2/:params3/:params4/:params5';

  // add
  @HttpConfig({
    method: 'post',
    params: {
      params1: 'add'
    },
    roles: [1001]
  })
  add(data: HttpData): Observable<any> {
    return data.observable;
  }

  // list
  @HttpConfig({
    method: 'post',
    params: {
      params1: 'list'
    },
    roles: []
  })
  list(data: HttpData): Observable<any> {
    return data.observable;
  }

  // del
  @HttpConfig({
    method: 'get',
    params: {
      params1: 'del'
    },
    roles: []
  })
  del(data: HttpData): Observable<any> {
    return data.observable;
  }

  // update
  @HttpConfig({
    method: 'post',
    params: {
      params1: 'update'
    },
    roles: []
  })
  update(data: HttpData): Observable<any> {
    return data.observable;
  }

  // getById
  @HttpConfig({
    method: 'get',
    params: {
      params1: 'getById'
    },
    roles: []
  })
  getById(data: HttpData): Observable<any> {
    return data.observable;
  }

  // registerEmail
  @HttpConfig({
    method: 'post',
    params: {
      params1: 'register/email'
    },
    roles: []
  })
  registerEmail(data: HttpData): Observable<any> {
    return data.observable;
  }

  // registerPhone
  @HttpConfig({
    method: 'post',
    params: {
      params1: 'register/phone'
    },
    roles: []
  })
  registerPhone(data: HttpData): Observable<any> {
    return data.observable;
  }

  // login
  @HttpConfig({
    method: 'post',
    params: {
      params1: 'login'
    },
    roles: []
  })
  login(data: HttpData): Observable<any> {
    return data.observable;
  }

  // updateState
  @HttpConfig({
    method: 'get',
    params: {
      params1: 'updateState'
    },
    roles: []
  })
  updateState(data: HttpData): Observable<any> {
    return data.observable;
  }


  // updatePassword
  @HttpConfig({
    method: 'get',
    params: {
      params1: 'updatePassword'
    },
    roles: []
  })
  updatePassword(data: HttpData): Observable<any> {
    return data.observable;
  }

  // getCaptchaEmail
  @HttpConfig({
    method: 'get',
    params: {
      params1: 'captcha',
      params2: 'email'
    },
    roles: []
  })
  getCaptchaEmail(data: HttpData): Observable<any> {
    return data.observable;
  }

  // getCaptchaPhone
  @HttpConfig({
    method: 'get',
    params: {
      params1: 'captcha',
      params2: 'phone'
    },
    roles: []
  })
  getCaptchaPhone(data: HttpData): Observable<any> {
    return data.observable;
  }
}
