import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { IndexComponent } from './index/index.component';
import { ShareModule } from '../../share/share.module';

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
        ShareModule,
        RouterModule.forChild(routes)
    ],
    declarations: [IndexComponent],
    providers: [],
})
export class OrganizationModule { }
