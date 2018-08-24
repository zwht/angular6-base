import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsTypeAddComponent } from './news-type-add.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ShareModule } from '../../../share/share.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('NewsTypeAddComponent', () => {
  let component: NewsTypeAddComponent;
  let fixture: ComponentFixture<NewsTypeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsTypeAddComponent ],
      imports: [
        ShareModule,
        BrowserAnimationsModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
