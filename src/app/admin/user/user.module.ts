import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from '../../share/share.module';

import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { PermissionGuard } from '../../share/services/PermissionGuard';
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
        canActivate: [PermissionGuard]
    },
    {
        path: 'add',
        component: AddComponent,
        data: {
            name: '添加用户',
            roles: [1001]
        },
        canActivate: [PermissionGuard]
    },
    {
        path: 'update/:id',
        component: UpdateComponent,
        data: {
            name: '编辑用户',
            roles: [1001]
        },
        canActivate: [PermissionGuard]
    },
    {
        path: 'relation/:id',
        component: VpnComponent,
        data: {
            name: 'vpn绑定',
            roles: [1001]
        },
        canActivate: [PermissionGuard]
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
