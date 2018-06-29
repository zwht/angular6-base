import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from '../share/share.module';


import { MenuComponent } from './common/components/menu/menu.component';

export const routes: Routes = [
  {
    path: 'admin',
    component: MenuComponent,
    children: [
      {
        path: 'organization',
        loadChildren: './module.organization/organization.module#OrganizationModule',
        data: {
          name: '组织机构管理',
          // type: [1, 2],
          hideChild: true,
          menu: true
        }
      },
      {
        path: 'tool',
        loadChildren: './module.tool/tool.module#ToolModule',
        data: {
          name: '工具模块',
          // type: [1, 2],
          hideChild: true,
          menu: true
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MenuComponent
  ]
})
export class AdminModule { }
