import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShareModule} from '../share/share.module';

export const routes: Routes = [];

@NgModule({
    imports: [
        ShareModule,
        RouterModule.forChild(routes)
    ],
    declarations: [],
    providers: [],
})
export class OtherModule {
}
