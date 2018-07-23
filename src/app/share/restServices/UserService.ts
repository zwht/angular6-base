/**
 * Created by zhaowei on 2017/10/16.
 */
import {Injectable} from '@angular/core';
import {HttpServer} from '../services/HttpServer';

@Injectable()
export class UserService {

    url = '/v1/user/:params1/:params2/:params3/:params4/:params5';
    urls = {
        add: {
            method: 'post',
            params: {
                params1: 'add'
            }
        },
        login: {
            method: 'post',
            params: {
                params1: 'login'
            }
        }
    };

    constructor(httpServer: HttpServer) {
        httpServer.S(this);
    }

}
