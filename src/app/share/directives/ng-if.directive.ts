import {
  Directive, OnInit, TemplateRef, Input, AfterViewInit,
  Output, EventEmitter, ViewContainerRef, ViewRef
} from '@angular/core';

@Directive({
  selector: '[appNgIf]'
})
export class NgIfDirective implements OnInit, AfterViewInit {
  key;
  @Input('appNgIf')
  set setData(v) {
    if (v) {
      this.key = v;
      if (this.viewContainerRef.length) {
        this.viewContainerRef.remove(0);
      }
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      const viewRef: ViewRef = this.viewContainerRef.get(0);
      const ab: HTMLElement = viewRef['rootNodes'][0];
      ab.style.background = 'red';
    }
  }
  @Output('appNgIf')
  aa = new EventEmitter();
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {
  }
  ngOnInit() {

  }
  ngAfterViewInit() {

  }
}
