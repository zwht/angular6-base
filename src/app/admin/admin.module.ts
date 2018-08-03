import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from '../share/share.module';


import { MenuComponent } from './common/components/menu/menu.component';
import { PermissionGuard } from '../share/services/PermissionGuard';

export const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      {
        path: 'user',
        loadChildren: './user/user.module#UserModule',
        data: {
          name: '用户',
          roles:[1001],
          menu: true
        },
        canActivate:[PermissionGuard]
      },
      {
        path: 'tools',
        loadChildren: './tools/tools.module#ToolsModule',
        data: {
          name: '工具',
          roles:[1001],
          //hideChild: true,
          menu: true
        },
        canActivate:[PermissionGuard]
      },
      {
        path: 'self',
        loadChildren: './self/self.module#SelfModule',
        data: {
          name: '个人中心'
        }
      },
      {
        path: 'news',
        loadChildren: './news/news.module#NewsModule',
        data: {
          name: '新闻',
          menu: true
        },
        canActivate:[PermissionGuard]
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
