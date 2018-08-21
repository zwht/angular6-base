import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../../share/restServices/UserService';
import { NzMessageService } from 'ng-zorro-antd';
import { RegExpService } from '../../share/services/reg-exp.service';
import { Router } from '@angular/router';
import { CodeDataService } from '../../share/services/code-data.service';
import { SessionService } from '../../share/services/SessionService';
import { of } from '../../../../node_modules/rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-register-phone',
  templateUrl: './registerPhone.component.html',
  styleUrls: ['./registerPhone.component.less']
})
export class RegisterPhoneComponent implements OnInit {
  validateForm: FormGroup;
  loading = false;
  captchaLoading = false;
  timeK = 60;
  constructor(
    private fb: FormBuilder,
    private regExpService: RegExpService,
    private _message: NzMessageService,
    private router: Router,
    private userService: UserService) {
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

      const data = of(this.validateForm.value)
        .pipe(
          map(d => {
            for (const i in d) {
              if (i) {
                if (d[i] && typeof (d[i]) === 'string') {
                  d[i] = this.regExpService.replace('前后空格', d[i], '');
                }
                if (i === 'password') {
                  d[i] = btoa(encodeURIComponent(d[i]));
                }
              }
            }
            return d;
          })
        );
      data.subscribe(d => {
        this.userService['register']({
          params: { captcha: this.validateForm.value.captcha },
          data: d
        })
          .then(response => {
            this.loading = false;
            if (response.code === 200) {
              this.router.navigate(['/']);
            } else {
              this._message.create('error', response.msg, { nzDuration: 4000 });
            }
          });
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
    const dirty = this.validateForm.get('email').dirty;
    const errors = this.validateForm.get('email').errors;
    if (dirty && errors) {
      this._message.create('error', '输入正确email!', { nzDuration: 4000 });
      return;
    }
    this.captchaLoading = true;
    this.userService['getCaptchaEmail']({
      params: {
        email: this.validateForm.value.email
      },
      data: {}
    })
      .then(response => {
        this.captchaLoading = false;
        if (response.code === 200) {
          this.setTi();
        } else {
          this._message.create('error', response.msg, { nzDuration: 4000 });
        }
      });
  }

  setTi() {
    this.timeK--;
    if (this.timeK > 0) {
      setTimeout(() => {
        this.setTi();
      }, 1000);
    } else {
      this.timeK = 60;
    }
  }
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      loginName: [null, [Validators.required]],
      phonePrefix: ['+86'],
      phone: [null, []],
      captcha: [null, [Validators.required]],
      agree: [false]
    });
  }
}
