import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from '../add-question/add-question.component';
import { ExamServiceService } from '../exam-service.service';
import { ViewQuestion } from '../view-question/view-question.component';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {

  questionId: number;
 question : ViewQuestion = new ViewQuestion();
 //question :Question1= new Question1();

  constructor(private examService:ExamServiceService, private route : ActivatedRoute , 
    private router : Router) { }

  ngOnInit() {
     this.questionId= this.route.snapshot.params['questionId'];
    this.examService.getQuestionById(this.questionId).subscribe
    (data =>{
      this.question=data
    }, error => console.log(error));
      
  }

  onSubmit()
  {
    this.examService.updateQuestion(this.questionId, this.question).subscribe(data => {

      alert("Edited Successfully!!")
        //this.viewQuestion(this.questionId);
    },
    error => console.log(error));
  }


  userLogout = function () {
    sessionStorage.clear();
    this.router.navigateByUrl('/dashboard');
  }


}