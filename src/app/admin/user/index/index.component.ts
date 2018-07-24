import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../share/restServices/UserService';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  list=[]
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.userService['list']({})
      .then(response => {
        if(response.code==200){
          this.list=response.data.pageData;
        }
      })
  }
}
