import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropperImgComponent } from './cropper-img.component';

describe('CropperImgComponent', () => {
  let component: CropperImgComponent;
  let fixture: ComponentFixture<CropperImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropperImgComponent ]
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
