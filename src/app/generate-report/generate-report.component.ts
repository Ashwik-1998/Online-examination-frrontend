import { Component, OnInit } from '@angular/core';
import { ReportCardServiceService } from '../report-card-service.service';

@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})
export class GenerateReportComponent implements OnInit {

  userId : string;

  constructor(private reportCard : ReportCardServiceService) { }

  ngOnInit() {
    this.userId = sessionStorage.getItem("userId");
    console.log(this.userId);
  }

}