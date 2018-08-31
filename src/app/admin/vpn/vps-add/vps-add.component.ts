import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from '../../../../../node_modules/ng-zorro-antd';
import { RegExpService } from '../../../share/services/reg-exp.service';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { VpsService } from '../../../share/restServices/vps.service';

@Component({
  selector: 'app-vps-add',
  templateUrl: './vps-add.component.html',
  styleUrls: ['../../common/style/add.less', './vps-add.component.less']
})
export class VpsAddComponent implements OnInit {
  validateForm: FormGroup;
  loading = false;
  id;
  title = '添加vps';

  constructor(
    private activatedRoute: ActivatedRoute,
    private _message: NzMessageService,
    private regExpService: RegExpService,
    private fb: FormBuilder,
    private vpsService: VpsService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      description: [null, []],
      ip: [null, []],
      overdueTime: [null, []],
      address: [null, []],
      name: [null, [Validators.required]]
    });
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.title = '编辑vps';
        this.getDetail();
      }
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
      const data = of(this.validateForm.value)
        .pipe(
          map(d => {
            for (const i in d) {
              if (i === 'overdueTime') {
                d[i] = new Date(d[i]).getTime();
              }
            }
            return d;
          })
        );
      data.subscribe(d => {
        if (this.id) {
          this.edit(d);
        } else {
          this.add(d);
        }
      });
    }
  }
  add(d) {
    this.vpsService.add({
      data: d
    })
      .subscribe(response => {
        this.loading = false;
        if (response.code === 200) {
          this.router.navigate(['/admin/vpn/vps']);
        } else {
          this._message.create('error', response.msg, { nzDuration: 4000 });
        }
      });
  }
  edit(d) {
    this.vpsService.update({
      data: Object.assign({ id: this.id }, d)
    })
      .subscribe(response => {
        this.loading = false;
        if (response.code === 200) {
          this.router.navigate(['/admin/vpn/vps']);
        } else {
          this._message.create('error', response.msg, { nzDuration: 4000 });
        }
      });
  }
  getDetail() {
    this.vpsService.getById({
      params: { params2: this.id }
    })
      .subscribe(response => {
        if (response.code === 200) {
          this.validateForm = this.fb.group({
            ip: [response.data.ip, []],
            overdueTime: [new Date(response.data.overdueTime), []],
            address: [response.data.address, []],
            description: [response.data.description, []],
            name: [response.data.name, [Validators.required]]
          });
        }
      });
  }
}
