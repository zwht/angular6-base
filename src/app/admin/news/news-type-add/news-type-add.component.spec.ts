import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsTypeAddComponent } from './news-type-add.component';

describe('NewsTypeAddComponent', () => {
  let component: NewsTypeAddComponent;
  let fixture: ComponentFixture<NewsTypeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsTypeAddComponent ]
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
