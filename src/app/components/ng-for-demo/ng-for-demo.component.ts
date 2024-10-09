import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng-for-demo',
  standalone: true,
  templateUrl: './ng-for-demo.component.html',
  styleUrls: ['./ng-for-demo.component.css'],
  imports: [CommonModule],
})
export class NgForDemoComponent {
  dataArray: { id: number; name: string; age: number }[] = [
    { id: 1, name: 'Minnu', age: 28 },
    { id: 2, name: 'Hello', age: 34 },
    { id: 3, name: 'Vars', age: 45 },
    { id: 4, name: 'Mike', age: 22 },
  ];
}
