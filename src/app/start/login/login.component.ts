import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../share/restServices/UserService';
import { NzMessageService } from '../../../../node_modules/ng-zorro-antd';

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
        private _message: NzMessageService,
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
                    password: btoa(encodeURIComponent(this.validateForm.value.password)),
                    loginName: this.validateForm.value.userName
                }
            })
                .then(response => {
                    this.loading = false;
                    if (response.code === 200) {
                        localStorage.setItem('photo', response.data.photo);
                    } else {
                        this._message.create('error', response.msg, { nzDuration: 4000 });
                    }
                });
        }
    }
}
