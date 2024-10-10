import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true, // This makes the component standalone, not relying on an external module declaration.
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, CommonModule, RouterModule], // Importing necessary modules for form handling and routing.
})
export class LoginComponent {
  // Variables bound to the login form fields.
  username: string = '';
  password: string = '';

  // Variable to keep track of how many times the login button has been clicked.
  loginClickCount: number = 0;

  // Maximum number of login attempts allowed.
  maxAttempts: number = 3;

  // Tracks how many attempts the user has left.
  attemptsLeft: number = this.maxAttempts;

  // Message shown to the user on the UI for login status or errors.
  showLoginMessage: string = '';

  // This flag disables the login button once the maximum attempts are reached.
  isButtonDisabled: boolean = false;

  // Hardcoded correct username and password (used for demo purposes).
  private readonly correctUsername: string = 'helcy';
  private readonly correctPassword: string = 'pww';

  // Router instance to handle navigation after successful login.
  constructor(private readonly router: Router) {}

  /**
   * onLogin method:
   * This method is called when the user clicks the login button.
   * It checks the entered username and password against the hardcoded values.
   * If login is successful, the user is redirected to the "halcyon" route.
   * If login fails, it decrements the number of attempts and displays appropriate messages.
   * If maximum attempts are reached, it disables the login button.
   */
  onLogin() {
    this.loginClickCount++; // Increment the login button click count.
    this.attemptsLeft--; // Decrease the number of attempts left.

    // Check if the entered credentials match the correct ones.
    if (
      this.username === this.correctUsername &&
      this.password === this.correctPassword
    ) {
      // Set logged-in state in localStorage to maintain the session state.
      localStorage.setItem('isLoggedIn', 'true');

      // Navigate to the "halcyon" route upon successful login.
      this.router.navigate(['/halcyon']);
    } else {
      // If login fails and there are attempts left, display how many attempts remain.
      if (this.attemptsLeft > 0) {
        this.showLoginMessage = `${this.attemptsLeft} attempt(s) left.`;
      } else {
        // If no attempts are left, disable the login button and show a restriction message.
        this.isButtonDisabled = true;
        this.showLoginMessage = 'You are restricted from logging in.';
      }
    }
  }

  /**
   * clearFields method:
   * This method is used to reset the form fields and states when needed.
   * It resets the username, password, attempts counter, and enables the login button.
   */
  clearFields() {
    this.username = ''; // Reset username field.
    this.password = ''; // Reset password field.
    this.attemptsLeft = this.maxAttempts; // Reset attempts counter to the maximum value.
    this.showLoginMessage = ''; // Clear any displayed messages.
    this.isButtonDisabled = false; // Re-enable the login button if it was disabled.
  }
}
