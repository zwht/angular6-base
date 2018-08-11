import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpnAddComponent } from './vpn-add.component';

describe('VpnAddComponent', () => {
  let component: VpnAddComponent;
  let fixture: ComponentFixture<VpnAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpnAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpnAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
