import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadStart, Router } from '@angular/router';
import {DisplayStudentComponent} from '../display-student/display-student.component';
import { FetchStudentServiceService } from '../fetch-student-service.service';
import { GetStudentServiceService } from '../get-student-service.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})

export class SearchStudentComponent implements OnInit {

  userId : string;
 
  constructor(private router:Router, private studentService: StudentService, public getstudent : GetStudentServiceService, public student : FetchStudentServiceService) {
  }
  
  ngOnInit(): void {
    this.userId = sessionStorage.getItem("userId");
    console.log(this.userId);
  }
  
  display() {

    this.studentService.fetchStudents(this.getstudent)
    .subscribe(data => {
      //console.log(this.getstudent)
     //this.student=data;
    
      this.student.fullName= data.fullname;
      this.student.email  = data.email;
      this.student.state = data.state;

      console.log(this.student.fullName);
      console.log(this.student.email);


    });


    this.router.navigateByUrl('/displaystudent');
  }


 
   
  
}