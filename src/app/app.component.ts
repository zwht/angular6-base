import { Component } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    title = 'app works!';

    constructor(private titleService: Title,
        private router: Router,
        private activatedRoute: ActivatedRoute) {
    }
    ngOnInit() {
        this.setTitle();

    }
    // 页面路由改变，设置title
    setTitle() {
        this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd),
                map(() => this.activatedRoute),
                map(route => {
                    while (route.firstChild) {
                        route = route.firstChild;
                    }
                    return route;
                })
                //map(route => route.data)
            )
            .subscribe((event) => {
                if (event && event.data && event.data['value'] && event.data['value'].name) {
                    this.titleService.setTitle('' + event.data['value'].name);
                } else {
                    this.titleService.setTitle('页面不存在');
                }
            });
    }
}
