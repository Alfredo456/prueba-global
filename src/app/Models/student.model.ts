import {Course} from './course.model';

export interface Student {
  identification: string;
  lastname: string;
  name: string;
  enrolledCourses: Course[];
}
