import { TestBed, inject } from '@angular/core/testing';

import { VpnService } from './vpn.service';
import { HttpClient } from '@angular/common/http';
import { ShareModule } from '../share.module';

describe('VpnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VpnService, HttpClient],
      imports: [
        ShareModule
      ]
    });
  });

  it('should be created', inject([VpnService], (service: VpnService) => {
    expect(service).toBeTruthy();
  }));
});
