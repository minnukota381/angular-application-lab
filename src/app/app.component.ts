import { Component } from '@angular/core';
import { HalcyonComponent } from './components/Data-Binding/halcyon/halcyon.component';

import { OneWayBindingComponent } from './components/Data-Binding/one-way-binding/one-way-binding.component';
import { TwoWayBindingComponent } from './components/Data-Binding/two-way-binding/two-way-binding.component';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/Services-DI/login/login.component';
import { NgForDemoComponent } from './components/Built-in-directives/ng-for-demo/ng-for-demo.component';
import { NgModelDemoComponent } from './components/Data-Binding/ng-model-demo/ng-model-demo.component';
// import { UserListComponent } from '../components/user-list/user-list.component';
// import { LoginAuComponent } from './components/login-au/login-au.component';
import { UserFormComponent } from './components/AngularForms/user-form/user-form.component';
// import { StudentListComponent } from "./components/student-list/student-list.component";

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
  imports: [
    RouterOutlet,
    OneWayBindingComponent,
    TwoWayBindingComponent,
    HalcyonComponent,
    LoginComponent,
    NgForDemoComponent,
    NgModelDemoComponent,
    // UserListComponent,
    // LoginAuComponent,
    UserFormComponent,
  ],
})
export class AppComponent {}
