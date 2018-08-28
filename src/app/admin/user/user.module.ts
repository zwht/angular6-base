import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from '../../share/share.module';

import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { PermissionGuardService } from '../../share/services/permission-guard.service';
import { VpnComponent } from './vpn/vpn.component';


export const routes: Routes = [
    {
        path: '',
        component: IndexComponent,
        data: {
            name: '用户',
            roles: [1001],
            menu: true
        },
        canActivate: [PermissionGuardService]
    },
    {
        path: 'add',
        component: AddComponent,
        data: {
            name: '添加用户',
            roles: [1001]
        },
        canActivate: [PermissionGuardService]
    },
    {
        path: 'update/:id',
        component: UpdateComponent,
        data: {
            name: '编辑用户',
            roles: [1001]
        },
        canActivate: [PermissionGuardService]
    },
    {
        path: 'relation/:id',
        component: VpnComponent,
        data: {
            name: 'vpn绑定',
            roles: [1001]
        },
        canActivate: [PermissionGuardService]
    },


];


@NgModule({
    imports: [
        ShareModule,
        RouterModule.forChild(routes)
    ],
    declarations: [IndexComponent, UpdateComponent, VpnComponent, AddComponent],
    providers: [],
})
export class UserModule { }
