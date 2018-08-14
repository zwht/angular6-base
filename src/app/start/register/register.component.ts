import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../../share/restServices/UserService';
import { NzMessageService } from 'ng-zorro-antd';
import { RegExpService } from '../../share/services/reg-exp.service';
import { Router } from '@angular/router';
import { CodeDataService } from '../../share/services/code-data.service';
import { SessionService } from '../../share/services/SessionService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  validateForm: FormGroup;
  loading=false;
  constructor(
    private fb: FormBuilder,
    private regExpService: RegExpService,
    private _message: NzMessageService,
    private router: Router,
    private userService: UserService) {
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.valid) {
      this.loading = true;
      this.userService['register']({
        params:{captcha:this.validateForm.value.captcha},
        data: {
          loginName: this.validateForm.value.name.replace(this.regExpService.listObj['前后空格'], ''),
          password: btoa(encodeURIComponent(this.validateForm.value.password.replace(this.regExpService.listObj['前后空格'], ''))),
          phone: this.validateForm.value.phone.replace(this.regExpService.listObj['前后空格'], ''),
          email: this.validateForm.value.email.replace(this.regExpService.listObj['前后空格'], ''),
        }
      })
        .then(response => {
          this.loading = false;
          if (response.code === 200) {
            this.router.navigate(['/'])
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
    this.validateForm.controls['email'].markAsDirty();
    this.validateForm.controls['email'].updateValueAndValidity();
    let dirty = this.validateForm.get('email').dirty;
    let errors = this.validateForm.get('email').errors;
    if(dirty&&errors){
      this._message.create('error', '输入正确email!', { nzDuration: 4000 });
      return;
    }
    this.userService['getCaptchaEmail']({
      params: {
        email: this.validateForm.value.email
      },
      data: {}
    })
      .then(response => {
        if (response.code == 200) {
          
        }
      })

  }



  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      name: [null, [Validators.required]],
      phonePrefix: ['+86'],
      phone: [null, []],
      captcha: [null, [Validators.required]],
      agree: [false]
    });
  }
}
