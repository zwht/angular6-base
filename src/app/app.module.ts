import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';
import { AdminModule } from './admin/admin.module';
import { OtherModule } from './other/other.module';


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
export class AppModule {
}
