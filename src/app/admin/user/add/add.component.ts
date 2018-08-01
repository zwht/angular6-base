import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { UserService } from '../../../share/restServices/UserService';
import { NzMessageService } from '../../../../../node_modules/ng-zorro-antd';
import { RegExpService } from '../../../share/services/reg-exp.service';
import { CodeDataService } from '../../../share/services/code-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less']
})
export class AddComponent implements OnInit {
  validateForm: FormGroup;
  loading = false;
  checkOptionsOne = [];

  constructor(
    private codeDataService: CodeDataService,
    private _message: NzMessageService,
    private regExpService: RegExpService,
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.checkOptionsOne = JSON.parse(JSON.stringify(this.codeDataService.codeObjList['10']))
    this.checkOptionsOne[0].checked = true
    this.validateForm = this.fb.group({
      email: [null, [Validators.email]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      loginName: [null, [Validators.required]],
      lcode: [null, [Validators.required, function (control: FormControl) {
        let isPass = false;
        if (control.value) {
          control.value.forEach(item => {
            if (item.checked) isPass = true;
          })
        }
        return isPass ? null : { lcode: { info: '类型不能为空' } }
      }]]
    });
  }
  submitForm(): void {

    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }



    if (this.validateForm.valid) {
      this.loading = true;

      let roles = this.checkOptionsOne.filter(item => {
        if (item.checked) return true
      }).map(item => {
        return item.code
      })
      this.userService['add']({
        data: {
          loginName: this.validateForm.value.loginName.replace(this.regExpService.listObj['前后空格'], ''),
          name: this.validateForm.value.name.replace(this.regExpService.listObj['前后空格'], ''),
          password: btoa(encodeURIComponent(this.validateForm.value.password.replace(this.regExpService.listObj['前后空格'], ''))),
          phone: this.validateForm.value.phone.replace(this.regExpService.listObj['前后空格'], ''),
          email: this.validateForm.value.email.replace(this.regExpService.listObj['前后空格'], ''),
          roles: this.fanyi(roles)
        }
      })
        .then(response => {
          this.loading = false;
          if (response.code === 200) {
            this.checkOptionsOne.forEach(bbb => {
              bbb.checked = false
            })
            this.router.navigate(['/admin/user'])
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

  fanyi(roles) {
    let miao = ''
    roles.forEach(aaa => {
      miao = miao + "," + aaa
    })
    miao = miao.substr(1);
    return miao
  }
}
