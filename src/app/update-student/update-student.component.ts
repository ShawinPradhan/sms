import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit{
  student: Student = new Student();
  studentId !: number;

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.studentId = this.route.snapshot.params['id'];
   this.authService.getStudenById(this.studentId).subscribe(
    data=>
    {
      this.student = data;
    }
   );
  }




  onSubmit()
  {
      this.authService.updateStudent(this.studentId, this.student).subscribe(
          data=>
          {
            alert("Student details updated successfully!");
            this.router.navigate(['studentList']);
          }
      );
  }


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

}
