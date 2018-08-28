import { TestBed, inject } from '@angular/core/testing';

import { NewsTypeService } from './news-type.service';

import { ShareModule } from '../share.module';
import { HttpClient } from '@angular/common/http';

describe('NewsTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsTypeService, HttpClient],
      imports: [
        ShareModule
      ]
    });
  });

  it('should be created', inject([NewsTypeService], (service: NewsTypeService) => {
    expect(service).toBeTruthy();
  }));
});
