import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTrim]'
})
export class TrimDirective {
  constructor(
    private el: ElementRef
  ) { }
  @HostBinding('class.appTrim') add = true;
  @HostListener('blur', ['$event.target'])
  keyupFun(e) {
    if (e.value) {
      this.el.nativeElement.value = e.value.trim();
    }
  }
}
