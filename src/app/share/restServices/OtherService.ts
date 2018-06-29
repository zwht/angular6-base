/**
 * Created by zhaowei on 2017/10/16.
 */
import {Injectable} from '@angular/core';
import {HttpServer} from '../services/HttpServer';

@Injectable()
export class OtherService {

    url = '/v1/:params1/:params2/:params3/:params4/:params5';
    urls = {
        findLogicList: {
            method: 'post',
            params: {
                params1: 'datastorage',
                params2: 'findLogicList',
                params3: 1,
                params4: 1000
            }
        },
        findItemList: {
            method: 'post',
            params: {
                params1: 'datastorage',
                params2: 'findItemList',
                params3: 1,
                params4: 1000
            }
        },
        findImgList: {
            method: 'post',
            params: {
                params1: 'storageManage',
                params2: 'list',
                params3: 1,
                params4: 10000
            }
        }
    };

    constructor(httpServer: HttpServer) {
        httpServer.S(this);
    }

}
