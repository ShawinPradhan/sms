import { Component } from '@angular/core';
import { Student } from '../student';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent {

  student: Student = new Student();

  constructor(private authService: AuthService, private router: Router) {}

  form = new FormGroup(
    {
      name: new FormControl("",[Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
      email:  new FormControl("",[Validators.required, Validators.email , Validators.maxLength(30)]),
      phone: new FormControl("",[Validators.required, Validators.minLength(10), Validators.maxLength(10), 
      Validators.pattern('[6789][0-9]{9}')]),
      dob: new FormControl("",[Validators.required]),
      doj: new FormControl("",[Validators.required]),
      gender: new FormControl("",[Validators.required]),
      local: new FormControl("",[Validators.required]),
      state: new FormControl("",[Validators.required]),
      pin : new FormControl("",[Validators.required])
    }
  );

  get f()
  {
    return this.form.controls;
  }



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
