import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

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

  updateStd(id: number)
  {
    this.router.navigate(['updateStd',id]);
  }

  deleteStd(id: number)
  {
    this.authService.deleteStdById(id).subscribe(
      data=>
      {
        console.log(data);
        alert("Student with id "+id+" has been deleted!");
        window.location.reload();
      }
    );
  }

}
