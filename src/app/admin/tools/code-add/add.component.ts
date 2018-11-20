import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { CodeService } from '../../../share/restServices/code.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less']
})
export class AddComponent implements OnInit {
  validateForm: FormGroup;
  loading = false;
  id;
  title = '添加code';

  constructor(
    private _message: NzMessageService,
    private fb: FormBuilder,
    private codeService: CodeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      description: [null, []],
      name: [null, [Validators.required]],
      code: [null, [Validators.required]],
      groups: [null, [Validators.required]],
    });
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.title = '编辑code';
        this.getDetail();
      }
    });
  }
  getDetail() {
    this.codeService.getById({
      params: { params2: this.id }
    })
      .subscribe(response => {
        if (response.code === 200) {
          this.validateForm.controls['description'].setValue(response.data.description);
          this.validateForm.controls['name'].setValue(response.data.name);
          this.validateForm.controls['code'].setValue(response.data.code);
          this.validateForm.controls['groups'].setValue(response.data.groups);
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
            }
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
    this.codeService['add']({
      data: d
    })
      .subscribe(response => {
        this.loading = false;
        if (response.code === 200) {
          this.router.navigate(['/admin/tools/code']);
          this._message.create('success', '保存成功', { nzDuration: 4000 });
        } else {
          this._message.create('error', response.msg, { nzDuration: 4000 });
        }
      });
  }
  edit(d) {
    this.codeService.update({
      data: Object.assign({ id: this.id }, d)
    })
      .subscribe(response => {
        this.loading = false;
        if (response.code === 200) {
          this.router.navigate(['/admin/tools/code']);
          this._message.create('success', '保存成功', { nzDuration: 4000 });
        } else {
          this._message.create('error', response.msg, { nzDuration: 4000 });
        }
      });
  }
}
