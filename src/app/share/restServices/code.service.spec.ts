import { TestBed, inject } from '@angular/core/testing';

import { CodeService } from './code.service';
import { HttpClient } from '@angular/common/http';
import { ShareModule } from '../share.module';

describe('CodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CodeService, HttpClient],
      imports: [
        ShareModule
      ]
    });
  });

  it('should be created', inject([CodeService], (service: CodeService) => {
    expect(service).toBeTruthy();
  }));
});
