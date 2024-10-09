import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Required for routing
import { OneWayBindingComponent } from '../components/one-way-binding/one-way-binding.component';
import { TwoWayBindingComponent } from '../components/two-way-binding/two-way-binding.component';
import { SignalBindingComponent } from '../components/signal-binding/signal-binding.component';
import { NgForDemoComponent } from '../components/ng-for-demo/ng-for-demo.component';
import { NgModelDemoComponent } from '../components/ng-model-demo/ng-model-demo.component';
import { NgIfDemoComponent } from '../components/ngif-demo/ngif-demo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    OneWayBindingComponent,
    TwoWayBindingComponent,
    SignalBindingComponent,
    NgForDemoComponent,
    NgModelDemoComponent,
    NgIfDemoComponent
  ],
})
export class UserModule {}
