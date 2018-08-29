import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User1Component } from '../user1/user1.component';
import { User2Component } from '../user2/user2.component';
import { User3Component } from '../user3/user3.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  stepComp: any;
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const step = params['step'] || 'step1';
      // 组件与参数对应表
      const compMaps = {
        'step1': { component: User1Component, inputs: { step: step } },
        'step2': { component: User2Component, inputs: { step: step } },
        'step3': { component: User3Component, inputs: { step: step } },
      };
      this.stepComp = compMaps[step];
    });
  }

}
