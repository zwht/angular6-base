import { TestBed, inject } from '@angular/core/testing';

import { VpnRelationService } from './vpn-relation.service';
import { HttpClient } from '@angular/common/http';
import { ShareModule } from '../share.module';

describe('VpnRelationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VpnRelationService, HttpClient],
      imports: [
        ShareModule
      ]
    });
  });

  it('should be created', inject([VpnRelationService], (service: VpnRelationService) => {
    expect(service).toBeTruthy();
  }));
});
