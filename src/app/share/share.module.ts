// 公共模块
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

/** 注册语言包 **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

import {ZwHttpInterceptor} from './services/ZwHttpInterceptor';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CropperImgComponent } from './components/cropper-img/cropper-img.component';
import { CropperImgModalComponent } from './components/cropper-img-modal/cropper-img-modal.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgZorroAntdModule
    ],
    declarations: [
        CropperImgComponent,
        CropperImgModalComponent,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgZorroAntdModule,
        CropperImgComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ZwHttpInterceptor,
            multi: true,
        },
    ],
    entryComponents: [
        CropperImgModalComponent
    ]
})
export class ShareModule {
}
