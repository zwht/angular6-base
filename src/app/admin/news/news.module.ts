import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from '../../share/share.module';

import { IndexComponent } from './index/index.component';
import { NewsTypeComponent } from './news-type/news-type.component';
import { NewsTypeAddComponent } from './news-type-add/news-type-add.component';
import { NewsAddComponent } from './news-add/news-add.component';

export const routes: Routes = [
    {
        path: '',
        component: IndexComponent,
        data: {
            name: '新闻',
            menu: true
        }
    },
    {
        path: 'add',
        component: NewsAddComponent,
        data: {
            name: '新闻',
        }
    },
    {
        path: 'type',
        component: NewsTypeComponent,
        data: {
            name: '新闻类型',
            menu: true
        }
    },
    {
        path: 'type/add',
        component: NewsTypeAddComponent,
        data: {
            name: '新闻类型',
        }
    },

];
@NgModule({
    imports: [
        ShareModule,
        RouterModule.forChild(routes)
    ],
    declarations: [IndexComponent, NewsTypeComponent, NewsTypeAddComponent, NewsAddComponent],
    providers: [],
})
export class NewsModule { }
