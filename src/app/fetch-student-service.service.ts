import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchStudentServiceService {

  fullName: string;
  email: string;
  mobile: number;
  city: string;
  dateOfBirth: Date;
  state: string;
  qualification: string;
  yearOfCompletion: number;

  constructor() { }
}
