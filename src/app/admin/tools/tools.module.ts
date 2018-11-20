import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from '../../share/share.module';

import { PermissionGuardService } from '../../share/services/permission-guard.service';

import { IndexComponent } from './index/index.component';
import { AddComponent } from './code-add/add.component';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupAddComponent } from './group-add/group-add.component';
import { ImgListComponent } from './img-list/img-list.component';


export const routes: Routes = [
    {
        path: '',
        component: ImgListComponent,
        data: {
            name: '图片管理',
            roles: [1001],
            menu: true
        },
        canActivate: [PermissionGuardService]
    },
    {
        path: 'code',
        component: IndexComponent,
        data: {
            name: '码表管理',
            menu: true

        }
    },
    {
        path: 'code/add',
        component: AddComponent,
        data: {
            name: '添加码表',
        }
    },
    {
        path: 'group',
        component: GroupListComponent,
        data: {
            name: '公司管理',
            roles: [1001],
            menu: true
        },
        canActivate: [PermissionGuardService]
    },
    {
        path: 'group/add',
        component: GroupAddComponent,
        data: {
            name: '编辑公司',
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
    declarations: [IndexComponent, AddComponent,
        GroupListComponent, GroupAddComponent,
        ImgListComponent],
    providers: [],
})
export class ToolsModule { }
