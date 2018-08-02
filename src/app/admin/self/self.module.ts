import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from '../../share/share.module';

import { IndexComponent } from './index/index.component';
import { UppaswdComponent } from './uppaswd/uppaswd.component';


export const routes: Routes = [
    {
        path: '',
        component: IndexComponent,
        data: {
            name: '个人中心',
        }
    },
    {
        path: 'uppaswd',
        component: UppaswdComponent,
        data: {
            name: '修改密码',
        }
    },
];


@NgModule({
    imports: [
        ShareModule,
        RouterModule.forChild(routes)
    ],
    declarations: [IndexComponent, UppaswdComponent],
    providers: [],
})
export class SelfModule { }
