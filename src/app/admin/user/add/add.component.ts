import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { UserService } from '../../../share/restServices/user.service';
import { NzMessageService } from '../../../../../node_modules/ng-zorro-antd';
import { RegExpService } from '../../../share/services/reg-exp.service';
import { CodeDataService } from '../../../share/services/code-data.service';
import { Router } from '@angular/router';
import { GroupService } from '../../../share/restServices/group.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['../../common/style/add.less', './add.component.less']
})
export class AddComponent implements OnInit {
  validateForm: FormGroup;
  loading = false;
  checkOptionsOne = [];
  parentIdList = [];

  constructor(
    private groupService: GroupService,
    private codeDataService: CodeDataService,
    private _message: NzMessageService,
    private regExpService: RegExpService,
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    if (this.codeDataService && this.codeDataService.codeObjList['10']) {
      this.checkOptionsOne = JSON.parse(JSON.stringify(this.codeDataService.codeObjList['10']));
      this.checkOptionsOne = this.checkOptionsOne.filter(item => {
        return item.code !== 1001;
      });
      if (this.checkOptionsOne[0]) {
        this.checkOptionsOne[0].checked = true;
      }
    }

    this.validateForm = this.fb.group({
      parentId: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      loginName: [null, [Validators.required]],
      img: [null, [Validators.required]],
      lcode: [null, [Validators.required, function (control: FormControl) {
        let isPass = false;
        if (control.value) {
          control.value.forEach(item => {
            if (item.checked) {
              isPass = true;
            }
          });
        }
        return isPass ? null : { lcode: { info: '类型不能为空' } };
      }]]
    });
    this.getList();
  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if ((this.validateForm as any).controls[i]) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
    if (this.validateForm.valid) {
      this.loading = true;

      const roles = this.checkOptionsOne.filter(item => {
        if (item.checked) {
          return true;
        }
      }).map(item => {
        return item.code;
      });
      this.userService['add']({
        data: {
          loginName: this.validateForm.value.loginName,
          name: this.validateForm.value.name,
          password: btoa(encodeURIComponent(this.validateForm.value.password)),
          phone: this.validateForm.value.phone,
          email: this.validateForm.value.email,
          roles: this.setRoles(roles),
          img: this.validateForm.value.img,
          parentId: this.validateForm.value.parentId
        }
      })
        .subscribe(response => {
          this.loading = false;
          if (response.code === 200) {
            this.checkOptionsOne.forEach(bbb => {
              bbb.checked = false;
            });
            this.router.navigate(['/admin/user']);
          } else {
            this._message.create('error', response.msg, { nzDuration: 4000 });
          }
        });
    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
  }

  setRoles(roles) {
    let miao = '';
    roles.forEach(aaa => {
      miao = miao + ',' + aaa;
    });
    miao = miao.substr(1);
    return miao;
  }
  getList() {
    this.groupService.list({
      params: {
        params2: 1,
        params3: 1000
      },
      data: {
      }
    })
      .subscribe(response => {
        if (response.code === 200) {
          this.parentIdList = response.data.pageData;
        }
      });
  }
}
