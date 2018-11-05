import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from '../share/share.module';


import { MenuComponent } from './common/components/menu/menu.component';
import { PermissionGuardService } from '../share/services/permission-guard.service';

export const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      {
        path: 'step',
        loadChildren: './step/step.module#StepModule',
        data: {
          name: 'Angular动态加载组件',
          // hideChild: true,
          roles: [1001],
          // menu: true
        },
        canActivate: [PermissionGuardService]
      },
      {
        path: 'user',
        loadChildren: './user/user.module#UserModule',
        data: {
          name: '用户管理',
          // hideChild: true,
          roles: [1001],
          menu: true
        },
        canActivate: [PermissionGuardService]
      },
      {
        path: 'tools',
        loadChildren: './tools/tools.module#ToolsModule',
        data: {
          name: '基础数据',
          roles: [1001],
          menu: true
        },
        canActivate: [PermissionGuardService]
      },
      {
        path: 'news',
        loadChildren: './news/news.module#NewsModule',
        data: {
          name: '新闻管理',
          roles: [1001, 1004],
          menu: true
        },
        canActivate: [PermissionGuardService]
      },
      {
        path: 'self',
        loadChildren: './self/self.module#SelfModule',
        data: {
          name: '个人中心'
        }
      },
    ]
  }
];

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MenuComponent,
  ]
})
export class AdminModule { }
