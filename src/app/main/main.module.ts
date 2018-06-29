import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';


import {SharedModule} from '../common/shared.module';

import {AppComponent} from './component/app/app.component';
import {NotFoundComponent} from './component/not-found/not-found.component';
import {MenuComponent} from './component/menu/menu.component';
import {CommonModule} from '@angular/common';
import {OtherModule} from '../other/other.module';

@NgModule({
    declarations: [AppComponent, NotFoundComponent, MenuComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        BrowserModule,
        NoopAnimationsModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        SharedModule,
        OtherModule,
        RouterModule.forRoot([
            {
                path: 'admin',
                component: MenuComponent,
                children: [
                    // {
                    //     path: 'organization',
                    //     loadChildren: 'app/organization/organization.module#OrganizationModule',
                    //     data: {
                    //         name: '组织机构管理',
                    //         // type: [1, 2],
                    //         hideChild: true,
                    //         menu: true
                    //     }
                    // },
                    // {
                    //     path: 'tool',
                    //     loadChildren: 'app/tool/tool.module#ToolModule',
                    //     data: {
                    //         name: '工具模块',
                    //         // type: [1, 2],
                    //         hideChild: true,
                    //         menu: true
                    //     }
                    // }
                ]
            },
            {
                path: '**',
                component: NotFoundComponent
            }
        ], {useHash: true})
    ],
    providers: [
    ],
    bootstrap: [AppComponent],
    entryComponents: []
})

export class MainModule {
}
