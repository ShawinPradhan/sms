import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentListComponent } from './student-list/student-list.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"studentList", component:StudentListComponent},
  {path:"registerStd", component:RegisterStudentComponent},
  {path:"updateStd/:id", component:UpdateStudentComponent},
  {path:"", redirectTo:"home", pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
