import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from '../../share/share.module';

import { IndexComponent } from './index/index.component';


export const routes: Routes = [
    {
        path: 'index',
        component: IndexComponent,
        data: {
            name: '码表管理',
            menu: true
        }
    }
];


@NgModule({
    imports: [
        ShareModule,
        RouterModule.forChild(routes)
    ],
    declarations: [IndexComponent],
    providers: [],
})
export class ToolsModule { }
