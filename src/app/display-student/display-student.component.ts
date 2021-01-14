import { Component, OnInit } from '@angular/core';
import { GetStudents } from '../GetStudents';
import { Student } from '../Student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.css']
})
export class DisplayStudentComponent implements OnInit {
   getstudents : GetStudents
   student : Student
   userId : string;
  constructor(private studentService:StudentService) { }

  ngOnInit() {
    this.userId = sessionStorage.getItem("userId");
    console.log(this.userId);
  }

   studentDisplay(){
    this.studentService.fetchStudents(this.getstudents)
    .subscribe(data => {
      console.log(data);
     this.student=data;
    });
   
  }

}

// export class GetStudents{
//     score:number;
//     testLevel:number;
//     testSubjectName:string;
//     city:string;
//     state:string;
// }