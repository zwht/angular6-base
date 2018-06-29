import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {ShareModule} from '../share/share.module';


import {LoginComponent} from './login/login.component';
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
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [
        ShareModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [LoginComponent,NotFoundComponent],
    providers: [],
})
export class OtherModule {
}
