import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  // Constructor: I'm injecting the Router to redirect if the user isn't authenticated,
  // and also PLATFORM_ID to detect whether the code is running on the browser or server.
  constructor(
    private readonly router: Router,
    @Inject(PLATFORM_ID) private readonly platformId: Object
  ) {}

  // This method decides whether the route can be activated (user has access).
  canActivate(
    route: ActivatedRouteSnapshot, // Details of the current route being accessed
    state: RouterStateSnapshot // Current state of the router
  ): boolean {
    // Here, I'm calling checkLogin to see if the user is authenticated.
    const isLoggedIn = this.checkLogin();

    if (isLoggedIn) {
      // If the user is logged in, return true to grant access.
      return true;
    } else {
      // Otherwise, redirect to the login page and return false to block access.
      this.router.navigate(['/login']);
      return false;
    }
  }

  // This method checks if the user is logged in based on the platform.
  checkLogin(): boolean {
    // First, I make sure the code is running in the browser (not on the server).
    if (isPlatformBrowser(this.platformId)) {
      // Then, I check if 'isLoggedIn' is stored in localStorage as 'true'.
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      return isLoggedIn; // Return true if the user is logged in.
    }
    return false; // Return false if not running on browser or no login found.
  }
}
