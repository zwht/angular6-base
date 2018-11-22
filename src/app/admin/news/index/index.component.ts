import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../../../share/restServices/news.service';
import { CodeDataService } from '../../../share/services/code-data.service';
@Component({
  selector: 'app-new-index',
  templateUrl: './index.component.html',
  styleUrls: ['../../common/style/list.less', './index.component.less']
})
export class IndexComponent implements OnInit {
  pageSize = 10;
  pageNum = 1;
  totalCount = null;
  list = [];
  search = {
    name: '',
    id: ''
  };

  constructor(
    private router: Router,
    private newsService: NewsService,
    private codeDataService: CodeDataService
  ) { }

  ngOnInit() {
    this.getList();
  }

  getList(num?) {
    this.pageNum = num ? num : 1;
    this.newsService.list({
      params: {
        params2: this.pageNum,
        params3: this.pageSize
      },
      data: {
        title: this.search.name,
        id: this.search.id
      }
    })
      .subscribe(response => {
        if (response.code === 200) {
          this.list = response.data.pageData.map(item => {
            item.stateName = this.codeDataService.getName(item.state);
            return item;
          });
          this.totalCount = response.data.totalCount;
        }
      });
  }
  setState(item) {
    let state = 1106;
    if (item.state != 1105) {
      state = 1105;
    }
    this.newsService.updateState({
      params: {
        id: item.id,
        state
      }
    })
      .subscribe(response => {
        if (response.code === 200) {
          this.getList();
        }
      });
  }
  del(id) {
    this.newsService.del({
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
  goAdd(item) {
    this.router.navigate(['/admin/news/add'], { queryParams: { id: item.id } });
  }
}
