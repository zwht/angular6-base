import { TestBed, inject } from '@angular/core/testing';

import { VpnService } from './vpn.service';

describe('VpnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VpnService]
    });
  });

  it('should be created', inject([VpnService], (service: VpnService) => {
    expect(service).toBeTruthy();
  }));
});
