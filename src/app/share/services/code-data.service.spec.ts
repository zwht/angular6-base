import { TestBed, inject } from '@angular/core/testing';

import { CodeDataService } from './code-data.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CodeService } from '../restServices/code.service';
import { SessionService } from './session.service';
import { async } from 'q';

describe('CodeDataService', () => {
  // let codeServiceSpy: jasmine.SpyObj<CodeService>; // 定义依赖的服务
  beforeEach(() => {
    // codeServiceSpy = jasmine.createSpyObj('firstService', ['list']); // 创建假的服务
    // codeServiceSpy['list'].and.returnValue('firstValue'); // 直接设定返回的结果 (这样不管这个服务的具体实现正不正确, 我们都不会被影响到)
    TestBed.configureTestingModule({
      providers: [CodeDataService, HttpClient, HttpHandler, CodeService,
        SessionService
        // { provide: CodeService, useValue: CodeServiceSpy } // 替换掉 provide 就可以了
      ]
    });
  });

  it('should be created', inject([CodeDataService], (service: CodeDataService) => {
    expect(service).toBeTruthy();
  }));
});
