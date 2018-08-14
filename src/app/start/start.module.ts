import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from '../share/share.module';

import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        data: {
            name: '用户登录'
        }
    },
    {
        path: 'register',
        component: RegisterComponent,
        data: {
            name: '用户注册'
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
    declarations: [LoginComponent, NotFoundComponent, RegisterComponent],
    providers: [],
})
export class StartModule { }
