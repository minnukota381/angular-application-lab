import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, CommonModule, RouterModule],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginClickCount: number = 0;
  maxAttempts: number = 3;
  attemptsLeft: number = this.maxAttempts;
  showLoginMessage: string = '';
  isButtonDisabled: boolean = false;

  // Define correct credentials (for demonstration purposes)
  private correctUsername: string = 'minnu';
  private correctPassword: string = 'pwd';

  constructor(private router: Router) {}

  onLogin() {
    this.loginClickCount++;
    this.attemptsLeft--;

    if (
      this.username === this.correctUsername &&
      this.password === this.correctPassword
    ) {
      // Set login state in localStorage (or use a service for better practice)
      localStorage.setItem('isLoggedIn', 'true');

      // Navigate to Halcyon page on successful login
      this.router.navigate(['/halcyon']);
    } else {
      if (this.attemptsLeft > 0) {
        this.showLoginMessage = `${this.attemptsLeft} attempt(s) left.`;
      } else {
        this.isButtonDisabled = true;
        this.showLoginMessage = 'You are restricted from logging in.';
      }
    }
  }

  clearFields() {
    this.username = '';
    this.password = '';
    this.attemptsLeft = this.maxAttempts; // Reset attempts
    this.showLoginMessage = ''; // Clear message
    this.isButtonDisabled = false; // Enable button again
  }
}
