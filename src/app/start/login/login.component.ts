import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../share/restServices/UserService';
import { NzMessageService } from '../../../../node_modules/ng-zorro-antd';
import { RegExpService } from '../../share/services/reg-exp.service';
import { Router } from '../../../../node_modules/@angular/router';
import { CodeDataService } from '../../share/services/code-data.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less'],
    providers: []
})

export class LoginComponent implements OnInit {
    validateForm: FormGroup;
    loading = false;
    panduan1: boolean = false;
    constructor(
        private codeDataService:CodeDataService,
        private fb: FormBuilder,
        private router: Router,
        private _message: NzMessageService,
        private regExpService: RegExpService,
        private userService: UserService) {
    }

    ngOnInit(): void {
        this.panduan()
        this.codeDataService.getData();
    }
    panduan(): void {
        if (localStorage.getItem('remember') == 'true') {
            this.validateForm = this.fb.group({
                userName: [localStorage.getItem('username'), [Validators.required]],
                password: [localStorage.getItem('password'), [Validators.required]],
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
        if (this.validateForm.value.remember == true) {
            if (this.panduan1 == false) {
                localStorage.setItem('username', this.validateForm.value.userName)
                localStorage.setItem('password', this.validateForm.value.password)
            } else {
                localStorage.setItem('username', this.validateForm.value.userName)
                localStorage.setItem('password', btoa(encodeURIComponent(this.validateForm.value.password.replace(this.regExpService.listObj['前后空格'], ''))), )
            }
        }
        localStorage.setItem('remember', this.validateForm.value.remember)
    }

    submitForm(): void {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }


        if (this.validateForm.valid) {
            this.loading = true;
            this.userService['login']({
                data: {
                    //password:  this.validateForm.value.password.replace(this.regExpService.listObj['前后空格'],''),
                    password: this.panduan1 ? btoa(encodeURIComponent(this.validateForm.value.password.replace(this.regExpService.listObj['前后空格'], ''))) : this.validateForm.value.password,
                    loginName: this.validateForm.value.userName.replace(this.regExpService.listObj['前后空格'], '')
                }
            })
                .then(response => {
                    this.loading = false;
                    if (response.code === 200) {
                        this.panduan2();
                        localStorage.setItem('token', response.data.token);
                        this.router.navigateByUrl('/admin/user');
                    } else {
                        this._message.create('error', response.msg, { nzDuration: 4000 });
                    }
                });
        }
    }
}
