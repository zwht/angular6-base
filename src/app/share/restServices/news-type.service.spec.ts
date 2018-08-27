import { TestBed, inject } from '@angular/core/testing';

import { NewsTypeService } from './news-type.service';

describe('NewsTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsTypeService]
    });
  });

  it('should be created', inject([NewsTypeService], (service: NewsTypeService) => {
    expect(service).toBeTruthy();
  }));
});
