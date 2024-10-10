import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ngif-demo', // The selector used to embed this component in HTML templates.
  standalone: true, // Declaring this component as standalone, allowing it to be used without a module.
  templateUrl: './ngif-demo.component.html', // The path to the HTML template for this component.
  styleUrls: ['./ngif-demo.component.css'], // The path to the CSS styles for this component.
  imports: [CommonModule], // Importing Angular's CommonModule to use built-in directives like *ngIf.
})
export class NgIfDemoComponent {
  title: string = 'ngIf Demo'; // Title of the component, used in the template for display.

  isMessageVisible: boolean = false; // A boolean flag to control the visibility of a message.

  /**
   * NeptunE: This method toggles the visibility of the message.
   * When called, it switches the value of 'isMessageVisible' from true to false or vice versa.
   * This is linked to a button click in the template, allowing the user to show or hide a message.
   */
  toggleMessage() {
    this.isMessageVisible = !this.isMessageVisible; // Invert the current visibility state.
  }
}
