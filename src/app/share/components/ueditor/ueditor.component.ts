import { Component, Input, forwardRef, AfterViewInit, OnDestroy } from '@angular/core';
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
  newModel: any;
  constructor() {

  }
  ngInit() {
    if (this.model) {
      this.newModel = this.model;
    }
  }

  ngAfterViewInit() {
    this.editor = UE.getEditor('wangEditorCpt');
    this.editor.addListener('selectionchange', () => {
      const newStr = this.editor.getContent();
      if (this.newModel !== newStr) {
        this.newModel = newStr;
        this.onModelChange(newStr);
      }
    });
  }

  ngOnDestroy() {
    this.editor.destroy();
  }

  public onModelChange: Function = () => {
  }
  public onModelTouched: Function = () => { };
  writeValue(value: any) {
    if (value && this.editor) {
      this.editor.ready(() => {
        // if (this.isMarkdown) {
        //   this.editor.setDisabled('fullscreen');
        // } else {
        //   this.editor.setEnabled();
        // }
        const newStr = this.editor.getContent();
        if (newStr !== value) {
          this.newModel = value;
          this.editor.setContent(value);
        }
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
