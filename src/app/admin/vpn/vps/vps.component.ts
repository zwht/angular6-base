import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VpsService } from '../../../share/restServices/vps.service';

@Component({
  selector: 'app-vps',
  templateUrl: './vps.component.html',
  styleUrls: ['../../common/style/list.less', './vps.component.less']
})
export class VpsComponent implements OnInit {

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
    private vpsService: VpsService
  ) { }

  ngOnInit() {
    this.getList();
  }

  getList(num?) {
    this.pageNum = num ? num : 1;
    this.vpsService['list']({
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
    this.vpsService.del({
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
    this.router.navigate(['/admin/vpn/vps/add'], { queryParams: { id: id } });
  }

}
