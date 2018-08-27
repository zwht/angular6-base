import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../../share/restServices/group.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['../../common/style/list.less', './group-list.component.less']
})
export class GroupListComponent implements OnInit {

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
    private groupService: GroupService
  ) { }

  ngOnInit() {
    this.getList();
  }

  getList(num?) {
    this.pageNum = num ? num : 1;
    this.groupService.list({
      params: {
        params2: this.pageNum,
        params3: this.pageSize
      },
      data: {
        name: this.search.name,
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
    this.groupService.del({
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
    this.router.navigate(['/admin/tools/group/add'], { queryParams: { id: id } });
  }
}
