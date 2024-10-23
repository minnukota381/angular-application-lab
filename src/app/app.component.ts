import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { HalcyonComponent } from './components/Data-Binding/halcyon/halcyon.component';
import { LoginComponent } from './components/Services-DI/login/login.component';
import { NgForDemoComponent } from './components/Built-in-directives/ng-for-demo/ng-for-demo.component';
import { NgModelDemoComponent } from './components/Data-Binding/ng-model-demo/ng-model-demo.component';
import { UserFormComponent } from './components/AngularForms/user-form/user-form.component';
import { MyHelcyComponent } from './components/Services-DI/my-helcy/my-helcy.component';
import { StudentListComponent } from "./components/Services-DI/student-list/student-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterOutlet,
    RouterModule,
    HttpClientModule,
    HalcyonComponent,
    LoginComponent,
    NgForDemoComponent,
    NgModelDemoComponent,
    UserFormComponent,
    MyHelcyComponent,
    StudentListComponent
],
})
export class AppComponent {}
