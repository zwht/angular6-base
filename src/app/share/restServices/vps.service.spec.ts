import { TestBed, inject } from '@angular/core/testing';

import { VpsService } from './vps.service';
import { HttpClient } from '@angular/common/http';
import { ShareModule } from '../share.module';

describe('VpsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VpsService, HttpClient],
      imports: [
        ShareModule
      ]
    });
  });

  it('should be created', inject([VpsService], (service: VpsService) => {
    expect(service).toBeTruthy();
  }));
});
