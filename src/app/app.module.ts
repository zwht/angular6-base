import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';
import { AdminModule } from './admin/admin.module';
import { OtherModule } from './other/other.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N, zh_CN, NgZorroAntdModule } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);


@NgModule({
    declarations: [AppComponent],
    imports: [
        NoopAnimationsModule,
        BrowserAnimationsModule,
        HttpModule,

        ShareModule,
        RouterModule.forRoot([], { useHash: true }),
        AdminModule,
        OtherModule,
        FormsModule,
        HttpClientModule,
        NgZorroAntdModule
    ],
    providers: [
        { provide: NZ_I18N, useValue: zh_CN }
    ],
    bootstrap: [AppComponent],
    entryComponents: []
})
export class AppModule {
}
