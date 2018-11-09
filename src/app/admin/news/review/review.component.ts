import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../../../share/restServices/news.service';
import { CodeDataService } from '../../../share/services/code-data.service';
import { ReviewService } from 'src/app/share/restServices/review.service';
import { CodeService } from 'src/app/share/restServices/code.service';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['../../common/style/list.less', './review.component.less']
})
export class ReviewComponent implements OnInit {

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
    private codeDataService: CodeDataService,
    private reviewService: ReviewService
  ) { }

  ngOnInit() {
    this.getList();
  }

  getList(num?) {
    this.pageNum = num ? num : 1;
    this.reviewService.list({
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
    let state = 1202, key = 1;
    if (item.state === 1203) {
      key = -1;
    }
    if (item.state !== 1203) {
      state = 1203;
    }
    this.reviewService.updateState({
      params: {
        id: item.id,
        newsId: item.newId,
        key,
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
    this.reviewService.del({
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
  // goAdd(id) {
  //   this.router.navigate(['/admin/news/add'], { queryParams: { id: id } });
  // }
}
