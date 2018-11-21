import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('addBox')
  addBox: ElementRef;
  validateForm: FormGroup;
  loading = false;
  id;
  title = '添加新闻';
  vpsList = [];
  sourceList = [
    {
      name: '原创'
    },
    {
      name: '转载'
    },
    {
      name: '翻译'
    }
  ];
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
      typeId: [null, [Validators.required]],
      content: [null, [Validators.required]],
      abstract: [null, [Validators.required]],
      labels: [[], [Validators.required]],
      source: ['原创', [Validators.required]],
      urlEn: [null, [Validators.required]],
      title: [null, [Validators.required]]
    });

  }
  submitForm(type?): void {
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
        if (!d.state) {
          d.state = 1102;
        }
        if (d.state < 1105 && type) {
          d.state = 1105;
        }
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
          this.router.navigate(['/admin/news/add'], { queryParams: { id: response.data } });
          this._message.create('success', '保存成功', { nzDuration: 4000 });
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
          this._message.create('success', '保存成功', { nzDuration: 4000 });
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
          this.validateForm.controls['content'].setValue(response.data.content);
          this.validateForm.controls['typeId'].setValue(response.data.typeId);
          this.validateForm.controls['abstract'].setValue(response.data.abstract);
          this.validateForm.controls['labels'].setValue(response.data.labels.split(','));
          this.validateForm.controls['source'].setValue(response.data.source);
          this.validateForm.controls['title'].setValue(response.data.title);
          this.validateForm.controls['urlEn'].setValue(response.data.urlEn);
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
          if (response.data.pageData.length) {
            this.vpsList = response.data.pageData;
            this.validateForm.controls['typeId'].setValue(this.vpsList[0].id);
          }
          this.activatedRoute.queryParams.subscribe(params => {
            this.id = params['id'];
            if (this.id) {
              this.title = '编辑新闻';
              this.getDetail();
            }
          });
        }
      });
  }
}
