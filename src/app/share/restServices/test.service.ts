import { Injectable } from '@angular/core';
import { HttpData } from '../interfaces/httpData';
import { HttpConfig } from '../decorators/HttpConfig';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor(
    private httpClient: HttpClient
  ) { }
  private url = '/v1/code/:params1/:params2/:params3/:params4/:params5';

  // 获取code列表
  @HttpConfig({
    method: 'post',
    params: {
      params1: 'list'
    },
    roles: [1001]
  })
  list(data: HttpData): Observable<any> {
    return data.observable;
  }
}
