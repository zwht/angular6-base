import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../common/shared.module';


import {LoginComponent} from './login/login.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        data: {
            name: '用户登录'
        }
    }
];

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [LoginComponent],
    providers: [],
})
export class OtherModule {
}
