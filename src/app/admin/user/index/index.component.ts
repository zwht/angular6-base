import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../share/restServices/UserService';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

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
      data:{}
    })
      .then(response => {
        if(response.code==200){
          this.list=response.data.pageData;
          this.totalCount=response.data.totalCount;
        }
      })
  }
}
