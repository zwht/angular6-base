import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpnAddComponent } from './vpn-add.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ShareModule } from '../../../share/share.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('VpnAddComponent', () => {
  let component: VpnAddComponent;
  let fixture: ComponentFixture<VpnAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpnAddComponent ],
      imports: [
        ShareModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ]
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
