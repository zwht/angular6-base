import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { CodeService } from '../../../share/restServices/CodeService';
import { NzMessageService } from '../../../../../node_modules/ng-zorro-antd';
import { RegExpService } from '../../../share/services/reg-exp.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less']
})
export class AddComponent implements OnInit {
  validateForm: FormGroup;
  loading = false;

  constructor(
    private _message: NzMessageService,
    private regExpService: RegExpService,
    private fb: FormBuilder,
    private CodeService: CodeService
  ) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      description: [null, [Validators.required]],
      name: [null, [Validators.required]],
      ID: [null, [Validators.required]],
    });
  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.valid) {
      this.loading = true;
      this.CodeService['add']({
        data: {
          id: this.validateForm.value.ID.replace(this.regExpService.listObj['前后空格'], ''),
          name: this.validateForm.value.name.replace(this.regExpService.listObj['前后空格'], ''),
          description: this.validateForm.value.description.replace(this.regExpService.listObj['前后空格'], ''),
        }
      })
        .then(response => {
          this.loading = false;
          if (response.code === 200) {
            alert("添加成功")
          } else {
            this._message.create('error', response.msg, { nzDuration: 4000 });
          }
        });
    }

  }
  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

}
