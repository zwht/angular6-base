import { Component, OnInit } from '@angular/core';
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
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less']
})
export class AddComponent implements OnInit {
  validateForm: FormGroup;
  loading = false;
  constructor(
    private _message: NzMessageService,
    private regExpService: RegExpService,
    private fb: FormBuilder,
    private NewsService: NewsService,
    private router: Router,
  ) {
  }
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      description: [null, []],
      ParentId: [null, []],
      name: [null, [Validators.required]],
    });
  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.valid) {
      this.loading = true;
      this.NewsService['add']({
        data: {
          name: this.regExpService.replace('前后空格',this.validateForm.value.name, ''),
          description: this.regExpService.replace('前后空格',this.validateForm.value.description, ''),
          ParentId: this.regExpService.replace('前后空格',this.validateForm.value.ParentId, ''),
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
  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }


}
