import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../share/restServices/user.service';
import { CodeDataService } from '../../../share/services/code-data.service';

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
    private codeDataService: CodeDataService
  ) { }

  ngOnInit() {
    this.codeObj = this.codeDataService.codeObj;
    this.getList();
  }

  getList(num?) {
    if (num) {
      this.pageNum = num;
    }
    this.userService.list({
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
      .subscribe(response => {
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
    this.userService.del({
      params: {
        params2: id
      },
      data: {}
    })
      .subscribe(response => {
        if (response.code === 200) {
          this.getList();
        }
      });
  }

  StateOK(id) {
    this.userService.updateState({
      params: {
        id: id,
        state: true
      },
      data: {}
    })
      .subscribe(response => {
        if (response.code === 200) {
          this.getList();
        }
      });
  }

  StateNO(id) {
    this.userService.updateState({
      params: {
        id: id,
        state: false

      },
      data: {}
    })
      .subscribe(response => {
        if (response.code === 200) {
          this.getList();
        }
      });
  }

  fanyi() {

  }
}
