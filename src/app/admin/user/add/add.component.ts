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
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      loginName: [null, [Validators.required]],
      captcha: [null, [Validators.required]]
    });
  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.valid) {
      this.loading = true;
      this.userService['add']({
        data: {
          loginName: this.validateForm.value.loginName.replace(this.regExpService.listObj['前后空格'], ''),
          name: this.validateForm.value.name.replace(this.regExpService.listObj['前后空格'], ''),
          password: btoa(encodeURIComponent(this.validateForm.value.password.replace(this.regExpService.listObj['前后空格'], ''))),
          phone: this.validateForm.value.phone.replace(this.regExpService.listObj['前后空格'], ''),
          email: this.validateForm.value.email.replace(this.regExpService.listObj['前后空格'], ''),
        }
      })
        .then(response => {
          this.loading = false;
          if (response.code === 200) {
            
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

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

}
