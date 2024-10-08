import { Component } from '@angular/core';
import { HalcyonComponent } from './components/halcyon/halcyon.component';

import { OneWayBindingComponent } from "./components/one-way-binding/one-way-binding.component";
import { TwoWayBindingComponent } from "./components/two-way-binding/two-way-binding.component";

@Component({
  selector: 'app-root',
  template: `
    <app-halcyon></app-halcyon>
    <app-one-way-binding></app-one-way-binding>
    <app-two-way-binding></app-two-way-binding>
  `,
  standalone: true,
  imports: [HalcyonComponent, OneWayBindingComponent, TwoWayBindingComponent],
})
export class AppComponent {}
