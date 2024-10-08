import { Component } from '@angular/core';
import { HalcyonComponent } from './components/halcyon/halcyon.component';

import { OneWayBindingComponent } from "./components/one-way-binding/one-way-binding.component";
import { TwoWayBindingComponent } from "./components/two-way-binding/two-way-binding.component";
import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   template: `
//     <app-halcyon></app-halcyon>
//     <app-one-way-binding></app-one-way-binding>
//     <app-two-way-binding></app-two-way-binding>
//   `,
//   standalone: true,
//   imports: [HalcyonComponent, OneWayBindingComponent, TwoWayBindingComponent],
// })

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, HalcyonComponent],
})
export class AppComponent {}
