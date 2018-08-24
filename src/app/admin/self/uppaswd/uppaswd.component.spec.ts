import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UppaswdComponent } from './uppaswd.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ShareModule } from '../../../share/share.module';

describe('UppaswdComponent', () => {
  let component: UppaswdComponent;
  let fixture: ComponentFixture<UppaswdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UppaswdComponent ],
      imports: [
        ShareModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UppaswdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
