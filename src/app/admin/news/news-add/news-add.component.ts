import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { RegExpService } from '../../../share/services/reg-exp.service';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { NewsService } from '../../../share/restServices/news.service';
import { NewsTypeService } from '../../../share/restServices/news-type.service';
declare const require: any;
const Showdown = require('showdown');
@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.component.html',
  styleUrls: ['../../common/style/add.less', './news-add.component.less']
})
export class NewsAddComponent implements OnInit, OnDestroy {
  @ViewChild('box1')
  box1: ElementRef;
  @ViewChild('box2')
  box2: ElementRef;

  changeSum = 0;
  isFocus = false;
  saveSetTime;
  converter = new Showdown.Converter();
  validateForm: FormGroup;
  loading = false;
  id;
  state = 1102;
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
    { value: 'angualr2', label: 'angualr2' },
    { value: 'typeScript', label: 'typeScript' },
    { value: 'es6', label: 'es6' },
    { value: 'go', label: 'go' },
    { value: 'css3', label: 'css3' },
    { value: 'html5', label: 'html5' },
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
      contentMarkdown: [null, [Validators.required]],
      abstract: [null, [Validators.required]],
      labels: [[], [Validators.required]],
      source: ['原创', [Validators.required]],
      urlEn: [null, [Validators.required]],
      title: [null, [Validators.required]],
      state: [null, []]
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
        if (type || this.state == 1105) {
          d.state = this.state = 1105;
        } else {
          d.state = this.state = 1102;
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
      data: Object.assign({ markdown: 1402 }, d)
    })
      .subscribe(response => {
        this.loading = false;
        if (response.code === 200) {
          this.router.navigate(['/admin/news/markdown'], { queryParams: { id: response.data } });
          this._message.create('success', '保存成功', { nzDuration: 4000 });
        } else {
          this._message.create('error', response.msg, { nzDuration: 4000 });
        }
      });
  }
  edit(d) {
    this.newsService.update({
      data: Object.assign({ id: this.id, markdown: 1402 }, d)
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
          this.validateForm.controls['contentMarkdown'].setValue(response.data.contentMarkdown);
          this.validateForm.controls['content'].setValue(response.data.content);
          this.validateForm.controls['typeId'].setValue(response.data.typeId);
          this.validateForm.controls['abstract'].setValue(response.data.abstract);
          this.validateForm.controls['labels'].setValue(response.data.labels.split(','));
          this.validateForm.controls['source'].setValue(response.data.source);
          this.validateForm.controls['title'].setValue(response.data.title);
          this.validateForm.controls['urlEn'].setValue(response.data.urlEn);
          this.validateForm.controls['state'].setValue(response.data.state);
          this.state = response.data.state;
          setTimeout(() => {
            this.setBoxHeight();
          }, 1000);
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
  contentChange() {
    this.setBoxHeight();
    const contStr = this.converter.makeMarkdown(this.validateForm.getRawValue()['content']);
    const contentMarkdown = this.validateForm.getRawValue()['contentMarkdown'] || '';
    if (contentMarkdown != contStr) {
      this.validateForm.controls['contentMarkdown'].setValue(contStr);
    }
  }
  contentMarkdownChange(e) {
    // 自动保存设置
    if (this.isFocus) {
      if (!this.changeSum) {
        this.saveSetTime = setInterval(() => {
          this.submitForm();
        }, 1000 * 60);
      }
      this.changeSum++;
      console.log(this.changeSum);
      if (this.changeSum > 50) {
        this.zdSave();
        this.changeSum = 0;
      }
    }

    this.setBoxHeight();
    const markDownStr = this.converter.makeHtml(e);
    const content = this.validateForm.getRawValue()['content'] || '';
    if (content != markDownStr) {
      this.validateForm.controls['content'].setValue(markDownStr);
    }
  }
  setBoxHeight() {
    const box1 = this.box1.nativeElement;
    const box2H = this.box2.nativeElement.clientHeight - 14;
    const box1H = box1.scrollTop + 2 + box1.scrollHeight;
    if (box2H > box1H) {
      box1.style.height = box2H + 'px';
    } else {
      box1.style.height = box1H + 'px';
    }
  }
  markdownBlur(e) {
    this.isFocus = false;
  }
  markdownFocus(e) {
    this.isFocus = true;
  }
  ngOnDestroy() {
    this.zdSave();
  }
  zdSave() {
    if (this.saveSetTime) {
      clearInterval(this.saveSetTime);
    }
    this.submitForm();
  }
}
