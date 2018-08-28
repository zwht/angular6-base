import { TestBed, inject } from '@angular/core/testing';

import { NewsService } from './news.service';
import { HttpClient } from '@angular/common/http';
import { ShareModule } from '../share.module';

describe('NewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsService, HttpClient],
      imports: [
        ShareModule
      ]
    });
  });

  it('should be created', inject([NewsService], (service: NewsService) => {
    expect(service).toBeTruthy();
  }));
});
