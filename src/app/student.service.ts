import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import {Student} from './Models/student.model';

const getAllCourses = '/courses/list/all';
const studentCreate = '/students/create';
const studentEnroll = '/enroll/student';
const getAllStudents = '/students/list/all';
const getStudent = '/students/student/';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials' : 'true',
    'Accept': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  public getAllCourses(): Observable<any> {
    return this.http.get(environment.endpoint + getAllCourses, httpOptions);
  }
  public studentCreate(body: Student): Observable<any> {
    return this.http.post(environment.endpoint + studentCreate, body, httpOptions);
  }
  public studentEnroll(body: any): Observable<any> {
    return this.http.post(environment.endpoint + studentEnroll, body, httpOptions);
  }
  public getAllStudents(): Observable<any> {
    return this.http.get(environment.endpoint + getAllStudents, httpOptions);
  }
  public getStudent(id: string): Observable<any>{
    return this.http.get(environment.endpoint + getStudent + id, httpOptions);
  }
}
