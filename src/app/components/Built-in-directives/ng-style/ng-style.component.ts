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

  generateScore(): void {
    this.score = Math.floor(Math.random() * 101);
  }

  getTextColor(): string {
    if (this.score >= 70) {
      return 'green';
    } else if (this.score >= 40) {
      return 'orange';
    } else {
      return 'red';
    }
  }

  getBackgroundColor(): string {
    if (this.score >= 70) {
      return '#DFF2BF';
    } else if (this.score >= 40) {
      return '#FFD700';
    } else {
      return '#FFBABA';
    }
  }
}
