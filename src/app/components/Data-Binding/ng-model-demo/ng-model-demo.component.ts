import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-model-demo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ng-model-demo.component.html',
  styleUrl: './ng-model-demo.component.css',
})
export class NgModelDemoComponent {
  course: string = '';
}
