import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { CodeService } from '../../../share/restServices/code.service';
import { NzMessageService } from '../../../../../node_modules/ng-zorro-antd';
import { RegExpService } from '../../../share/services/reg-exp.service';
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

  constructor(
    private _message: NzMessageService,
    private regExpService: RegExpService,
    private fb: FormBuilder,
    private codeService: CodeService,
    public route: ActivatedRoute,
    private router: Router,

  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getById(this.id);

    this.validateForm = this.fb.group({
      description: [null, []],
      name: [null, [Validators.required]],
      code: [null, [Validators.required]],
      groups: [null, [Validators.required]],
    });

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
      this.codeService.update({
        data: {
          id: this.id,
          groups: this.regExpService,
          code: this.regExpService,
          name: this.regExpService,
          description: this.regExpService,
        }
      })
        .subscribe(response => {
          this.loading = false;
          if (response.code === 200) {
            this.router.navigate(['/admin/tools']);
          } else {
            this._message.create('error', response.msg, { nzDuration: 4000 });
          }
        });
    }
  }
  getById(id) {
    this.codeService.getById({
      params: {
        params2: id
      },
      data: {}
    })
      .subscribe(response => {
        if (response.code === 200) {
          this.validateForm = this.fb.group({
            description: [response.data.description, []],
            name: [response.data.name, [Validators.required]],
            code: [response.data.code, [Validators.required]],
            groups: [response.data.groups, [Validators.required]],
          });
        }
      });
  }
}
