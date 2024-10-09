import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  standalone: true,
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.css'],
})
export class OneWayBindingComponent {
  title: string = 'Interpolation : Welcome to One-Way Data Binding in Angular!'; 
  name: string = 'Helcy';
  buttonDisabled: boolean = true;

  // Update the name from input
  updateName(name: string) {
    this.name = name;
    this.buttonDisabled = this.name.trim() === '';
  }
}
