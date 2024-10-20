import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  imports: [CommonModule, TaskComponent],
})
export class TaskListComponent {
  @Input() tasks!: string[]; // Input property to receive tasks from the parent

  // Method to handle completed tasks
  onTaskCompleted(completedTask: string) {
    console.log(`Task completed: ${completedTask}`);
    // Optionally, you can also remove the completed task from the tasks array
    this.tasks = this.tasks.filter((task) => task !== completedTask);
  }
}
