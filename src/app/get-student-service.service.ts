import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetStudentServiceService {

  score : number;
  testLevel : number;
  testSubjectName : string;
  city : string;
  state : string;

  constructor() { }
}
