import { Injectable } from '@angular/core';
import { HttpData } from '../interfaces/httpData';
import { HttpConfig } from '../decorators/HttpConfig';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VpnRelationService {
  constructor(
    private httpClient: HttpClient
  ) { }
  private url = '/v1/vpn/relation/:params1/:params2/:params3/:params4/:params5';

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

  // updateState
  @HttpConfig({
    method: 'get',
    params: {
      params1: 'list'
    },
    roles: []
  })
  getListByUserId(data: HttpData): Observable<any> {
    return data.observable;
  }
}
