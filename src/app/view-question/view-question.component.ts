import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ExamServiceService } from '../exam-service.service';




@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css']
})
export class ViewQuestionComponent implements OnInit{

  questions: ViewQuestion[];
  searchtermSubject:string;
  searchtermdesc:string;
 // questionId :number;
 //viewQuestion : ViewQuestion;

  constructor(private examService :ExamServiceService, private router : Router) { }


  ngOnInit():void {

  

  
    this.examService.viewQuestions().subscribe(
      response =>{this.questions = response;}
     );
  }

  updateQuestion(questionId :number)
  {
    this.router.navigate(['/updatequestion',questionId]);
  }

  
  userLogout = function () {
    sessionStorage.clear();
    this.router.navigateByUrl('/dashboard');
  }

}  

export class ViewQuestion
{
 constructor(

 /*questionId  : number,
  subjectName : string,
  questionDesc :  string,
  option1 : string,
  option2 : string,
  option3 : string,
  option4 : string,
  correctAnswer: number,
  testLevel: number*/


 ){}
 
}
  /*ViewCheck()
  {
    
   this.examService.getQuestions(this.question.subjectName,this.question.testLevel).subscribe(data =>{
    console.log(this.question.subjectName);
    console.log(this.question.testLevel);
    

  
  console.log("questions viewed successfully");
  
   });

  


  };
    
handleSuccessfulResponse(response)
{
  this.questions=response;
}


}*/