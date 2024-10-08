import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-halcyon',
  templateUrl: './halcyon.component.html',
  styleUrls: ['./halcyon.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class HalcyonComponent {
  number1: number = 0;
  number2: number = 0;
  result: number = 0;

  addNumbers(): void {
    this.result = this.number1 + this.number2;
  }

  subNumbers(): void {
    this.result = this.number1 - this.number2;
  }

  mulNumbers(): void {
    this.result = this.number1 * this.number2;
  }

  divNumbers(): void {
    if (this.number2 !== 0) {
      this.result = this.number1 / this.number2;
    } else {
      this.result = NaN;
    }
  }
}
