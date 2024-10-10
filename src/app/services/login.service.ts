import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // This makes the service available throughout the app without needing to explicitly provide it.
})
export class LoginService {
  // Property to store the login state of the user
  private isAuthenticated: boolean = false;

  constructor() {}

  /**
   * login method:
   * Checks if the provided username and password are correct (in this case, hardcoded as 'admin'/'admin123').
   * If they are correct, it sets isAuthenticated to true and returns true.
   * Otherwise, it sets isAuthenticated to false and returns false.
   */
  login(username: string, password: string): boolean {
    if (username === 'helcy' && password === 'halcyon') {
      this.isAuthenticated = true; // Set the login state to true on successful login
      return true; // Return true to indicate successful login
    }
    this.isAuthenticated = false; // Set login state to false on failed login
    return false; // Return false to indicate login failure
  }

  /**
   * isLoggedIn method:
   * This method returns the current authentication state (true if logged in, false otherwise).
   */
  isLoggedIn(): boolean {
    return this.isAuthenticated; // Return the current authentication state
  }

  /**
   * logout method:
   * This method logs the user out by setting isAuthenticated to false.
   */
  logout(): void {
    this.isAuthenticated = false; // Reset authentication state on logout
  }
}
