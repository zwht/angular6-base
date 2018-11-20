import { Component, Input, ViewChild, ElementRef, forwardRef } from '@angular/core';
import { FileService } from '../../restServices/file.service';
import { NzModalService } from 'ng-zorro-antd';
import { CropperImgModalComponent } from '../cropper-img-modal/cropper-img-modal.component';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-cropper-img',
  templateUrl: './cropper-img.component.html',
  styleUrls: ['./cropper-img.component.less'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CropperImgComponent),
    multi: true
  }]
})
export class CropperImgComponent implements ControlValueAccessor {

  loading = false;
  dialog = false;
  contentDialogStyle = {};
  fileName = '';

  model: any;

  @Input()
  boxStyle;

  @ViewChild('inputImage')
  inputImage: ElementRef;

  constructor(
    private fileService: FileService,
    private nzModalService: NzModalService
  ) { }
  ngOnInit() {
    if (this.boxStyle) {
      this.boxStyle.width = this.boxStyle.width ? this.boxStyle.width : 200;
      this.boxStyle.height = this.boxStyle.height ? this.boxStyle.height : 200;
    } else {
      this.boxStyle = { width: 200, height: 200 };
    }
    this.contentDialogStyle = { width: this.boxStyle.width + 'px', height: this.boxStyle.height + 'px' };
    this.cropperInit();
  }


  public onModelChange: Function = () => {

  }
  public onModelTouched: Function = () => { };
  writeValue(value: any) {
    this.model = value;
  }
  registerOnChange(fn: Function): void {
    this.onModelChange = fn;
  }
  registerOnTouched(fn: Function): void {
    this.onModelTouched = fn;
  }

  cropperInit() {
    // Import image
    const URL = window.URL;
    if (URL) {
      const that = this;
      this.inputImage.nativeElement.onchange = function () {
        const files = that.inputImage.nativeElement.files;
        let file;
        if (files && files.length) {
          that.dialog = true;
          file = files[0];
          that.fileName = file.name;
          if (/^image\/\w+/.test(file.type)) {
            that.showModalForComponent(URL.createObjectURL(file));
            // (that.cropper  as any).reset().replace(blobURL);
          } else {
            window.alert('Please choose an image file.');
          }
        }
        // $(inputImage).find('img').hide();
      };
    } else {
      // inputImage.disabled = true;
    }
  }

  showDialog() {
    this.inputImage.nativeElement.setAttribute('type', 'text');
    this.inputImage.nativeElement.setAttribute('type', 'file');
    this.inputImage.nativeElement.click();
  }
  save(cropper) {
    this.loading = true;
    const result = cropper['getCroppedCanvas']({ width: this.boxStyle.width, height: this.boxStyle.height });
    result.toBlob((blob) => {
      const formData = new FormData();
      formData.append('file', blob, this.fileName);
      this.fileService.add({
        data: formData,
        params: {
          fileType: 1301
        }
      })
        .subscribe(response => {
          this.model = response.data;
          this.onModelChange(response.data);
          this.inputImage.nativeElement.files = null;
          this.dialog = false;
          this.loading = false;
        });
    });
  }

  showModalForComponent(blobURL) {
    const subscription = this.nzModalService.create({
      nzTitle: '裁剪图片',
      nzContent: CropperImgModalComponent,
      nzOnOk() {
      },
      nzOnCancel() {
        console.log('Click cancel');
      },
      nzFooter: null,
      nzComponentParams: {
        blobURL: blobURL,
        boxStyle: this.boxStyle
      }
    });
    subscription.afterClose.subscribe(result => {
      if (result !== 'onShown' && result.getCroppedCanvas) {
        this.save(result);
      }
    });
  }
}
