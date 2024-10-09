import { Routes } from '@angular/router';
import { OneWayBindingComponent } from './components/one-way-binding/one-way-binding.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { SignalBindingComponent } from './components/signal-binding/signal-binding.component';
import { HalcyonComponent } from './components/halcyon/halcyon.component';

export const routes: Routes = [
  { path: 'one-way-binding', component: OneWayBindingComponent },
  { path: 'two-way-binding', component: TwoWayBindingComponent },
  { path: 'signal-binding', component: SignalBindingComponent },
  { path: 'login', component: HalcyonComponent },
  { path : 'halcyon', component: HalcyonComponent },
  { path: '', redirectTo: '/halcyon', pathMatch: 'full' },
];
