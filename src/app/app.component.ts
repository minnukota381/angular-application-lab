import { Component } from '@angular/core';
import { HalcyonComponent } from './components/halcyon/halcyon.component';

import { OneWayBindingComponent } from "./components/one-way-binding/one-way-binding.component";
import { TwoWayBindingComponent } from "./components/two-way-binding/two-way-binding.component";
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { NgForDemoComponent } from "./components/ng-for-demo/ng-for-demo.component";
import { NgModelDemoComponent } from "./components/ng-model-demo/ng-model-demo.component";
import { UserListComponent } from "./components/user-list/user-list.component";
import { LoginAuComponent } from "./components/login-au/login-au.component";
import { UserFormComponent } from "./components/user-form/user-form.component";

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
  imports: [RouterOutlet, HalcyonComponent, LoginComponent, NgForDemoComponent, NgModelDemoComponent, UserListComponent, LoginAuComponent, UserFormComponent],
})
export class AppComponent {}
