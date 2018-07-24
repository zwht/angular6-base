import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../share/restServices/UserService';
import { NzMessageService } from '../../../../node_modules/ng-zorro-antd';
import { RegExpService } from '../../share/services/reg-exp.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less'],
    providers: []
})

export class LoginComponent implements OnInit {
    validateForm: FormGroup;
    loading = false;
    constructor(
        private fb: FormBuilder,
        private router: Router,
        private _message: NzMessageService,
        private regExpService: RegExpService,
        private userService: UserService) {
    }

    ngOnInit(): void {
        this.validateForm = this.fb.group({
            userName: [null, [Validators.required]],
            password: [null, [Validators.required]],
            remember: [true]
        });
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
                    password: btoa(encodeURIComponent(this.validateForm.value.password.replace(this.regExpService.listObj['前后空格'], ''))),
                    loginName: this.validateForm.value.userName.replace(this.regExpService.listObj['前后空格'], '')
                }
            })
                .then(response => {
                    this.loading = false;
                    if (response.code === 200) {
                        localStorage.setItem('token',response.data.token)
                        this.router.navigateByUrl('/admin/user');
                    } else {
                        this._message.create('error', response.msg, { nzDuration: 4000 });
                    }
                });
        }
    }
}