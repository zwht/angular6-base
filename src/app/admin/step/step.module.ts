import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from '../../share/share.module';

import { IndexComponent } from './index/index.component';
import { SubStepModule } from './sub-step/sub-step.module';
import { User1Component } from './user1/user1.component';
import { User2Component } from './user2/user2.component';
import { User3Component } from './user3/user3.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    data: {
      name: 'step',
    }
  }
];

const COMPONENTS = [User1Component, User2Component, User3Component];
@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(routes),
    SubStepModule,
    SubStepModule.withComponents([...COMPONENTS])
  ],
  declarations: [...COMPONENTS, IndexComponent],
  providers: [],
})
export class StepModule { }
