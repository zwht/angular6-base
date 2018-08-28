import { TestBed, inject } from '@angular/core/testing';

import { FileService } from './file.service';
import { HttpClient } from '@angular/common/http';
import { ShareModule } from '../share.module';

describe('FileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileService, HttpClient],
      imports: [
        ShareModule
      ]
    });
  });

  it('should be created', inject([FileService], (service: FileService) => {
    expect(service).toBeTruthy();
  }));
});
