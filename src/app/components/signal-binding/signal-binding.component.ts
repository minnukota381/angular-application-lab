import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-binding',
  standalone: true,
  imports: [],
  templateUrl: './signal-binding.component.html',
  styleUrl: './signal-binding.component.css',
})
export class SignalBindingComponent {
  n = signal('Helcy');

  changeSignalValue() {
    this.n.set('Neptune');
  }
}
