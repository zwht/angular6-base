import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpsAddComponent } from './vps-add.component';

describe('VpsAddComponent', () => {
  let component: VpsAddComponent;
  let fixture: ComponentFixture<VpsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
