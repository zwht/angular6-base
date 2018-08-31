import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { RegExpService } from '../../../share/services/reg-exp.service';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { NewsTypeService } from '../../../share/restServices/news-type.service';

@Component({
  selector: 'app-news-type-add',
  templateUrl: './news-type-add.component.html',
  styleUrls: ['../../common/style/add.less', './news-type-add.component.less']
})
export class NewsTypeAddComponent implements OnInit {

  validateForm: FormGroup;
  loading = false;
  id;
  title = '添加新闻类型';
  vpsList = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private _message: NzMessageService,
    private regExpService: RegExpService,
    private fb: FormBuilder,
    private newsTypeService: NewsTypeService,

    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.getVpsList();

    this.validateForm = this.fb.group({
      parentId: [null, []],
      description: [null, []],
      name: [null, [Validators.required]]
    });
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.title = '编辑新闻类型';
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
            return d;
          })
        );
      data.subscribe(d => {
        if (this.id) {
          this.edit(d);
        } else {
          this.add(d);
        }
      });
    }
  }
  add(d) {
    this.newsTypeService.add({
      data: d
    })
      .subscribe(response => {
        this.loading = false;
        if (response.code === 200) {
          this.router.navigate(['/admin/news/type']);
        } else {
          this._message.create('error', response.msg, { nzDuration: 4000 });
        }
      });
  }
  edit(d) {
    this.newsTypeService.update({
      data: Object.assign({ id: this.id }, d)
    })
      .subscribe(response => {
        this.loading = false;
        if (response.code === 200) {
          this.router.navigate(['/admin/news/type']);
        } else {
          this._message.create('error', response.msg, { nzDuration: 4000 });
        }
      });
  }
  getDetail() {
    this.newsTypeService.getById({
      params: { params2: this.id }
    })
      .subscribe(response => {
        if (response.code === 200) {
          this.validateForm = this.fb.group({
            description: [response.data.description, []],
            parentId: [response.data.parentId, []],
            name: [response.data.name, [Validators.required]]
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
          this.vpsList = response.data.pageData.filter(item => {
            if (item.id !== this.id) {
              return;
            }
          });
        }
      });
  }
}
