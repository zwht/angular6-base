import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { UserService } from '../../../share/restServices/user.service';
import { NzMessageService } from '../../../../../node_modules/ng-zorro-antd';
import { RegExpService } from '../../../share/services/reg-exp.service';
import { CodeDataService } from '../../../share/services/code-data.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.less']
})
export class UpdateComponent implements OnInit {
  validateForm: FormGroup;
  loading = false;
  id = 0;
  checkOptionsOne = [];


  constructor(
    private codeDataService: CodeDataService,
    private _message: NzMessageService,
    private regExpService: RegExpService,
    private fb: FormBuilder,
    private userService: UserService,
    public route: ActivatedRoute,
    private router: Router,

  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getById(this.id);

    if (this.codeDataService && this.codeDataService.codeObjList['10']) {
      this.checkOptionsOne = JSON.parse(JSON.stringify(this.codeDataService.codeObjList['10']));
      this.checkOptionsOne = this.checkOptionsOne.filter(item => {
        return item.code !== 1001;
      });
    }

    this.validateForm = this.fb.group({
      email: [null, [Validators.email]],
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      loginName: [null, [Validators.required]],
      lcode: [null, [Validators.required]],
      img: [null, [Validators.required]],
    });
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

      const roles = this.checkOptionsOne.filter(item => {
        if (item.checked) {
          return true;
        }
      }).map(item => {
        return item.code;
      });
      this.userService.update({
        data: {
          id: this.id,
          loginName: this.validateForm.value.loginName,
          name: this.validateForm.value.name,
          phone: this.validateForm.value.phone,
          email: this.validateForm.value.email,
          roles: this.fanyi(roles),
          img: this.validateForm.value.img
        }
      })
        .subscribe(response => {
          this.loading = false;
          if (response.code === 200) {
            this.router.navigate(['/admin/user']);
          } else {
            this._message.create('error', response.msg, { nzDuration: 4000 });
          }
        });
    }
  }
  getById(id) {
    this.userService.getById({
      params: {
        params2: id
      },
      data: {}
    })
      .subscribe(response => {
        if (response.code === 200) {
          if (response.data.roles !== '') {
            const aaa = response.data.roles.split(',');
            this.checkOptionsOne.forEach(item => {
              aaa.forEach(obj => {
                if (item.code === obj) { item.checked = true; }
              });
            });
          }
          this.validateForm = this.fb.group({
            email: [response.data.email, [Validators.email]],
            name: [response.data.name, [Validators.required]],
            phone: [response.data.phone, [Validators.required]],
            loginName: [response.data.loginName, [Validators.required]],
            lcode: [this.checkOptionsOne, [Validators.required, function (control: FormControl) {
              let isPass = false;
              if (control.value) {
                control.value.forEach(item => {
                  if (item.checked) {
                    isPass = true;
                  }
                });
              }
              return isPass ? null : { lcode: { info: '类型不能为空' } };
            }]],
            img: [response.data.img, [Validators.required]],
          });
        }
      });
  }

  fanyi(roles) {
    let miao = '';
    roles.forEach(aaa => {
      miao = miao + ',' + aaa;
    });
    miao = miao.substr(1);
    return miao;
  }
}
