import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../share/restServices/UserService';
import { DateRangePickerComponent } from 'ng-zorro-antd/src/date-picker/date-range-picker.component';
import { routes } from '../user.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  name = null
  juese = null
  zhungtai = null
  pageSize = 10
  pageNum = 1
  totalCount = null
  DATA = []

  list=[]
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getList();
  }

  getList(num?) {
    if(num){
    this.pageNum = num
  }
    this.userService['list']({
      params:{
        params2:this.pageSize,
        params3:this.pageNum
      },
      data:{
        name:"zw"
      }
    })
      .then(response => {
        if(response.code==200){
          this.list=response.data.pageData;
          this.totalCount=response.data.totalCount;
        }
      })
  }
  cancel(){}

  deldeldel(id){
    this.userService['del']({
      params:{
        params2:id
      },
      data:{}
    })
      .then(response => {
        if(response.code==200){
          this.getList()
        }
      })
  }
}
