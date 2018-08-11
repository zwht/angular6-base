/**
 * Created by zhaowei on 2017/10/16.
 */
import { Injectable } from '@angular/core';
import { HttpServer } from '../services/HttpServer';

@Injectable({
    providedIn: 'root',
})
export class VpnRelationService {

    url = '/v1/vpn/relation/:params1/:params2/:params3/:params4/:params5';
    urls = {
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
        getListByUserId: {
            method: 'get',
            params: {
                params1: 'list'
            }
        },
        
    };

    constructor(httpServer: HttpServer) {
        httpServer.S(this);
    }

}
