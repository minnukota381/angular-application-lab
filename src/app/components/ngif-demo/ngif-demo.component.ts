import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif-demo',
  standalone: true,
  templateUrl: './ngif-demo.component.html',
  styleUrls: ['./ngif-demo.component.css'],
})
export class NgIfDemoComponent {
  title: string = 'ngIf Demo';

  isMessageVisible: boolean = false;

  toggleMessage() {
    this.isMessageVisible = !this.isMessageVisible;
  }
}
