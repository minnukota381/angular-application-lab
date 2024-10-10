import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng-for-demo', // Component selector used in the HTML template.
  standalone: true, // Making this component standalone, so it can function without being declared in a module.
  templateUrl: './ng-for-demo.component.html', // The template file associated with this component.
  styleUrls: ['./ng-for-demo.component.css'], // The style file specific to this component.
  imports: [CommonModule], // Importing Angular's CommonModule for basic directives and services.
})
export class NgForDemoComponent {
  // NeptunE: Defining an array of objects that we will loop over using the *ngFor directive in the template.
  dataArray: { id: number; name: string; age: number }[] = [
    { id: 1, name: 'Minnu', age: 28 }, // Minnu's data
    { id: 2, name: 'Helcy', age: 34 }, // Helcy's data
    { id: 3, name: 'NeptunE', age: 45 }, // NeptunE's data
    { id: 4, name: 'Halcyon', age: 22 }, // Halcyon's data
  ];

  // NeptunE: This variable will store the person selected from the dropdown.
  selectedPerson: { id: number; name: string; age: number } | null = null;

  /**
   * NeptunE: This method is triggered when the user selects a person from the dropdown (combo box).
   * We capture the event and extract the selected index.
   * Based on the selected index, we update the 'selectedPerson' variable with the corresponding person from the 'dataArray'.
   */
  onSelectPerson(event: Event) {
    // NeptunE: Typecasting the event target as an HTMLSelectElement to safely access its properties.
    const selectElement = event.target as HTMLSelectElement;
    const selectedIndex = selectElement.selectedIndex; // Getting the selected index of the dropdown.

    // NeptunE: Updating 'selectedPerson' with the person object at the selected index, or null if not valid.
    this.selectedPerson = this.dataArray[selectedIndex] || null;
  }
}
