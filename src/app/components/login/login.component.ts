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
  private readonly correctUsername: string = 'minnu';
  private readonly correctPassword: string = 'pwd';

  constructor(private readonly router: Router) {}

  onLogin() {
    this.loginClickCount++;
    this.attemptsLeft--;

    if (
      this.username === this.correctUsername &&
      this.password === this.correctPassword
    ) {
      localStorage.setItem('isLoggedIn', 'true');

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
    this.attemptsLeft = this.maxAttempts;
    this.showLoginMessage = '';
    this.isButtonDisabled = false;
  }
}
