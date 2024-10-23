import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../services/student.service';
import { Student } from '../../../models/student.model';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-student-list',
  standalone: true,
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  imports: [NgFor, CommonModule],
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];

  constructor(private readonly studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((data: Student[]) => {
      this.students = data;
    });
  }


}
