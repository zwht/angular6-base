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
        params2: this.pageSize,
        params3: this.pageNum
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


}
