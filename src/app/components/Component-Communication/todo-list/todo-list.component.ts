import { Component } from '@angular/core';
import { TaskListComponent } from '../task-list/task-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  imports: [TaskListComponent, CommonModule, FormsModule],
})
export class TodoListComponent {
  tasks: string[] = []; // Array to hold tasks
  newTask: string = ''; // Input for new task

  // Method to add a new task
  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push(this.newTask.trim());
      this.newTask = ''; // Clear the input field
    }
  }
}
