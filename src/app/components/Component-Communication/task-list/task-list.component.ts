import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  standalone: true,
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  imports:[CommonModule]
})
export class TaskListComponent {
  @Input() tasks!: string[]; // Receive tasks from the parent
}
