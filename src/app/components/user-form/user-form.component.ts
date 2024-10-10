import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  imports: [CommonModule, ReactiveFormsModule], // Import ReactiveFormsModule here
})
export class UserFormComponent {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // Initialize the form
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Submitted!', this.userForm.value);
      // You can perform further actions here, like sending the data to a server
    } else {
      console.log('Form is invalid');
    }
  }
}
