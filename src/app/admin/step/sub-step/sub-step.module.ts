import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { StepComponent } from './step/step.component';

@NgModule({
  declarations: [StepComponent],
  exports: [StepComponent]
})
export class SubStepModule {
  static withComponents(components: any) {
    return {
      ngModule: SubStepModule,
      providers: [
        { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true }
      ]
    };
  }
}
