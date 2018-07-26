import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.less']
})
export class UpdateComponent implements OnInit {
  validateForm: FormGroup;
  loading = false;
  id = 0;

  constructor(
    private _message: NzMessageService,
    private regExpService: RegExpService,
    private fb: FormBuilder,
    private userService: UserService,
    public route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getById(this.id)

    this.validateForm = this.fb.group({
      email: [null, [Validators.email]],
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      loginName: [null, [Validators.required]],
    });

  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.valid) {
      this.loading = true;
      this.userService['update']({
        data: {
          id:this.id,
          loginName: this.validateForm.value.loginName.replace(this.regExpService.listObj['前后空格'], ''),
          name: this.validateForm.value.name.replace(this.regExpService.listObj['前后空格'], ''),
          phone: this.validateForm.value.phone.replace(this.regExpService.listObj['前后空格'], ''),
          email: this.validateForm.value.email.replace(this.regExpService.listObj['前后空格'], ''),
        }
      })
        .then(response => {
          this.loading = false;
          if (response.code === 200) {
            alert("保存成功")
          } else {
            this._message.create('error', response.msg, { nzDuration: 4000 });
          }
        });
    }
  }
  getById(id){
    this.userService['getById']({
      params:{
        params2:id
      },
      data:{}
    })
      .then(response => {
        if(response.code==200){
          
          this.validateForm = this.fb.group({
            email: [response.data.email, [Validators.email]],
            name: [response.data.name, [Validators.required]],
            phone: [response.data.phone, [Validators.required]],
            loginName: [response.data.loginName, [Validators.required]],
          });
        }
      })
  }

}
