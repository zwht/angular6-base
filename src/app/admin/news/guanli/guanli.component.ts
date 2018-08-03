import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../../share/restServices/NewsService'

@Component({
  selector: 'app-guanli',
  templateUrl: './guanli.component.html',
  styleUrls: ['./guanli.component.less']
})
export class GuanliComponent implements OnInit {

  name = null
  ID = null
  pageSize = 10
  pageNum = 1
  totalCount = null
  DATA = []
  list = []
  constructor(
    private NewsService:NewsService
  ) { }

  ngOnInit() {
    this.getList()
  }

  getList(num?) {
    if (num) {
      this.pageNum = num
    }
    this.NewsService['list']({
      params: {
        params2: this.pageNum,
        params3: this.pageSize
      },
      data: {}
    })
      .then(response => {
        if (response.code == 200) {
          this.list = response.data.pageData;
          this.totalCount = response.data.totalCount;
        }
      })
  }

  buchaxun(name?,ID?,num?) {
    if (num) {
      this.pageNum = num
    }
    if (name) {
      this.name = name
    }
    if (ID) {
      this.ID = ID
    }
    this.NewsService['list']({
      params: {
        params2: this.pageNum,
        params3: this.pageSize
      },
      data: {
        name: name,
        id: ID
      }
    })
      .then(response => {
        if (response.code == 200) {
          this.list = response.data.pageData;
          this.totalCount = response.data.totalCount;
        }
      })
  }

  deldeldel(id) {
    this.NewsService['del']({
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

}
