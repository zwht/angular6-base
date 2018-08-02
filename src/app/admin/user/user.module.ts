import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from '../../share/share.module';

import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { PermissionGuard } from '../../share/services/PermissionGuard';


export const routes: Routes = [
    {
        path: '',
        component: IndexComponent,
        data: {
            name: '用户',
            roles:[1001]
        },
        canActivate:[PermissionGuard]
    },
    {
        path: 'add',
        component: AddComponent,
        data: {
            name: '添加用户',
            roles:[1001]
        },
        canActivate:[PermissionGuard]
    },
    {
        path: 'update/:id',
        component: UpdateComponent,
        data: {
            name: '编辑用户',
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
    declarations: [IndexComponent, UpdateComponent, AddComponent],
    providers: [],
})
export class UserModule { }
