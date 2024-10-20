import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng-for-demo',
  standalone: true,
  templateUrl: './ng-for-demo.component.html',
  styleUrls: ['./ng-for-demo.component.css'],
  imports: [CommonModule],
})
export class NgForDemoComponent {
  dataArray: { id: number; name: string; age: number }[] = [
    { id: 1, name: 'Minnu', age: 28 }, // Minnu's data
    { id: 2, name: 'Helcy', age: 34 }, // Helcy's data
    { id: 3, name: 'NeptunE', age: 45 }, // NeptunE's data
    { id: 4, name: 'Halcyon', age: 22 }, // Halcyon's data
  ];

  // NeptunE: This variable will store the person selected from the dropdown.
  selectedPerson: { id: number; name: string; age: number } | null = null;

  onSelectPerson(event: Event) {
    // NeptunE: Typecasting the event target as an HTMLSelectElement to safely access its properties.
    const selectElement = event.target as HTMLSelectElement;
    const selectedIndex = selectElement.selectedIndex; // Getting the selected index of the dropdown.

    // NeptunE: Updating 'selectedPerson' with the person object at the selected index, or null if not valid.
    this.selectedPerson = this.dataArray[selectedIndex] || null;
  }
}
