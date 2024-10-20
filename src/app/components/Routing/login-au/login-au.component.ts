import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service'; // Importing the LoginService for handling authentication logic.
import { CommonModule } from '@angular/common'; // Common utilities for Angular templates and components.
import { FormsModule } from '@angular/forms'; // For handling two-way data binding in the template.

@Component({
  selector: 'app-login-au', // The name of the component selector, which is used in the HTML template.
  standalone: true, // This makes the component standalone, which means it doesn't need to be declared in any module.
  imports: [FormsModule, CommonModule], // Importing necessary modules for form handling and template utilities.
  templateUrl: './login-au.component.html', // The HTML template file for this component.
  styleUrls: ['./login-au.component.css'], // The CSS styles specific to this component.
})
export class LoginAuComponent {
  // Variables for storing form data (username and password).
  username: string = '';
  password: string = '';

  // Flag to show a login failure message in the UI if login fails.
  loginFailed: boolean = false;

  // Injecting LoginService for handling authentication and Router for navigation.
  constructor(
    private readonly loginService: LoginService,
    private readonly router: Router
  ) {}

  /**
   * onLogin method:
   * This method is triggered when the user clicks the login button.
   * It attempts to log in using the provided username and password by calling the login method of LoginService.
   * If login is successful, the user is redirected to the 'ngIfDemo' page.
   * If login fails, the 'loginFailed' flag is set to true to display an error message in the UI.
   */
  onLogin() {
    // Call login service to check if the username and password are correct.
    const isSuccess = this.loginService.login(this.username, this.password);

    if (isSuccess) {
      // If login is successful, navigate to the 'ngIfDemo' page.
      this.router.navigate(['/ngIfDemo']);
    } else {
      // If login fails, set loginFailed to true to show a failure message.
      this.loginFailed = true;
    }
  }
}
