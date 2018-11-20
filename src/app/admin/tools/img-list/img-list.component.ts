import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { GroupService } from '../../../share/restServices/group.service';
import { Router } from '@angular/router';
import { FileService } from 'src/app/share/restServices/file.service';
import { NzModalService } from 'ng-zorro-antd';
import { CropperImgModalComponent } from 'src/app/share/components/cropper-img-modal/cropper-img-modal.component';

@Component({
  selector: 'app-img-list',
  templateUrl: './img-list.component.html',
  styleUrls: ['./img-list.component.less', '../../common/style/list.less']
})
export class ImgListComponent implements OnInit {
  loading = false;
  dialog = false;
  fileName = '';
  pageSize = 10;
  pageNum = 1;
  totalCount = null;
  list = [];
  search = {
    name: '',
    id: ''
  };
  boxStyle = { width: 600, height: 200 };
  @ViewChild('addImg')
  inputImage: ElementRef;

  constructor(
    private router: Router,
    private nzModalService: NzModalService,
    private fileService: FileService
  ) { }

  ngOnInit() {
    this.getList();
    this.cropperInit();
  }

  getList(num?) {
    this.pageNum = num ? num : 1;
    this.fileService.list({
      params: {
        params2: this.pageNum,
        params3: this.pageSize
      },
      data: {
        name: this.search.name,
        id: this.search.id
      }
    })
      .subscribe(response => {
        if (response.code === 200) {
          this.list = response.data.pageData;
          this.totalCount = response.data.totalCount;
        }
      });
  }

  del(id) {
    this.fileService.del({
      params: {
        params2: id
      },
      data: {}
    })
      .subscribe(response => {
        if (response.code === 200) {
          this.getList();
        }
      });
  }
  add() {
    this.inputImage.nativeElement.setAttribute('type', 'text');
    this.inputImage.nativeElement.setAttribute('type', 'file');
    this.inputImage.nativeElement.click();
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
  save(cropper) {
    this.loading = true;
    const result = cropper['getCroppedCanvas']({ width: this.boxStyle.width, height: this.boxStyle.height });
    result.toBlob((blob) => {
      const formData = new FormData();
      formData.append('file', blob, this.fileName);
      this.fileService.add({
        data: formData,
        params: {
          fileType: 1302
        }
      })
        .subscribe(response => {
          this.loading = false;
          this.getList();
        });
    });
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
          } else {
            window.alert('Please choose an image file.');
          }
        }
      };
    } else {
    }
  }

}
