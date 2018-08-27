import { Component, OnInit } from '@angular/core';
import { CodeService } from '../../../share/restServices/code.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  name = null;
  ID = null;
  pageSize = 10;
  pageNum = 1;
  totalCount = null;
  DATA = [];
  list = [];

  constructor(
    private codeService: CodeService
  ) { }

  ngOnInit() {
    this.getList();
  }

  getList(num?) {
    if (num) {
      this.pageNum = num;
    }
    this.codeService.list({
      params: {
        params2: this.pageNum,
        params3: this.pageSize
      },
      data: {}
    })
      .subscribe(response => {
        if (response.code === 200) {
          this.list = response.data.pageData;
          this.totalCount = response.data.totalCount;
        }
      });
  }

  buchaxun(name?, ID?, num?) {
    if (num) {
      this.pageNum = num;
    }
    if (name) {
      this.name = name;
    }
    if (ID) {
      this.ID = ID;
    }
    this.codeService.list({
      params: {
        params2: this.pageNum,
        params3: this.pageSize
      },
      data: {
        name: name,
        id: ID
      }
    })
      .subscribe(response => {
        if (response.code === 200) {
          this.list = response.data.pageData;
          this.totalCount = response.data.totalCount;
        }
      });
  }

  deldeldel(id) {
    this.codeService.del({
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

}
