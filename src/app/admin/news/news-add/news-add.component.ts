import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { NewsService } from '../../../share/restServices/news.service';
import { NewsTypeService } from '../../../share/restServices/news-type.service';
declare const require: any;
const Showdown = require('showdown');
declare const Prism: any;

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
  @ViewChild('box3')
  box3: ElementRef;
  @ViewChild('article')
  article: ElementRef;

  markChangTime;
  isMarkdown = true;
  changeSum = 0;
  isFocus = false;
  saveSetTime;
  converter = new Showdown.Converter({ tables: true, strikethrough: true });
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
  actTitle;
  createTime;
  artInnerHtml;
  contentMarkdown;
  content;
  constructor(
    private activatedRoute: ActivatedRoute,
    private _message: NzMessageService,
    private nzModalService: NzModalService,
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
      abstract: [null, [Validators.required]],
      labels: [[], [Validators.required]],
      source: ['原创', [Validators.required]],
      urlEn: [null, [Validators.required]],
      state: [null, []]
    });
  }
  submitForm(type?): void {
    for (const i in this.validateForm.controls) {
      if (i) {
        this.validateForm.get(i).markAsDirty();
        this.validateForm.get(i).updateValueAndValidity();
      }
    }
    if (!this.artInnerHtml) {
      this._message.create('error', `请输入文章内容！`);
      return;
    }
    if (!this.actTitle) {
      this._message.create('error', `请输入标题！`);
      return;
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
        d.content = this.artInnerHtml;
        d.contentMarkdown = this.contentMarkdown;
        d.markdown = this.isMarkdown ? 1402 : 1401;
        d.title = this.actTitle;
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
      data: Object.assign({}, d)
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
    this.loading = true;
    this.newsService.getById({
      params: { params2: this.id }
    })
      .subscribe(response => {
        if (response.code === 200) {
          this.artInnerHtml = response.data.content;
          this.isMarkdown = response.data.markdown == 1401 ? false : true;
          this.contentMarkdown = response.data.contentMarkdown;
          this.content = response.data.content;
          if (this.isMarkdown && !this.contentMarkdown && this.artInnerHtml) {
            this.contentMarkdown = this.converter.makeHtml(this.artInnerHtml);
          }
          this.actTitle = response.data.title;
          this.createTime = response.data.createTime;

          this.validateForm.get('typeId').setValue(response.data.typeId);
          this.validateForm.get('abstract').setValue(response.data.abstract);
          this.validateForm.get('labels').setValue(response.data.labels.split(','));
          this.validateForm.get('source').setValue(response.data.source);
          this.validateForm.get('urlEn').setValue(response.data.urlEn);
          this.validateForm.get('state').setValue(response.data.state);
          this.state = response.data.state;
          setTimeout(() => {
            this.setBoxHeight();
            this.loading = false;
          }, 500);
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
            this.validateForm.get('typeId').setValue(this.vpsList[0].id);
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
  contentChange(e) {
    this.setBoxHeight();
    this.artInnerHtml = e;
  }
  contentMarkdownChange(e) {
    this.setBoxHeight();
    if (!this.markChangTime) {
      this.markChangTime = setTimeout(() => {
        this.artInnerHtml = this.converter.makeHtml(e);
        this.markChangTime = 0;
      }, 2000);
    }
  }
  setBoxHeight() {
    setTimeout(() => {
      this.setHeight();
    });
    setTimeout(() => {
      this.setHeight();
    }, 500);
  }
  setHeight() {
    const box3 = this.box3.nativeElement;
    box3.style['height'] = 'auto';
    const box3H = box3.clientHeight;

    if (this.isMarkdown) {
      const box1 = this.box1.nativeElement;
      box1.style['height'] = 'auto';
      const box1H = box1.scrollTop + 2 + box1.scrollHeight;
      if (box3H > box1H) {
        box1.style['height'] = box1H + 'px';
        box3.style['height'] = box1H + 'px';
      } else {
        box1.style['height'] = box3H + 'px';
      }
    } else {
      const box2 = this.box2.nativeElement;
      box2.style['height'] = 'auto';
      const box2H = box2.clientHeight;
      if (box3H > box2H) {
        box2.style['height'] = box3H + 'px';
      } else {
        box3.style['height'] = box2H + 'px';
      }
    }
    this.insertCodeElement();
  }
  switchChange(e) {
    if (e) {
      if (!this.contentMarkdown) {
        this.contentMarkdown = this.converter.makeMarkdown(this.artInnerHtml);
      }
    } else {
      if (!this.content) {
        this.content = this.artInnerHtml;
      }
    }
    this.setBoxHeight();
  }
  // 插入 code 标签函数,代码高亮方法
  insertCodeElement() {
    const doc_pre = this.article.nativeElement.getElementsByTagName('pre');
    for (let i = 0; i < doc_pre.length; i++) {
      const class_val = doc_pre[i].className;
      if (class_val.indexOf(';') !== -1) {
        let class_arr = new Array();
        class_arr = class_val.split(';');
        class_arr = class_arr['0'].split(':');
        const lan_class = 'language-' + class_arr['1'];
        const pre_content = '<code class="' + lan_class + '">' + doc_pre[i].innerHTML + '</code>';
        doc_pre[i].innerHTML = pre_content;
        doc_pre[i].className = lan_class;
      }
      doc_pre[i].className = 'line-numbers ' + doc_pre[i].className;
      // doc_pre[i].style['white-space'] = 'pre-wrap';
    }
    Prism.highlightAll();
  }
  markdownBlur(e) {
    this.isFocus = false;
  }
  markdownFocus(e) {
    this.isFocus = true;
  }
  ngOnDestroy() {
    // this.nzModalService.confirm({
    //   nzTitle: 'Do you Want to delete these items?',
    //   nzContent: 'When clicked the OK button, this dialog will be closed after 1 second',
    //   nzOnOk: () => new Promise((resolve, reject) => {
    //     setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
    //   }).catch(() => console.log('Oops errors!'))
    // });
    // this.zdSave();
  }
  zdSave() {
    if (this.saveSetTime) {
      clearInterval(this.saveSetTime);
    }
    this.submitForm();
  }
}
