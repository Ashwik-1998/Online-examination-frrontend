import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-user-report',
  templateUrl: './user-report.component.html',
  styleUrls: ['./user-report.component.css']
})
export class UserReportComponent implements OnInit {

  public userReport = [];
  loginFlag: boolean = false;

  constructor(private studentService : StudentService,private router:Router) { }

  ngOnInit() {

    this.studentService.fetchUserReport(Number(sessionStorage.getItem('userId')))
    .subscribe(data =>{

      console.log(data);
      this.userReport = data;

      console.log(this.userReport);
    });

  }
  userLogout = function () {
    sessionStorage.clear();
    this.router.navigateByUrl('/dashboard');
  }

  newExam(){

    this.router.navigateByUrl('/selectexam');
  }

}