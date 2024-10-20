// parent.component.ts
import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component'; // Adjust the path as necessary

@Component({
  selector: 'app-parent',
  standalone: true,
  template: `
    <h2>Parent Component</h2>
    <app-child
      [message]="parentMessage"
      (messageEvent)="receiveMessage($event)"
    ></app-child>
    <p>Message from Child: {{ childMessage }}</p>
  `,
  imports: [ChildComponent],
})
export class ParentComponent {
  parentMessage: string = 'Hello from Parent Component!';
  childMessage: string = '';

  receiveMessage(event: string) {
    this.childMessage = event;
  }
}
