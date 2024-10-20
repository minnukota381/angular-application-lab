// src/app/services/student.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../../../models/student.model'; // Adjust the import as needed

@Injectable({
  providedIn: 'root', // This provides the service in the root injector
})
export class StudentService {
  private apiUrl = 'http://localhost:8080/api/students'; // Adjust as per your Spring Boot API

  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

}
