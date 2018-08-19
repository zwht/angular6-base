/**
 * Created by zhaowei on 2017/10/16.
 */
import { Injectable } from '@angular/core';
import { HttpServer } from '../services/HttpServer';

@Injectable({
  providedIn: 'root',
})
export class FileService {

  url = '/v1/file/:params1/:params2/:params3/:params4/:params5';
  urls = {
    add: {
      method: 'post',
      params: {
        params1: 'upload'
      }
    },
    list: {
      method: 'post',
      params: {
        params1: 'queryPage'
      }
    },
    getById: {
      method: 'get',
      params: {
        params1: 'download'
      },
    },
    downloadKey: {
      method: 'post',
      params: {
        params1: 'downloadkey'
      },
    },
    downloads: {
      method: 'get',
      params: {
        params1: 'downloads'
      },
    },
    update: {
      method: 'post',
      params: {
        params1: 'update'
      }
    },
    updateState: {
      method: 'post',
      params: {
        params1: 'updateState'
      }
    },
    del: {
      method: 'get',
      params: {
        params1: 'delete'
      }
    },
    findAllParent: {
      method: 'get',
      params: {
        params1: 'findAllParent'
      }
    },
    moveFile: {
      method: 'post',
      params: {
        params1: 'moveFile'
      }
    },
  };

  constructor(httpServer: HttpServer) {
    httpServer.S(this);
  }
}
