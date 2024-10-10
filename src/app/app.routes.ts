import { NgIfDemoComponent } from './components/ngif-demo/ngif-demo.component';
import { Routes } from '@angular/router';
import { OneWayBindingComponent } from './components/one-way-binding/one-way-binding.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { SignalBindingComponent } from './components/signal-binding/signal-binding.component';
import { HalcyonComponent } from './components/halcyon/halcyon.component';
import { NgForDemoComponent } from './components/ng-for-demo/ng-for-demo.component';
import { NgModelDemoComponent } from './components/ng-model-demo/ng-model-demo.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'one-way-binding', component: OneWayBindingComponent },
  { path: 'two-way-binding', component: TwoWayBindingComponent },
  { path: 'signal-binding', component: SignalBindingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ngfordemo', component: NgForDemoComponent },
  { path: 'ngModelDemo', component: NgModelDemoComponent },
  { path: 'ngIfDemo', component: NgIfDemoComponent },
  { path: 'halcyon', component: HalcyonComponent, canActivate: [AuthGuard] },

  { path: '', redirectTo: '', pathMatch: 'full' },
];
