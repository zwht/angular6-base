import { Component, OnInit } from '@angular/core';
import { VpnRelationService } from '../../../share/restServices/VpnRelationService';
import { VpnService } from '../../../share/restServices/VpnService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vpn',
  templateUrl: './vpn.component.html',
  styleUrls: ['../../common/style/add.less', './vpn.component.less']
})
export class VpnComponent implements OnInit {
  userVpnList = [];
  vpnList = [];
  loading = false;
  vpnRelation = {
    vpnId: '',
    userId: '',
    overdueTime: new Date()
  }
  constructor(
    private route: ActivatedRoute,
    private vpnService: VpnService,
    private vpnRelationService: VpnRelationService
  ) { }

  ngOnInit() {
    this.vpnRelation.userId = this.route.snapshot.params['id'];
    this.getVpnList();
    this.getRelationByUserId();
  }
  del(id){
    debugger
  }
  getRelationByUserId() {
    this.vpnRelationService['getListByUserId']({
      params: {
        id: this.vpnRelation.userId
      },
      data: {}
    })
      .then(response => {
        if (response.code == 200) {
          this.userVpnList = response.data;
        }
      })
  }

  getVpnList() {
    this.vpnService['list']({
      params: {
        params2: 1,
        params3: 1000
      },
      data: {
      }
    })
      .then(response => {
        if (response.code == 200) {
          this.vpnList = response.data.pageData;

        }
      })
  }
  add() {
    this.loading = true;
    this.vpnRelationService['add']({
      data: {
        userId: this.vpnRelation.userId,
        vpnId: this.vpnRelation.vpnId,
        overdueTime: new Date(this.vpnRelation.overdueTime).getTime(),
      }
    })
      .then(response => {
        this.loading = false;
        this.getRelationByUserId();
      });
  }
}
