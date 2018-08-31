import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { UserService } from '../../../share/restServices/user.service';
import { NzMessageService } from 'ng-zorro-antd';
import { RegExpService } from '../../../share/services/reg-exp.service';
import { CodeDataService } from '../../../share/services/code-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uppaswd',
  templateUrl: './uppaswd.component.html',
  styleUrls: ['./uppaswd.component.less']
})
export class UppaswdComponent implements OnInit {
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
  ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      ypassword: [null, [Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
    });
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
  }
  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
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
      this.userService['updatePassword']({
        params: {
          oldPassword: btoa(encodeURIComponent(this.validateForm.value.ypassword)),
          password: btoa(encodeURIComponent(this.validateForm.value.password)),
        },
        data: {}
      })
        .subscribe(response => {
          this.loading = false;
          if (response.code === 200) {
            // this.router.navigate(['/admin/self'])
          } else {
            this._message.create('error', response.msg, { nzDuration: 4000 });
          }
        });
    }
  }
}
