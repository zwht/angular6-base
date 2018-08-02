import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from '../share/share.module';


import { MenuComponent } from './common/components/menu/menu.component';

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
          // type: [1, 2],
          //hideChild: true,
          menu: true
        }
      },
      {
        path: 'tools',
        loadChildren: './tools/tools.module#ToolsModule',
        data: {
          name: '工具',
          // type: [1, 2],
          //hideChild: true,
          menu: true
        }
      },
      {
        path: 'self',
        loadChildren: './self/self.module#SelfModule',
        data: {
          name: '个人中心',
          // type: [1, 2],
          // hideChild: true,
          // menu: true
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
