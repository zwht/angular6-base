import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VpsService } from '../../../share/restServices/vps.service';
import { VpnService } from '../../../share/restServices/vpn.service';
import { NewsTypeService } from '../../../share/restServices/news-type.service';
import { NewsService } from '../../../share/restServices/news.service';

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
    private newsService: NewsService
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
          this.list = response.data.pageData;
          this.totalCount = response.data.totalCount;
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
  goAdd(id) {
    this.router.navigate(['/admin/news/add'], { queryParams: { id: id } });
  }
}
