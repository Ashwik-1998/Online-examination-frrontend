import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ExamServiceService } from '../exam-service.service';

@Component({
  selector: 'app-remove-question',
  templateUrl: './remove-question.component.html',
  styleUrls: ['./remove-question.component.css']
})
export class RemoveQuestionComponent implements OnInit {

  userId : string;
  question: RemoveQuestion = new RemoveQuestion();


  constructor(private examService : ExamServiceService, private router: Router) { }

  ngOnInit() {
    this.userId = sessionStorage.getItem("userId");
    console.log(this.userId);
  }

  
  removeCheck()
  {
    this.examService.deleteQuestion(this.question.subjectName,this.question.testLevel).subscribe(data =>{
      console.log(this.question.subjectName);
      console.log(this.question.testLevel);
      

    });
    alert("questions removed successfully");
  };


  onSubmit()
  {
    console.log(this.question);
  }


  userLogout = function () {
    sessionStorage.clear();
    this.router.navigateByUrl('/dashboard');
  }
    
}

export class RemoveQuestion
{
  subjectName  : string;
  testLevel  : number;
}