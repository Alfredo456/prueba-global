import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {StudentService} from '../student.service';
import {Course} from '../Models/course.model';
import {Student} from '../Models/student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  public students: Student[] = [];

  constructor(private router: Router, private _studentService: StudentService) { }

  ngOnInit(): void {
    this.loadData();
  }


  public loadData() {
    this._studentService.getAllStudents().subscribe((data: Student[]) => {
      console.log(data);
      this.students = data;
    });
  }

  add(){
    this.router.navigate(['student-add']);
  }
  enroll(){
    this.router.navigate(['student-enroll']);
  }
}
