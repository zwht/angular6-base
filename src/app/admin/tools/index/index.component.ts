import { Component, OnInit } from '@angular/core';
import { CodeService } from '../../../share/restServices/CodeService';
import { DateRangePickerComponent } from 'ng-zorro-antd/src/date-picker/date-range-picker.component';
import { routes } from '../tools.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  name = null
  ID = null
  pageSize = 10
  pageNum = 1
  totalCount = null
  DATA = []
  list = []

  constructor(
    private CodeService: CodeService
  ) { }

  ngOnInit() {
    this.getList()
  }

  getList(num?) {
    if (num) {
      this.pageNum = num
    }
    this.CodeService['list']({
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
    this.CodeService['list']({
      params: {
        params2: this.pageSize,
        params3: this.pageNum
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
    this.CodeService['del']({
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
