import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropperImgComponent } from './cropper-img.component';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HttpClient, HttpHandler } from '@angular/common/http';


describe('CropperImgComponent', () => {
  let component: CropperImgComponent;
  let fixture: ComponentFixture<CropperImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CropperImgComponent],
      imports: [
        FormsModule,
        NgZorroAntdModule,
      ],
      providers: [HttpHandler, HttpClient]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropperImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
