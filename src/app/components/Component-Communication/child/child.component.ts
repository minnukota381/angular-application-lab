import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: `
    <h3>Child Component</h3>
    <p>Received Message: {{ message }}</p>
    <button (click)="sendMessage()">Send Message to Parent</button>
  `,
})
export class ChildComponent {
  @Input() message!: string;
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('Hello from Child Component!');
  }
}
