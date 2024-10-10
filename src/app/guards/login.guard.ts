import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  // Constructor: Here, I'm injecting the LoginService to check if the user is logged in
  // and Router to navigate them to the login page if they aren't authenticated.
  constructor(
    private readonly loginService: LoginService,
    private readonly router: Router
  ) {}

  // This is the guard logic that gets triggered before route activation.
  canActivate(
    next: ActivatedRouteSnapshot, // The current route about to be activated
    state: RouterStateSnapshot // The state of the router at the time of activation
  ): boolean {
    // I'm checking if the user is logged in by calling isLoggedIn() from LoginService.
    if (this.loginService.isLoggedIn()) {
      // If the user is authenticated, allow access to the route.
      return true;
    } else {
      // If not, redirect them to the login page and prevent route access.
      this.router.navigate(['/loginAu']);
      return false;
    }
  }
}
