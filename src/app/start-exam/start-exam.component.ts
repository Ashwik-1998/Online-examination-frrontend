import { Component, Input, OnInit, Output } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentService } from '../student.service';
import { SelectExamComponent } from '../select-exam/select-exam.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-exam',
  templateUrl: './start-exam.component.html',
  styleUrls: ['./start-exam.component.css']
})
export class StartExamComponent {

  //public questions = [];

  constructor(private router: Router) {
  }

  // questionDisplay (){
  //    this.studentService.getQuestions(this.sbjName)
  //    .subscribe(data => this.questions = data);
  //  }

  startExam(){
  this.router.navigateByUrl('/questionpaper');
  }

}
