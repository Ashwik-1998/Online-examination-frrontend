import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-area',
  templateUrl: './admin-area.component.html',
  styleUrls: ['./admin-area.component.css']
})
export class AdminAreaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  addQuestion=function(){
    this.router.navigateByUrl('/addquestion');
  }

  removeQuestion=function(){
    this.router.navigateByUrl('/removequestion');
  }

  viewReport=function(){
    this.router.navigateByUrl('/viewreport');
  }
  addQuestionFile=function(){
    this.router.navigateByUrl('/addquestionfile');
  }

  searchStudent(){

    this.router.navigateByUrl('/searchstudent');
  }

  viewQuestion=function()
  {
    this.router.navigateByUrl('/viewquestion');
  }

}