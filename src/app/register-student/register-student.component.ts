import { Component } from '@angular/core';
import { Student } from '../student';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent {

  student: Student = new Student();

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit()
  {
    this.authService.registerStudent(this.student).subscribe(
      data =>
      {
        console.log('SUCCESS', data);
        alert('Student details saved successfully!');
        this.router.navigate(['/studentList']);
      }
    );
  }
}
