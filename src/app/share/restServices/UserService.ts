/**
 * Created by zhaowei on 2017/10/16.
 */
import { Injectable } from '@angular/core';
import { HttpServer } from '../services/HttpServer';

@Injectable({
    providedIn: 'root',
})
export class UserService {

    url = '/v1/user/:params1/:params2/:params3/:params4/:params5';
    urls = {
        register: {
            method: 'post',
            params: {
                params1: 'register'
            }
        },
        add: {
            method: 'post',
            params: {
                params1: 'add'
            }
        },
        list: {
            method: 'post',
            params: {
                params1: 'list'
            }
        },
        login: {
            method: 'post',
            params: {
                params1: 'login'
            }
        },
        del: {
            method: 'get',
            params: {
                params1: 'del'
            }
        },
        update: {
            method: 'post',
            params: {
                params1: 'update'
            }
        },
        getById: {
            method: 'get',
            params: {
                params1: 'getById'
            }
        },
        updateState: {
            method: 'get',
            params: {
                params1: 'updateState'
            }
        },
        updatePassword: {
            method: 'get',
            params: {
                params1: 'updatePassword'
            }
        },
        getCaptchaEmail: {
            method: 'get',
            params: {
                params1: 'captcha',
                params2: 'email'
            }
        }

    };

    constructor(httpServer: HttpServer) {
        httpServer.S(this);
    }

}
