import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../share/restServices/UserService';
import { CodeDataService } from '../../../share/services/code-data.service';
import { DateRangePickerComponent } from 'ng-zorro-antd/src/date-picker/date-range-picker.component';
import { routes } from '../user.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  loginName = null
  name = null
  juese = null
  zhungtai = null
  pageSize = 10
  pageNum = 1
  totalCount = null
  DATA = []

  codeList=[]
  codeObjList={}
  codeObj={}

  list = []
  constructor(
    private userService: UserService,
    private codeDataService:CodeDataService,
  ) { }

  ngOnInit() {
    this.codeObj = this.codeDataService.codeObj
    this.getList();
  }
  getList(num?) {
    if (num) {
      this.pageNum = num
    }
    this.userService['list']({
      params: {
        params2: this.pageNum,
        params3: this.pageSize
      },
      data: {
        loginName : this.loginName,
        name: this.name,
        phone: this.juese ,
        email: this.zhungtai
      }
    })
      .then(response => {
        if (response.code == 200) {
          response.data.pageData.forEach(aaa=>{
            aaa.roles = aaa.roles.split(",")
          })
          this.list = response.data.pageData;
          this.totalCount = response.data.totalCount;
        }
      })
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
        if (response.code == 200) {
          this.getList()
        }
      })
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
        if (response.code == 200) {
          this.getList()
        }
      })
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
        if (response.code == 200) {
          this.getList()
        }
      })
  }

  fanyi(){

  }
}
