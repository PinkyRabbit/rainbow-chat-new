import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

// import { Auth } from '../services/Auth';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: Auth, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(this.auth.loggedIn());
    if (this.auth.loggedIn()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

  canLoad(route: ActivatedRouteSnapshot): boolean {
    if (this.auth.loggedIn()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

  gotoLogin() {
    this.router.navigate(['/login']);
    return false;
  }
}
