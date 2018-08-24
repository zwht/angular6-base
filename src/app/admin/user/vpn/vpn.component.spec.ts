import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpnComponent } from './vpn.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ShareModule } from '../../../share/share.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('VpnComponent', () => {
  let component: VpnComponent;
  let fixture: ComponentFixture<VpnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpnComponent ],
      imports: [
        ShareModule,
        BrowserAnimationsModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
