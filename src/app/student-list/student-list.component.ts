import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private authService: AuthService) { }

  students: Student[] | undefined;

  ngOnInit(): void {

    this.getAllStudents();
  }

  getAllStudents() {
    this.authService.getAllStudents().subscribe(
      data => {
        this.students = data;
      }
    );
  }



}
