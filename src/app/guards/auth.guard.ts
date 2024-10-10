import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isLoggedIn = this.checkLogin();

    if (isLoggedIn) {
      return true; // Allow access
    } else {
      this.router.navigate(['/login']); // Redirect to login if not authenticated
      return false; // Prevent access
    }
  }

  checkLogin(): boolean {
    // Check login state from localStorage (replace with better logic if needed)
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    return isLoggedIn === 'true'; // Return true if logged in
  }
}
