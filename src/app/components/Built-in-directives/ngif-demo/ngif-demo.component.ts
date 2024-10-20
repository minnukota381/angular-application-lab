import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngif-demo',
  standalone: true,
  templateUrl: './ngif-demo.component.html',
  styleUrls: ['./ngif-demo.component.css'],
  imports: [CommonModule, FormsModule],
})
export class NgIfDemoComponent {
submitForm() {
throw new Error('Method not implemented.');
}
  title: string = 'ngIf Demo';
  isMessageVisible: boolean = false;

  toggleMessage() {
    this.isMessageVisible = !this.isMessageVisible;
  }

  name: string = '';
  email: string = '';

  // Method to check if both fields are filled
  isFormFilled(): boolean {
    return this.name.trim() !== '' && this.email.trim() !== '';
  }
}
