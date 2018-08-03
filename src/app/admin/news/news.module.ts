import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from '../../share/share.module';

import { IndexComponent } from './index/index.component';
import { GuanliComponent } from './guanli/guanli.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';

export const routes: Routes = [
    {
        path: '',
        component: IndexComponent,
        data: {
            name: '个人中心',
        }
    },
    {
        path: 'guanli',
        component: GuanliComponent,
        data: {
            name: '新闻管理',
            menu: true
        }
    },
    {
        path: 'guanli/add',
        component: AddComponent,
        data: {
            name: '添加新闻',
        }
    },    
    {
        path: 'guanli/update/:id',
        component: UpdateComponent,
        data: {
            name: '添加新闻',
        }
    },
    
];


@NgModule({
    imports: [
        ShareModule,
        RouterModule.forChild(routes)
    ],
    declarations: [IndexComponent, AddComponent,GuanliComponent, UpdateComponent],
    providers: [],
})
export class NewsModule { }
