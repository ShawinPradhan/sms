import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

const STUDENT_API = 'http://localhost:8080/api/';
const GET_ALL_STD = 'http://localhost:8080/api/getAllStudents'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<Student[]>
  {
    return this.http.get<Student[]>(STUDENT_API+'getAllStudents');
  }

  registerStudent(student: Student): Observable<Object>
  {
    return this.http.post<any>(STUDENT_API+'saveStudent', student);
  }
}
