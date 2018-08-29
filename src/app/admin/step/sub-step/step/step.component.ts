import { Component, Input, ViewContainerRef, ComponentFactoryResolver, OnDestroy, ComponentRef } from '@angular/core';
@Component({
  selector: 'app-step',
  template: ``
})
export class StepComponent implements OnDestroy {
  private currentComponent: ComponentRef<any>;
  constructor(private vcr: ViewContainerRef, private cfr: ComponentFactoryResolver) { }
  @Input() set data(data: { component: any, inputs?: { [key: string]: any } }) {
    const compFactory = this.cfr.resolveComponentFactory(data.component);
    const component = this.vcr.createComponent(compFactory);
    if (data.inputs) {
      for (const key in data.inputs) {
        if (key) {
          component.instance[key] = data.inputs[key];
        }
      }
    }
    this.destroy();
    this.currentComponent = component;
  }

  destroy() {
    if (this.currentComponent) {
      this.currentComponent.destroy();
      this.currentComponent = null;
    }
  }

  ngOnDestroy(): void {
    this.destroy();
  }
}
