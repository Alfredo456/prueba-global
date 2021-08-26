import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {Course} from '../Models/course.model';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Student} from '../Models/student.model';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent implements OnInit {

  public formStudent: FormGroup;

  constructor(private _studentService: StudentService, private _fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }
  public loadData() {
    this.generateForm();
  }

  generateForm(){
    this.formStudent = this._fb.group(({
      name: new FormControl(null),
      lastname: new FormControl(null),
      identification: new FormControl(null),
      enrolledCourses: new FormControl([]),
    }));
  }

  save(){
    console.log(this.formStudent);
    const payload: Student = {
      name: this.formStudent.get('name').value,
      lastname: this.formStudent.get('lastname').value,
      identification: this.formStudent.get('identification').value,
      enrolledCourses: []
    };
    this._studentService.studentCreate(payload).subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['student']);
    });
  }

}
