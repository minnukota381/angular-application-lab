import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Required for routing
import { OneWayBindingComponent } from '../components/one-way-binding/one-way-binding.component';
import { TwoWayBindingComponent } from '../components/two-way-binding/two-way-binding.component';
import { SignalBindingComponent } from '../components/signal-binding/signal-binding.component';
import { NgForDemoComponent } from '../components/ng-for-demo/ng-for-demo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    OneWayBindingComponent,
    TwoWayBindingComponent,
    SignalBindingComponent,
    NgForDemoComponent,
  ],
})
export class UserModule {}
