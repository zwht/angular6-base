import { TestBed, inject } from '@angular/core/testing';

import { CodeDataService } from './code-data.service';

describe('CodeDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CodeDataService]
    });
  });

  it('should be created', inject([CodeDataService], (service: CodeDataService) => {
    expect(service).toBeTruthy();
  }));
});
