import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { SessionService } from './SessionService';
@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(
    private sessionService: SessionService,
    private router: Router
  ) { }

  checkLogin(): boolean {
    this.router.navigate(['/']);
    return false;
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //token过期跳转登录
    if (!this.sessionService.getItem("token")) {
     this.checkLogin()
     return false
    }
    let roleIds = this.sessionService.getItem("roles") ? this.sessionService.getItem("roles").split(",") : []
    let key = false

    if (route.data.roles && route.data.roles.length) {
      route.data.roles.forEach(item => {
        roleIds.forEach(obj => {
          if (item == obj) {
            key = true
          }
        })
      })
    } else {
      key = true;
    }
    return key
  }
}
