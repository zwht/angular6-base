import { TestBed, inject } from '@angular/core/testing';

import { CodeDataService } from './code-data.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('CodeDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CodeDataService, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([CodeDataService], (service: CodeDataService) => {
    expect(service).toBeTruthy();
  }));
});
