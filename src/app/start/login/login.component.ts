import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../share/restServices/UserService';
import { NzMessageService } from '../../../../node_modules/ng-zorro-antd';
import { RegExpService } from '../../share/services/reg-exp.service';
import { Router } from '../../../../node_modules/@angular/router';
import { CodeDataService } from '../../share/services/code-data.service';
import { SessionService } from '../../share/services/SessionService';

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
        private sessionService:SessionService,
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
        if (this.sessionService.getItem('remember') == 'true') {
            this.validateForm = this.fb.group({
                userName: [this.sessionService.getItem('username'), [Validators.required]],
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
        if (this.validateForm.value.remember == true) {
            if (this.panduan1 == false) {
                this.sessionService.setItem('username', this.validateForm.value.userName)
                this.sessionService.setItem('password', this.validateForm.value.password)
            } else {
                this.sessionService.setItem('username', this.validateForm.value.userName)
                this.sessionService.setItem('password', btoa(encodeURIComponent(this.validateForm.value.password.replace(this.regExpService.listObj['前后空格'], ''))), )
            }
        }
        this.sessionService.setItem('username', this.validateForm.value.userName)
        this.sessionService.setItem('remember', this.validateForm.value.remember)
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
                        this.sessionService.setItem('token', response.data.token, "2h");
                        this.sessionService.setItem('roles', response.data.roles);
                        this.sessionService.setItem('id', response.data.id);
                        this.router.navigateByUrl('/admin/user');
                    } else {
                        this._message.create('error', response.msg, { nzDuration: 4000 });
                    }
                });
        }
    }
}
