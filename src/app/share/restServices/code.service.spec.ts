import { TestBed, inject } from '@angular/core/testing';

import { CodeService } from './code.service';
import { HttpClient } from '@angular/common/http';
import { ShareModule } from '../share.module';
import { isObject } from 'util';

describe('LoginService', () => {
  let srv: CodeService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ShareModule],
      providers: [CodeService, HttpClient]
    });
  });
  beforeEach(inject([CodeService], s => { srv = s; }));

  it('#获取code数据', (done: DoneFn) => {
    srv.getById({
      params: {
        params2: '2f10a75f-41bf-4f7c-aca1-80d51b6940f4'
      }
    }).subscribe(res => {
      done();
      expect(isObject(res)).toBe(true);
      expect(res.code).toBe(200);
    });
  });
});
