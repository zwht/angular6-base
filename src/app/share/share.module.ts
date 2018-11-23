// 公共模块
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** 注册语言包 **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

import { ZwHttpInterceptorService } from './services/zw-http-interceptor.service';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CropperImgComponent } from './components/cropper-img/cropper-img.component';
import { CropperImgModalComponent } from './components/cropper-img-modal/cropper-img-modal.component';
import { CodeNamePipe } from './pipe/code-name.pipe';
import { TrimDirective } from './directives/trim.directive';
import { WangEditorComponent } from './components/wang-editor/wang-editor.component';
import { NgIfDirective } from './directives/ng-if.directive';
import { UeditorComponent } from './components/ueditor/ueditor.component';
import { LoadingComponent } from './components/loading/loading.component';


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
        CodeNamePipe,
        TrimDirective,
        WangEditorComponent,
        NgIfDirective,
        UeditorComponent,
        LoadingComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgZorroAntdModule,
        CropperImgComponent,
        CodeNamePipe,
        TrimDirective,
        WangEditorComponent,
        NgIfDirective,
        UeditorComponent,
        LoadingComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ZwHttpInterceptorService,
            multi: true,
        },
    ],
    entryComponents: [
        CropperImgModalComponent
    ]
})
export class ShareModule {
}
