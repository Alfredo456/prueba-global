import { Component, OnInit } from '@angular/core';
import {Course} from '../Models/course.model';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {StudentService} from '../student.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Student} from '../Models/student.model';

@Component({
  selector: 'app-student-enroll',
  templateUrl: './student-enroll.component.html',
  styleUrls: ['./student-enroll.component.scss']
})
export class StudentEnrollComponent implements OnInit {

  public formStudent: FormGroup;
  public student: Student;
  public coursesSelected: any = [];
  public courses: Course[] = [];

  constructor(private _studentService: StudentService, private _fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadData();
  }
  public loadData() {
    this._studentService.getAllCourses().subscribe((data: Course[]) => {
      console.log(data);
      this.courses = data;
    });
    this._studentService.getStudent(this.route.snapshot.params.identification).subscribe((data: Student) => {
      console.log(data);
      this.student = data;
    });
    this.generateForm();
  }

  generateForm(){
    this.formStudent = this._fb.group(({
      name: new FormControl(null),
      lastName: new FormControl(null),
      identification: new FormControl(null),
    }));
  }

  save(){
    const payload = {
      idCourses:  this.coursesSelected,
      idStudent: this.student.identification
    };
    this._studentService.studentEnroll(payload).subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['student']);
    });
  }
  addList(course: Course){
    this.coursesSelected.push(course.id);
  }
}
