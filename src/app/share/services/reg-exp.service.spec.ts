import { TestBed, inject } from '@angular/core/testing';

import { RegExpService } from './reg-exp.service';

describe('RegExpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegExpService]
    });
  });

  it('should be created', inject([RegExpService], (service: RegExpService) => {
    expect(service).toBeTruthy();
  }));
});
