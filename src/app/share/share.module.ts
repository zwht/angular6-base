// 公共模块
import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

/** 注册语言包 **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

import {ZwHttpInterceptor} from './services/ZwHttpInterceptor';
import {HttpServer} from './services/HttpServer';
import {OtherService} from './restServices/OtherService';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { UserService } from './restServices/UserService';
import { CodeService } from './restServices/CodeService';
import { RegExpService } from './services/reg-exp.service';
import { SessionService } from './services/SessionService';
import { PermissionGuard } from './services/PermissionGuard';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgZorroAntdModule
    ],
    declarations: [],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgZorroAntdModule
    ],
    providers: [
        //{ provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ZwHttpInterceptor,
            multi: true,
        },
        HttpServer,
        OtherService,
        DatePipe,
        UserService,
        CodeService,
        RegExpService,
        SessionService,
        PermissionGuard
    ],
    entryComponents: []
})
export class ShareModule {
}
