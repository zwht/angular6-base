import { TestBed, inject } from '@angular/core/testing';

import { GroupService } from './group.service';
import { HttpClient } from '@angular/common/http';
import { ShareModule } from '../share.module';

describe('GroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupService, HttpClient],
      imports: [
        ShareModule
      ]
    });
  });

  it('should be created', inject([GroupService], (service: GroupService) => {
    expect(service).toBeTruthy();
  }));
});
