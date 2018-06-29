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

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule

    ],
    declarations: [],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ZwHttpInterceptor,
            multi: true,
        },
        HttpServer,
        OtherService,
        DatePipe
    ],
    entryComponents: []
})
export class ShareModule {
}
