import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from '../share/share.module';


import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        data: {
            name: '用户登录'
        }
    },
    {
        path: '**',
        component: NotFoundComponent,
        data: {
            name: '404页面不存在'
        }
    }
];


@NgModule({
    imports: [
        ShareModule,
        RouterModule.forChild(routes)
    ],
    declarations: [LoginComponent, NotFoundComponent],
    providers: [],
})
export class StartModule { }
