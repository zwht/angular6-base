import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../common/shared.module';

import {CodeListComponent} from './code-list/code-list.component';


export const routes: Routes = [
    {
        path: '',
        data: {
            name: '工具模块'
        },
        children: [
            {
                path: 'code',
                component: CodeListComponent,
                data: {
                    name: '码管理',
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
    declarations: [CodeListComponent],
    providers: [],
})
export class ToolModule { }
