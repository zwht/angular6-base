import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { RegExpService } from '../../../share/services/reg-exp.service';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { VpnService } from '../../../share/restServices/vpn.service';
import { VpsService } from '../../../share/restServices/vps.service';

@Component({
  selector: 'app-vpn-add',
  templateUrl: './vpn-add.component.html',
  styleUrls: ['../../common/style/add.less', './vpn-add.component.less']
})
export class VpnAddComponent implements OnInit {

  validateForm: FormGroup;
  loading = false;
  id;
  title = '添加vpn';
  vpsList = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private _message: NzMessageService,
    private regExpService: RegExpService,
    private fb: FormBuilder,
    private vpnService: VpnService,
    private vpsService: VpsService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.getVpsList();

    this.validateForm = this.fb.group({
      vpsId: [null, []],
      ip: [null, []],
      password: [null, []],
      name: [null, [Validators.required]]
    });
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.title = '编辑vpn';
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
    this.vpnService.add({
      data: d
    })
      .subscribe(response => {
        this.loading = false;
        if (response.code === 200) {
          this.router.navigate(['/admin/vpn']);
        } else {
          this._message.create('error', response.msg, { nzDuration: 4000 });
        }
      });
  }
  edit(d) {
    this.vpnService.update({
      data: Object.assign({ id: this.id }, d)
    })
      .subscribe(response => {
        this.loading = false;
        if (response.code === 200) {
          this.router.navigate(['/admin/vpn']);
        } else {
          this._message.create('error', response.msg, { nzDuration: 4000 });
        }
      });
  }
  getDetail() {
    this.vpnService.getById({
      params: { params2: this.id }
    })
      .subscribe(response => {
        if (response.code === 200) {
          this.validateForm = this.fb.group({
            ip: [response.data.ip, []],
            password: [response.data.password, []],
            vpsId: [response.data.vpsId, []],
            name: [response.data.name, [Validators.required]]
          });
        }
      });
  }
  getVpsList(num?) {
    this.vpsService.list({
      params: {
        params2: 1,
        params3: 1000
      },
      data: {
      }
    })
      .subscribe(response => {
        if (response.code === 200) {
          this.vpsList = response.data.pageData;
        }
      });
  }
}
