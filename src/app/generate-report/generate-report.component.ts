import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportCardServiceService } from '../report-card-service.service';

@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})
export class GenerateReportComponent implements OnInit {

  userId : string;

  constructor(private reportCard : ReportCardServiceService, private router:Router) { }

  ngOnInit() {
    this.userId = sessionStorage.getItem("userId");
    console.log(this.userId);
  }

  goToExam(){
    this.router.navigateByUrl('/home');
  }

  logOut(){
    sessionStorage.clear();
    this.router.navigateByUrl('/dashboard');
  }
}