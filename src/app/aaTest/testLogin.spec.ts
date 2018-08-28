import { TestBed, inject } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { isObject } from 'util';

import { ShareModule } from '../share/share.module';
import { SessionService } from '../share/services/session.service';
import { UserService } from '../share/restServices/user.service';


describe('CodeService', () => {
  let srv: UserService;
  let sessionService: SessionService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ShareModule],
      providers: [UserService, HttpClient, SessionService]
    });
  });
  beforeEach(inject([UserService], s => { srv = s; }));
  beforeEach(inject([SessionService], s => { sessionService = s; }));

  it('#获取code数据', (done: DoneFn) => {
    srv.login({
      data: {
        password: 'MTIzNDU2',
        loginName: 'zw'
      }
    }).subscribe(response => {
      if (response.code === 200) {
        sessionService.setItem('userName', response.data.name, '2h');
        sessionService.setItem('token', response.data.token, '2h');
        sessionService.setItem('hardImg', response.data.img, '2h');
        sessionService.setItem('roles', response.data.roles, '2h');
        sessionService.setItem('id', response.data.id, '2h');
      }
      expect(isObject(response)).toBe(true);
      expect(response.code).toBe(200);
      done();
    });
  });
});
