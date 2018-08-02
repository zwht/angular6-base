import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UppaswdComponent } from './uppaswd.component';

describe('UppaswdComponent', () => {
  let component: UppaswdComponent;
  let fixture: ComponentFixture<UppaswdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UppaswdComponent ]
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
