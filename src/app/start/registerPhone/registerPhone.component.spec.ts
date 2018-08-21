import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPhoneComponent } from './registerPhone.component';

describe('RegisterPhoneComponent', () => {
  let component: RegisterPhoneComponent;
  let fixture: ComponentFixture<RegisterPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
