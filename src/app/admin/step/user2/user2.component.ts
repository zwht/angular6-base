import { Component, OnDestroy, Input, Injector, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.less']
})
export class User2Component implements OnDestroy {
  private _step: string;
  @Input()
  set step(str: string) {
    console.log('@Input step: ' + str);
    this._step = str;
  }
  get step() {
    return this._step;
  }

  ngOnInit() {
    console.log('step one init');
  }
  ngOnDestroy(): void {
    console.log('step one destroy');
  }

}
