import { Component, Input, OnInit, Output } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentService } from '../student.service';
import { SelectExamComponent } from '../select-exam/select-exam.component';
import { Router } from '@angular/router';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-start-exam',
  templateUrl: './start-exam.component.html',
  styleUrls: ['./start-exam.component.css']
})
export class StartExamComponent implements OnInit {
  
  userId : string;
  @Input() public questionsList = [];

  constructor(private router: Router, private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.userId = sessionStorage.getItem("userId");
    console.log(this.userId);
  }

 
  startExam(){

  this.elementRef.nativeElement.remove();
  
  this.router.navigateByUrl('/questionpaper');
  }

}
