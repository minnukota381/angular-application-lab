import { Component } from '@angular/core';
import { MyHelcyService } from '../../../services/my-helcy.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-helcy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-helcy.component.html',
  styleUrl: './my-helcy.component.css',
})
export class MyHelcyComponent {
  helcyy: any[] = []

  constructor(public obj: MyHelcyService) {
    this.helcyy = this.obj.getUpHelcy();
  }
}
