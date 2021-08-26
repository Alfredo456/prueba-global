import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentComponent} from './student/student.component';
import {StudentAddComponent} from './student-add/student-add.component';
import {StudentEnrollComponent} from './student-enroll/student-enroll.component';

const routes: Routes = [
  {
    path: 'student',
    component: StudentComponent
  },
  {
    path: 'student-add',
    component: StudentAddComponent
  },
  {
    path: 'student-enroll/:identification',
    component: StudentEnrollComponent
  },
  {
    path: '',
    redirectTo: '/student',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
