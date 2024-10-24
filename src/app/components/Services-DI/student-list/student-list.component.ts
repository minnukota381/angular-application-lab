import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../services/student.service';
import { Student } from '../../../models/student.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-student-list',
  standalone: true,
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  providers: [StudentService],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  student: Student = new Student(); // Used for create/update
  studentId: number = 0; // For deleting student by ID
  errorMessage: string = ''; // To handle errors

  constructor(private readonly studentService: StudentService) {}

  ngOnInit() {
    this.getStudents();
  }

  // Get all students
  getStudents() {
    this.studentService.getAllStudents().subscribe(
      (data) => {
        this.students = data;
      },
      (error) => {
        this.errorMessage = 'Error fetching students';
        console.error(this.errorMessage, error);
      }
    );
  }

  // Create new student
  createStudent() {
    this.studentService.createStudent(this.student).subscribe(
      (data) => {
        this.students.push(data);
        this.clearForm();
      },
      (error) => {
        this.errorMessage = 'Error creating student';
        console.error(this.errorMessage, error);
      }
    );
  }

  // Update existing student
  updateStudent() {
    if (!this.student.id) {
      this.errorMessage = 'Select a student to update';
      return;
    }
    this.studentService.updateStudent(this.student.id, this.student).subscribe(
      (data) => {
        this.getStudents();
        this.clearForm();
      },
      (error) => {
        this.errorMessage = 'Error updating student';
        console.error(this.errorMessage, error);
      }
    );
  }

  // Delete student by ID
  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(
      () => {
        this.students = this.students.filter((s) => s.id !== id);
      },
      (error) => {
        this.errorMessage = 'Error deleting student';
        console.error(this.errorMessage, error);
      }
    );
  }

  // Clear form after create/update
  clearForm() {
    this.student = new Student();
    this.errorMessage = '';
  }

  // Edit a student for update
  editStudent(student: Student) {
    this.student = { ...student };
  }
}
