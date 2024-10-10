import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-au',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-au.component.html',
  styleUrls: ['./login-au.component.css'],
})
export class LoginAuComponent {
  username: string = '';
  password: string = '';
  loginFailed: boolean = false;

  constructor(
    private readonly loginService: LoginService,
    private readonly router: Router
  ) {}

  onLogin() {
    const isSuccess = this.loginService.login(this.username, this.password);
    if (isSuccess) {
      this.router.navigate(['/ngIfDemo']);
    } else {
      this.loginFailed = true;
    }
  }
}
