import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { RegExpService } from '../../../share/services/reg-exp.service';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { NewsService } from '../../../share/restServices/news.service';
import { NewsTypeService } from '../../../share/restServices/news-type.service';

@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.component.html',
  styleUrls: ['../../common/style/add.less', './news-add.component.less']
})
export class NewsAddComponent implements OnInit {

  validateForm: FormGroup;
  loading = false;
  id;
  title = '添加新闻';
  vpsList = [];

  searchOptions = [
    { value: 'jack', label: '杰克' },
    { value: 'lucy', label: '露西' },
    { value: 'tom', label: '汤姆' }
  ];
  constructor(
    private activatedRoute: ActivatedRoute,
    private _message: NzMessageService,
    private regExpService: RegExpService,
    private fb: FormBuilder,
    private newsService: NewsService,
    private newsTypeService: NewsTypeService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.getVpsList();
    this.validateForm = this.fb.group({
      typeId: [null, []],
      content: [null, []],
      abstract: [null, []],
      labels: [[], []],
      urlEn: [null, [Validators.required]],
      title: [null, [Validators.required]]
    });
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.title = '编辑新闻';
        this.getDetail();
      }
    });
  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (i) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
    if (this.validateForm.valid) {
      this.loading = true;

      const data = of(this.validateForm.value)
        .pipe(
          map(d => {
            for (const item in d) {
              if (item === 'labels') {
                d['labels'] = d['labels'].join(',');
              }
            }
            return d;
          })
        );
      data.subscribe(d => {
        d.state = 1102;
        if (this.id) {
          this.edit(d);
        } else {
          this.add(d);
        }
      });
    }
  }
  add(d) {
    this.newsService['add']({
      data: d
    })
      .subscribe(response => {
        this.loading = false;
        if (response.code === 200) {
          this.router.navigate(['/admin/news']);
        } else {
          this._message.create('error', response.msg, { nzDuration: 4000 });
        }
      });
  }
  edit(d) {
    this.newsService.update({
      data: Object.assign({ id: this.id }, d)
    })
      .subscribe(response => {
        this.loading = false;
        if (response.code === 200) {
          this.router.navigate(['/admin/news']);
        } else {
          this._message.create('error', response.msg, { nzDuration: 4000 });
        }
      });
  }
  getDetail() {
    this.newsService.getById({
      params: { params2: this.id }
    })
      .subscribe(response => {
        if (response.code === 200) {
          this.validateForm = this.fb.group({
            content: [response.data.content, []],
            typeId: [response.data.typeId, []],
            abstract: [response.data.abstract, []],
            labels: [response.data.labels.split(','), []],
            title: [response.data.title, [Validators.required]],
            urlEn: [response.data.urlEn, [Validators.required]],
          });
        }
      });
  }
  getVpsList(num?) {
    this.newsTypeService.list({
      params: {
        params2: 1,
        params3: 1000
      },
      data: {
      }
    })
      .subscribe(response => {
        if (response.code === 200) {
          this.vpsList = response.data.pageData;
        }
      });
  }
}
