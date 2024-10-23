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
  imports: [CommonModule, FormsModule,RouterModule, ],
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];

  constructor(private readonly studentService: StudentService) {}

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.studentService.getAllStudents().subscribe(
      (data) => {
        this.students = data;
      },
      (error) => {
        console.error('Error fetching students', error);
      }
    );
  }
}
