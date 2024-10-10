import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add FormsModule to imports
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
})
export class UserRegistrationComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  onSubmit() {
    console.log('Form Submitted:', {
      username: this.username,
      email: this.email,
      password: this.password,
    });
  }
}
