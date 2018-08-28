import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from '../../share/share.module';

import { PermissionGuardService } from '../../share/services/permission-guard.service';

import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupAddComponent } from './group-add/group-add.component';


export const routes: Routes = [
    {
        path: '',
        component: IndexComponent,
        data: {
            name: '码表管理',
            menu: true

        }
    },
    {
        path: 'add',
        component: AddComponent,
        data: {
            name: '添加码表',
        }
    },
    {
        path: 'update/:id',
        component: UpdateComponent,
        data: {
            name: '编辑码表',
        }
    },
    {
        path: 'group',
        component: GroupListComponent,
        data: {
            name: '公司管理',
            roles:[1001],
            menu: true
        },
        canActivate:[PermissionGuardService]
    },
    {
        path: 'group/add',
        component: GroupAddComponent,
        data: {
            name: '编辑公司',
            roles:[1001]
        },
        canActivate:[PermissionGuardService]
    }
];


@NgModule({
    imports: [
        ShareModule,
        RouterModule.forChild(routes)
    ],
    declarations: [IndexComponent, UpdateComponent, AddComponent,
        GroupListComponent, GroupAddComponent],
    providers: [],
})
export class ToolsModule { }
