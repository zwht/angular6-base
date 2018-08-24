import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropperImgModalComponent } from './cropper-img-modal.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NzModalRef } from 'ng-zorro-antd';
describe('CropperImgModalComponent', () => {
  let component: CropperImgModalComponent;
  let fixture: ComponentFixture<CropperImgModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CropperImgModalComponent],
      imports: [
        NgZorroAntdModule
      ],
      providers: [NzModalRef]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropperImgModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
