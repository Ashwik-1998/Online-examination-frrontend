import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  constructor(private studentService : StudentService) { }

  question : Question = new Question();
  ngOnInit() {
  }

  addCheck(): void {
   this.studentService.addquestion(this.question)
   .subscribe(data =>
    {
      alert("question added !");
    });

  };
    

}
export class Question{
  
	
	 subjectName : string;
	 questionDesc : string;
   option1 : string;
   option2 : string;
   option3 : string;
   option4 : string;
   correctAnswer: number;
   testLevel :number;


}