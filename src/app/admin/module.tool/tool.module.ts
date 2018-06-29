import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CodeListComponent} from './code-list/code-list.component';
import { ShareModule } from '../../share/share.module';


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
        ShareModule,
        RouterModule.forChild(routes)
    ],
    declarations: [CodeListComponent],
    providers: [],
})
export class ToolModule { }
