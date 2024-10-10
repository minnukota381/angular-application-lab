import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // This ensures the service is available across the entire app without needing to manually provide it.
})
export class AuthService {
  // Variable to store the authentication status of the user (initially set to false).
  private isAuthenticated: boolean = false;

  constructor() {}

  /**
   * login method:
   * Attempts to log in the user by checking if the provided username and password match the predefined ones.
   * If the credentials are correct, isAuthenticated is set to true and the method returns true.
   * If not, isAuthenticated is set to false and it returns false.
   */
  login(username: string, password: string): boolean {
    if (username === 'helcy' && password === 'halcyon') {
      this.isAuthenticated = true; // Login successful, set authentication to true
      return true; // Return true indicating successful login
    }
    this.isAuthenticated = false; // Login failed, set authentication to false
    return false; // Return false indicating failed login
  }

  /**
   * logout method:
   * Logs the user out by setting the isAuthenticated flag to false.
   */
  logout(): void {
    this.isAuthenticated = false; // Logout successful, reset authentication to false
  }

  /**
   * isLoggedIn method:
   * Returns the current authentication status (true if the user is logged in, false otherwise).
   */
  isLoggedIn(): boolean {
    return this.isAuthenticated; // Return the current authentication status
  }
}
