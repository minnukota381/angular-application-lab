import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { UserRegistrationComponent } from './components/AngularForms/user-registration/user-registration.component';
import { NgIfDemoComponent } from './components/Built-in-directives/ngif-demo/ngif-demo.component';
import { OneWayBindingComponent } from './components/Data-Binding/one-way-binding/one-way-binding.component';
import { TwoWayBindingComponent } from './components/Data-Binding/two-way-binding/two-way-binding.component';
import { SignalBindingComponent } from './components/Data-Binding/signal-binding/signal-binding.component';
import { HalcyonComponent } from './components/Data-Binding/halcyon/halcyon.component';
import { NgForDemoComponent } from './components/Built-in-directives/ng-for-demo/ng-for-demo.component';
import { NgModelDemoComponent } from './components/Data-Binding/ng-model-demo/ng-model-demo.component';
import { LoginComponent } from './components/Services-DI/login/login.component';
import { LoginAuComponent } from './components/Routing/login-au/login-au.component';
import { UserListComponent } from './components/Routing/user-list/user-list.component';
import { UserFormComponent } from './components/AngularForms/user-form/user-form.component';
import { NgClassComponent } from './components/Built-in-directives/ng-class/ng-class.component';
import { NgStyleComponent } from './components/Built-in-directives/ng-style/ng-style.component';
// import { StudentListComponent } from './components/student-list/student-list.component';

import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

@NgModule({
  imports: [
    HttpClientModule,
    // RouterModule.forRoot(routes), // Add the RouterModule with the routes
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routes: Routes = [
  { path: 'one-way-binding', component: OneWayBindingComponent },
  { path: 'two-way-binding', component: TwoWayBindingComponent },
  { path: 'signal-binding', component: SignalBindingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ngclass', component: NgClassComponent},
  { path: 'loginAu', component: LoginAuComponent },
  { path: 'ngfordemo', component: NgForDemoComponent },
  { path:  'ngstyle', component: NgStyleComponent},
  { path: 'ngModelDemo', component: NgModelDemoComponent },
  { path: 'userList', component: UserListComponent },
  { path: 'ngIfDemo', component: NgIfDemoComponent, canActivate: [LoginGuard] },
  { path: 'halcyon', component: HalcyonComponent, canActivate: [AuthGuard] },
  { path: 'userform', component: UserFormComponent },
  { path: 'userregistration', component: UserRegistrationComponent },
  // { path: 'students', component: StudentListComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
];
