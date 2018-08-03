import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {NewsService} from '../../../share/restServices/NewsService'
import { NzMessageService } from '../../../../../node_modules/ng-zorro-antd';
import { RegExpService } from '../../../share/services/reg-exp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.less']
})
export class UpdateComponent implements OnInit {
  validateForm: FormGroup;
  loading = false;
  id = 0;

  constructor(
    private _message: NzMessageService,
    private regExpService: RegExpService,
    private fb: FormBuilder,
    private NewsService: NewsService,
    public route: ActivatedRoute,
    private router: Router,

  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getById(this.id)

    this.validateForm = this.fb.group({
      description: [null, []],
      name: [null, [Validators.required]],
      Index: [null, []],
      ParentId: [null, []],
    });

  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.valid) {
      this.loading = true;
      this.NewsService['update']({
        data: {
          id:this.id,
          code: this.regExpService.replace('前后空格',this.validateForm.value.code, ''),
          name: this.regExpService.replace('前后空格',this.validateForm.value.name, ''),
          description: this.regExpService.replace('前后空格',this.validateForm.value.description, ''),
          parentId: this.regExpService.replace('前后空格',this.validateForm.value.ParentId, ''),
        }
      })
        .then(response => {
          this.loading = false;
          if (response.code === 200) {
            this.router.navigate(['/admin/news/guanli'])
          } else {
            this._message.create('error', response.msg, { nzDuration: 4000 });
          }
        });
    }
  }
  getById(id){
    this.NewsService['getById']({
      params:{
        params2:id
      },
      data:{}
    })
      .then(response => {
        if(response.code==200){
          this.validateForm = this.fb.group({
            description: [response.data.description, []],
            name: [response.data.name, [Validators.required]],
            Index: [response.data.index, []],
            ParentId: [response.data.parentId, []],
          });
        }
      })
  }

}
