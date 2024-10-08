import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneWayBindingComponent } from '../components/one-way-binding/one-way-binding.component';
import { TwoWayBindingComponent } from '../components/two-way-binding/two-way-binding.component';

const routes: Routes = [
  { path: 'one-way-binding', component: OneWayBindingComponent },
  { path: 'two-way-binding', component: TwoWayBindingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
