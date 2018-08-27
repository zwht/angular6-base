import { TestBed, inject } from '@angular/core/testing';

import { VpsService } from './vps.service';

describe('VpsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VpsService]
    });
  });

  it('should be created', inject([VpsService], (service: VpsService) => {
    expect(service).toBeTruthy();
  }));
});
