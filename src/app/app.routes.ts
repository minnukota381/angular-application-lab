import { Routes } from '@angular/router';
import { OneWayBindingComponent } from './components/one-way-binding/one-way-binding.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';

export const routes: Routes = [
  { path: 'one-way-binding', component: OneWayBindingComponent },
  { path: 'two-way-binding', component: TwoWayBindingComponent },
  { path: '', redirectTo: '/one-way-binding', pathMatch: 'full' }, // Default route
];
