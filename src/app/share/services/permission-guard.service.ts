/**
 * Created by zhaowei on 2018/8/1.
 */
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SessionService } from './session.service';
@Injectable({
  providedIn: 'root',
})
export class PermissionGuardService implements CanActivate {
  constructor(
    private sessionService: SessionService,
    private router: Router
  ) { }

  checkLogin(): boolean {
    this.router.navigate(['/']);
    return false;
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // token过期跳转登录
    if (!this.sessionService.getItem('token')) {
      this.checkLogin();
      return false;
    }
    const roleIds = this.sessionService.getItem('roles') ? this.sessionService.getItem('roles').split(',') : []
    let key = false;

    if (route.data.roles && route.data.roles.length) {
      route.data.roles.forEach(item => {
        roleIds.forEach(obj => {
          if (item === parseInt(obj, 10)) {
            key = true;
          }
        });
      });
    } else {
      key = true;
    }
    return key;
  }
}
