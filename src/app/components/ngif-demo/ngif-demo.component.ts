import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ngif-demo',
  standalone: true,
  templateUrl: './ngif-demo.component.html',
  styleUrls: ['./ngif-demo.component.css'],
  imports: [CommonModule], // Import CommonModule to use *ngIf
})
export class NgIfDemoComponent {
  // Title for the component
  title: string = 'ngIf Demo';

  // Boolean to control the visibility of the message
  isMessageVisible: boolean = false;

  // Method to toggle message visibility
  toggleMessage() {
    this.isMessageVisible = !this.isMessageVisible;
  }
}
