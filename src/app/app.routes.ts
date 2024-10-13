import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Import Components
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { NgIfDemoComponent } from './components/ngif-demo/ngif-demo.component';
import { OneWayBindingComponent } from './components/one-way-binding/one-way-binding.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { SignalBindingComponent } from './components/signal-binding/signal-binding.component';
import { HalcyonComponent } from './components/halcyon/halcyon.component';
import { NgForDemoComponent } from './components/ng-for-demo/ng-for-demo.component';
import { NgModelDemoComponent } from './components/ng-model-demo/ng-model-demo.component';
import { LoginComponent } from './components/login/login.component';
import { LoginAuComponent } from './components/login-au/login-au.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
// import { StudentListComponent } from './components/student-list/student-list.component';

// Import Guards
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

@NgModule({
  imports: [
    HttpClientModule,
    // RouterModule.forRoot(routes), // Add the RouterModule with the routes
  ],
  exports: [RouterModule], // Export RouterModule
})
export class AppRoutingModule {}

export const routes: Routes = [
  { path: 'one-way-binding', component: OneWayBindingComponent },
  { path: 'two-way-binding', component: TwoWayBindingComponent },
  { path: 'signal-binding', component: SignalBindingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'loginAu', component: LoginAuComponent },
  { path: 'ngfordemo', component: NgForDemoComponent },
  { path: 'ngModelDemo', component: NgModelDemoComponent },
  { path: 'userList', component: UserListComponent },
  { path: 'ngIfDemo', component: NgIfDemoComponent, canActivate: [LoginGuard] },
  { path: 'halcyon', component: HalcyonComponent, canActivate: [AuthGuard] },
  { path: 'userform', component: UserFormComponent },
  { path: 'userregistration', component: UserRegistrationComponent },
  // { path: 'students', component: StudentListComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
];
