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
  // Sample data array
  dataArray: { id: number; name: string; age: number }[] = [
    { id: 1, name: 'Minnu', age: 28 },
    { id: 2, name: 'Helcy', age: 34 },
    { id: 3, name: 'NeptunE', age: 45 },
    { id: 4, name: 'Halcyon', age: 22 },
  ];

  // Variable to hold the selected person's details
  selectedPerson: { id: number; name: string; age: number } | null = null;

  // Method to update selected person based on combo box selection
  onSelectPerson(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedIndex = selectElement.selectedIndex;

    // Update the selected person based on the selected index
    this.selectedPerson = this.dataArray[selectedIndex] || null;
  }
}
