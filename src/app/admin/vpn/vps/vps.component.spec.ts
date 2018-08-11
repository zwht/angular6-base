import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpsComponent } from './vps.component';

describe('VpsComponent', () => {
  let component: VpsComponent;
  let fixture: ComponentFixture<VpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpsComponent ]
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
