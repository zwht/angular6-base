import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpsComponent } from './vps.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ShareModule } from '../../../share/share.module';

describe('VpsComponent', () => {
  let component: VpsComponent;
  let fixture: ComponentFixture<VpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpsComponent ],
      imports: [
        ShareModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
