import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // This will make the service available application-wide
})
export class StudentService {
  private readonly baseUrl = 'http://localhost:8080/student'; // Adjust your API URL

  constructor(private readonly http: HttpClient) {}

  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
}
