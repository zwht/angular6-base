import { TestBed, inject } from '@angular/core/testing';

import { VpnRelationService } from './vpn-relation.service';

describe('VpnRelationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VpnRelationService]
    });
  });

  it('should be created', inject([VpnRelationService], (service: VpnRelationService) => {
    expect(service).toBeTruthy();
  }));
});
