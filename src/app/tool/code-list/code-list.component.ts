import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-code-list',
  templateUrl: './code-list.component.html',
  styleUrls: ['./code-list.component.less'],
  providers: []
})
export class CodeListComponent implements OnInit {
  list = [];
  total = 0;
  pageNum = 1;
  pageSize = 15;
  loading = false;

  constructor(
              private router: Router) {
  }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.loading = true;
  }
}
