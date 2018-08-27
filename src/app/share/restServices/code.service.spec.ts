import { TestBed, inject } from '@angular/core/testing';

import { CodeService } from './code.service';

describe('CodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CodeService]
    });
  });

  it('should be created', inject([CodeService], (service: CodeService) => {
    expect(service).toBeTruthy();
  }));
});
