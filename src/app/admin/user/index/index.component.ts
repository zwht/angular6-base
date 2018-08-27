import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../share/restServices/UserService';
import { CodeDataService } from '../../../share/services/code-data.service';
import { TestService } from '../../../share/restServices/test.service';
import { filter } from 'rxjs/operators';
import { HttpResponse } from 'selenium-webdriver/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['../../common/style/list.less', './index.component.less']
})
export class IndexComponent implements OnInit {

  loginName = null;
  name = null;
  juese = null;
  zhungtai = null;
  pageSize = 10;
  pageNum = 1;
  totalCount = null;
  DATA = [];

  codeList = [];
  codeObjList = {};
  codeObj = {};

  fileUrl = '';

  list = [];
  constructor(
    private userService: UserService,
    private test: TestService,
    private codeDataService: CodeDataService
  ) { }

  ngOnInit() {
    this.codeObj = this.codeDataService.codeObj;
    this.getList();

    this.test.list({
      params: {
        params2: 1,
        params3: 100
      },
      data: {
        name: 9
      }
    })
      .subscribe(data => {
        debugger
      });
  }

  getList(num?) {
    if (num) {
      this.pageNum = num;
    }
    this.userService['list']({
      params: {
        params2: this.pageNum,
        params3: this.pageSize
      },
      data: {
        loginName: this.loginName,
        name: this.name,
        phone: this.juese,
        email: this.zhungtai
      }
    })
      .then(response => {
        if (response.code === 200) {
          response.data.pageData.forEach(aaa => {
            aaa.roles = aaa.roles.split(',');
          });
          this.list = response.data.pageData;
          this.totalCount = response.data.totalCount;
        }
      });
  }
  cancel() { }

  deldeldel(id) {
    this.userService['del']({
      params: {
        params2: id
      },
      data: {}
    })
      .then(response => {
        if (response.code === 200) {
          this.getList();
        }
      });
  }

  StateOK(id) {
    this.userService['updateState']({
      params: {
        id: id,
        state: true
      },
      data: {}
    })
      .then(response => {
        if (response.code === 200) {
          this.getList();
        }
      });
  }

  StateNO(id) {
    this.userService['updateState']({
      params: {
        id: id,
        state: false

      },
      data: {}
    })
      .then(response => {
        if (response.code === 200) {
          this.getList();
        }
      });
  }

  fanyi() {

  }
}
