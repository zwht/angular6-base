import { Component, Input, ViewChild, ElementRef, forwardRef, AfterViewInit, OnDestroy } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
declare var UE: any;

@Component({
  selector: 'app-ueditor',
  templateUrl: './ueditor.component.html',
  styleUrls: ['./ueditor.component.less'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => UeditorComponent),
    multi: true
  }]
})
export class UeditorComponent implements ControlValueAccessor, AfterViewInit, OnDestroy {
  editor;
  @Input()
  model: any;

  constructor() {

  }

  ngAfterViewInit() {
    this.editor = UE.getEditor('wangEditorCpt');
    this.editor.addListener('selectionchange', () => {
      this.onModelChange(this.editor.getContent());
    });
  }

  ngOnDestroy() {
    this.editor.destroy();
  }

  public onModelChange: Function = () => {

  }
  public onModelTouched: Function = () => { };
  writeValue(value: any) {
    this.model = value;
    if (this.model) {
      this.editor.ready(() => {
        this.editor.setContent(this.model);
      });
    }
  }
  registerOnChange(fn: Function): void {
    this.onModelChange = fn;
  }
  registerOnTouched(fn: Function): void {
    this.onModelTouched = fn;
  }
}
