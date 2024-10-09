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
  title: string = 'ngIf Demo';

  isMessageVisible: boolean = false;

  toggleMessage() {
    this.isMessageVisible = !this.isMessageVisible;
  }
}
