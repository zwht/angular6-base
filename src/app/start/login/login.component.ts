import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../share/restServices/user.service';
import { NzMessageService } from 'ng-zorro-antd';
import { RegExpService } from '../../share/services/reg-exp.service';
import { Router } from '@angular/router';
import { CodeDataService } from '../../share/services/code-data.service';
import { SessionService } from '../../share/services/session.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less'],
    providers: []
})

export class LoginComponent implements OnInit {
    validateForm: FormGroup;
    loading = false;
    panduan1 = false;
    constructor(
        private sessionService: SessionService,
        private codeDataService: CodeDataService,
        private fb: FormBuilder,
        private router: Router,
        private _message: NzMessageService,
        private regExpService: RegExpService,
        private userService: UserService) {
    }

    ngOnInit(): void {
        this.panduan();
        this.codeDataService.getData();

    }
    panduan(): void {
        if (this.sessionService.getItem('remember') === 'true') {
            this.validateForm = this.fb.group({
                userName: [this.sessionService.getItem('loginKey'), [Validators.required]],
                password: [this.sessionService.getItem('password'), [Validators.required]],
                remember: [true],
                panduan1: true
            });
        } else {
            this.validateForm = this.fb.group({
                userName: [null, [Validators.required]],
                password: [null, [Validators.required]],
                remember: [false],
                panduan1: false,
            });
        }
    }

    panduan2(): void {
        if (this.validateForm.value.remember === true) {
            if (this.panduan1 === false) {
                this.sessionService.setItem('loginKey', this.validateForm.value.userName);
                this.sessionService.setItem('password', this.validateForm.value.password);
            } else {
                this.sessionService.setItem('loginKey', this.validateForm.value.userName);
                this.sessionService.setItem('password',
                    btoa(encodeURIComponent(this.validateForm.value.password)));
            }
        }
        this.sessionService.setItem('loginKey', this.validateForm.value.userName);
        this.sessionService.setItem('remember', this.validateForm.value.remember);
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
            this.userService['login']({
                data: {
                    password: this.panduan1 ? btoa(encodeURIComponent(this.validateForm.value.password)) : this.validateForm.value.password,
                    loginName: this.validateForm.value.userName
                }
            })
                .subscribe(response => {
                    this.loading = false;
                    if (response.code === 200) {
                        this.panduan2();
                        this.sessionService.setItem('userName', response.data.name, '2h');
                        this.sessionService.setItem('token', response.data.token, '2h');
                        this.sessionService.setItem('hardImg', response.data.img, '2h');
                        this.sessionService.setItem('roles', response.data.roles, '2h');
                        this.sessionService.setItem('id', response.data.id, '2h');
                        setTimeout(() => {
                            if (response.data.roles.indexOf('1001') !== -1) {
                                this.router.navigateByUrl('/admin/user');
                            } else if (response.data.roles.indexOf('1002') !== -1) {
                                this.router.navigateByUrl('/admin/self');
                            } else if (response.data.roles.indexOf('1003') !== -1) {
                                this.router.navigateByUrl('/admin/self');
                            } else {
                                this.router.navigateByUrl('/admin/self');
                            }
                        }, 200);
                    } else {
                        this._message.create('error', response.msg, { nzDuration: 4000 });
                    }
                });
        }
    }
}
