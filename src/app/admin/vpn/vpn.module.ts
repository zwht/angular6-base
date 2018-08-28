import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from '../../share/share.module';

import { IndexComponent } from './index/index.component';
import { PermissionGuardService } from '../../share/services/permission-guard.service';
import { VpsComponent } from './vps/vps.component';
import { VpsAddComponent } from './vps-add/vps-add.component';
import { VpnAddComponent } from './vpn-add/vpn-add.component';

export const routes: Routes = [
    {
        path: '',
        component: IndexComponent,
        data: {
            name: 'vpn',
            roles: [1001],
            menu: true
        },
        canActivate: [PermissionGuardService]
    },
    {
        path: 'add',
        component: VpnAddComponent,
        data: {
            name: 'vpn添加',
            roles: [1001]
        },
        canActivate: [PermissionGuardService]
    },
    {
        path: 'vps',
        component: VpsComponent,
        data: {
            name: 'vps',
            roles: [1001],
            menu: true
        },
        canActivate: [PermissionGuardService]
    },
    {
        path: 'vps/add',
        component: VpsAddComponent,
        data: {
            name: 'vps添加',
            roles: [1001]
        },
        canActivate: [PermissionGuardService]
    }

];


@NgModule({
    imports: [
        ShareModule,
        RouterModule.forChild(routes)
    ],
    declarations: [IndexComponent, VpsComponent, VpsAddComponent, VpnAddComponent],
    providers: [],
})
export class VpnModule { }
