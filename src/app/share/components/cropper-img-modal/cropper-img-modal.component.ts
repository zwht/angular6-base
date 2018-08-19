import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { NzModalRef} from 'ng-zorro-antd';
declare var Cropper: any;

@Component({
  selector: 'app-cropper-img-modal',
  templateUrl: './cropper-img-modal.component.html',
  styleUrls: ['./cropper-img-modal.component.less']
})
export class CropperImgModalComponent implements OnInit {

  @ViewChild('image')
  image: ElementRef;

  @Input()
  boxStyle;
  @Input()
  blobURL;

  cropper;
  emitDataOutside() {
    this.modal.destroy(this.cropper);
    this.handleCancel();
  }

  handleCancel() {
    this.modal.destroy('onCancel');
  }

  constructor(
    private modal: NzModalRef) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.cropper = new Cropper(this.image.nativeElement, {
        viewMode: 3,
        dragMode: 'move',
        aspectRatio: this.boxStyle.width / this.boxStyle.height,
        autoCropArea: 1,
        cropBoxResizable: false,
        // cropBoxMovable: false,
        crop: function (e) {
        }
      });
      this.cropper.reset().replace(this.blobURL);
    }, 100);
  }

}
