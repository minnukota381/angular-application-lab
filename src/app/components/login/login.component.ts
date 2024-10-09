import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, CommonModule],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginClickCount: number = 0;
  maxAttempts: number = 3; 
  attemptsLeft: number = this.maxAttempts;
  showLoginMessage: string = '';
  isButtonDisabled: boolean = false;

  onLogin() {
    this.loginClickCount++;
    this.attemptsLeft--;

    if (this.attemptsLeft > 0) {
      this.showLoginMessage = `${this.attemptsLeft} attempt(s) left.`;
    } else {
      this.isButtonDisabled = true;
      this.showLoginMessage = 'You are restricted from logging in.';
    }
  }
}
