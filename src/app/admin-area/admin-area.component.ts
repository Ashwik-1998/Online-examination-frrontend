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
    this.router.navigateByUrl('/add-question');
  }

  removeQuestion=function(){
    this.router.navigateByUrl('/remove-question');
  }

  viewReport=function(){
    this.router.navigateByUrl('/viewreport');
  }
  addQuestionFile=function(){
    this.router.navigateByUrl('/add-question-file');
  }

  searchStudent(){

    this.router.navigateByUrl('/searchstudent');
  }

}