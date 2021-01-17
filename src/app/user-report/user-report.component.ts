import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-user-report',
  templateUrl: './user-report.component.html',
  styleUrls: ['./user-report.component.css']
})
export class UserReportComponent implements OnInit {

  public userReport = [];

  constructor(private studentService : StudentService) { }

  ngOnInit() {

    this.studentService.fetchUserReport(Number(sessionStorage.getItem('userId')))
    .subscribe(data =>{

      console.log(data);
      this.userReport = data;

      console.log(this.userReport);
    });

  }

}
