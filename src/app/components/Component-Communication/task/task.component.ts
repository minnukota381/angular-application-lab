import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task!: string;
  @Output() taskCompleted = new EventEmitter<string>();

  completeTask() {
    this.taskCompleted.emit(this.task);
  }
}
