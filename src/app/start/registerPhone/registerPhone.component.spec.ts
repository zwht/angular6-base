import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPhoneComponent } from './registerPhone.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ShareModule } from '../../share/share.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('RegisterPhoneComponent', () => {
  let component: RegisterPhoneComponent;
  let fixture: ComponentFixture<RegisterPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPhoneComponent ],
      imports: [
        ShareModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ]
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
