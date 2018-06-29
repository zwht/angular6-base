import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../common/shared.module';

import { IndexComponent } from './index/index.component';


export const routes: Routes = [
    {
        path: '',
        data: {
            name: '组织机构管理'
        },
        children: [
            {
                path: 'index',
                component: IndexComponent,
                data: {
                    name: '组织机构管理',
                    menu: true
                }
            }
        ]
    }
];
@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [IndexComponent],
    providers: [],
})
export class OrganizationModule { }
