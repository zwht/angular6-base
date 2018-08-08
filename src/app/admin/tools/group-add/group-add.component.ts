import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { NzMessageService } from '../../../../../node_modules/ng-zorro-antd';
import { RegExpService } from '../../../share/services/reg-exp.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GroupService } from '../../../share/restServices/GroupService';
@Component({
  selector: 'app-group-add',
  templateUrl: './group-add.component.html',
  styleUrls: ['../../common/style/add.less', './group-add.component.less']
})
export class GroupAddComponent implements OnInit {
  validateForm: FormGroup;
  loading = false;
  id;
  title="添加公司"

  constructor(
    private activatedRoute: ActivatedRoute,
    private _message: NzMessageService,
    private regExpService: RegExpService,
    private fb: FormBuilder,
    private GroupService: GroupService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      description: [null, []],
      name: [null, [Validators.required]]
    });
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.title="编辑公司"
        this.getDetail()
      }
    });
  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.valid) {
      this.loading = true;
      if (this.id) {
        this.edit()
      } else {
        this.add()
      }
    }

  }
  add() {
    this.GroupService['add']({
      data: {
        name: this.regExpService.replace('前后空格', this.validateForm.value.name, ''),
        description: this.regExpService.replace('前后空格', this.validateForm.value.description, '')
      }
    })
      .then(response => {
        this.loading = false;
        if (response.code === 200) {
          this.router.navigate(['/admin/tools/group'])
        } else {
          this._message.create('error', response.msg, { nzDuration: 4000 });
        }
      });
  }
  edit() {
    this.GroupService['update']({
      data: {
        id: this.id,
        name: this.regExpService.replace('前后空格', this.validateForm.value.name, ''),
        description: this.regExpService.replace('前后空格', this.validateForm.value.description, '')
      }
    })
      .then(response => {
        this.loading = false;
        if (response.code === 200) {
          this.router.navigate(['/admin/tools/group'])
        } else {
          this._message.create('error', response.msg, { nzDuration: 4000 });
        }
      });
  }
  getDetail() {
    this.GroupService['getById']({
      params: { params2: this.id }
    })
      .then(response => {
        if (response.code == 200) {
          this.validateForm = this.fb.group({
            description: [response.data.description, []],
            name: [response.data.name, [Validators.required]]
          });
        }
      })
  }

}
