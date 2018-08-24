import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsTypeComponent } from './news-type.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ShareModule } from '../../../share/share.module';

describe('NewsTypeComponent', () => {
  let component: NewsTypeComponent;
  let fixture: ComponentFixture<NewsTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsTypeComponent ],
      imports: [
        ShareModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
