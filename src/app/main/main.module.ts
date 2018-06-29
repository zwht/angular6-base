import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ShareModule } from '../share/share.module';
import { OtherModule } from '../other/other.module';
import { AdminModule } from '../admin/admin.module';

import { AppComponent } from './components/app/app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        NoopAnimationsModule,
        BrowserAnimationsModule,
        HttpModule,

        ShareModule,
        RouterModule.forRoot([], { useHash: true }),
        AdminModule,
        OtherModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent],
    entryComponents: []
})
export class MainModule {
}
