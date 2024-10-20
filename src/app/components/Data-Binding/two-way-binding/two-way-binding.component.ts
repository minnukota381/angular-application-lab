import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css'],
})
export class TwoWayBindingComponent {
  title: string = 'Two-Way Data Binding Example';
  name: string = 'Helcy';
}
