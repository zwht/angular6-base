import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from '../../share/share.module';

import { IndexComponent } from './index/index.component';
import { PermissionGuard } from '../../share/services/PermissionGuard';
import { VpsComponent } from './vps/vps.component';
import { VpsAddComponent } from './vps-add/vps-add.component';


export const routes: Routes = [
    {
        path: '',
        component: IndexComponent,
        data: {
            name: 'vpn',
            roles:[1001],
            menu: true
        },
        canActivate:[PermissionGuard]
    },
    {
        path: 'vps',
        component: VpsComponent,
        data: {
            name: 'vps',
            roles:[1001],
            menu: true
        },
        canActivate:[PermissionGuard]
    },
    {
        path: 'vps/add',
        component: VpsAddComponent,
        data: {
            name: 'vps添加',
            roles:[1001]
        },
        canActivate:[PermissionGuard]
    }
    
];


@NgModule({
    imports: [
        ShareModule,
        RouterModule.forChild(routes)
    ],
    declarations: [IndexComponent, VpsComponent, VpsAddComponent],
    providers: [],
})
export class VpnModule { }
