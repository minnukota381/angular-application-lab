import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-example',
  standalone: true,
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css'],
  imports: [CommonModule]
})
export class NgClassComponent {
  isActive: boolean = false; // State to track if the button is active

  // Method to toggle the active state
  toggleButton() {
    this.isActive = !this.isActive;
  }
}
