import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuanliComponent } from './guanli.component';

describe('GuanliComponent', () => {
  let component: GuanliComponent;
  let fixture: ComponentFixture<GuanliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuanliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuanliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
