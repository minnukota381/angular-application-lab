import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css',
})
export class NgStyleComponent {
  score: number = 0;

  // Generates a random score between 0 and 100
  generateScore(): void {
    this.score = Math.floor(Math.random() * 101);
  }

  // Method to determine text color based on score
  getTextColor(): string {
    if (this.score >= 70) {
      return 'green';
    } else if (this.score >= 40) {
      return 'orange';
    } else {
      return 'red';
    }
  }

  // Method to determine background color based on score
  getBackgroundColor(): string {
    if (this.score >= 70) {
      return '#DFF2BF'; // light green
    } else if (this.score >= 40) {
      return '#FFD700'; // gold
    } else {
      return '#FFBABA'; // light red
    }
  }
}
