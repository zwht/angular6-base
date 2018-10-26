import { Component, Input, ViewChild, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
declare var require: any;
const E = require('../../../../assets/libs/wangeditor');
@Component({
  selector: 'app-wang-editor',
  templateUrl: './wang-editor.component.html',
  styleUrls: ['./wang-editor.component.less'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => WangEditorComponent),
    multi: true
  }]
})
export class WangEditorComponent implements ControlValueAccessor {
  editor;
  @Input()
  model: any;
  @ViewChild('box')
  box: ElementRef;
  constructor() { }

  ngOnInit() {
    const thart = this;
    this.editor = new E(this.box.nativeElement);
    // 自定义 onchange 触发的延迟时间，默认为 200 ms
    this.editor.customConfig.onchangeTimeout = 1000; // 单位 ms
    this.editor.customConfig.onchange = function (html) {
      thart.onModelChange(html);
    };
    this.editor.create();
    this.editor.txt.html(this.model);
  }
  public onModelChange: Function = () => {

  }
  public onModelTouched: Function = () => { };
  writeValue(value: any) {
    this.model = value;
    if (this.model) {
      this.editor.txt.html(this.model);
    }
  }
  registerOnChange(fn: Function): void {
    this.onModelChange = fn;
  }
  registerOnTouched(fn: Function): void {
    this.onModelTouched = fn;
  }
}
