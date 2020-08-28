import { Injectable } from '@angular/core';
import { AuthenticationService } from './auth.service';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
} from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.isLoggedIn.pipe(
      map((isLogged) => {
        if (!isLogged) {
          if (state.url !== '/auth') {
            this.router.navigateByUrl('auth');
            return false;
          } else {
            return true;
          }
        } else {
          if (state.url === '/auth') {
            this.router.navigateByUrl('comics');
          }
          return true;
        }
      })
    );
  }
}
