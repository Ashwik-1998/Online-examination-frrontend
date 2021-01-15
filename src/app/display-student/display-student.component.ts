import { Component, OnInit } from '@angular/core';
import { FetchStudentServiceService } from '../fetch-student-service.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.css']
})
export class DisplayStudentComponent implements OnInit {
  
   userId : string;
   //stud : Student;
   p:number=1;
  constructor(private studentService:StudentService, private student : FetchStudentServiceService) { }

  ngOnInit() {
    console.log(this.student);
    this.userId = sessionStorage.getItem("userId");
   // this.stud = this.student;
  }

}

// export class Student{

//   constructor(){}
// }


