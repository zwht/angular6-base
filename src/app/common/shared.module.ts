// 公共模块
import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

/** 注册语言包 **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

import {ZwHttpInterceptor} from './service/ZwHttpInterceptor';
import {HttpServer} from './service/HttpServer';
import {OtherService} from './restService/OtherService';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule

    ],
    declarations: [],
    exports: [
        ReactiveFormsModule
        

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
export class SharedModule {
}
