import { Component, Input, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Question } from '../add-question/add-question.component';
import { IQuestion } from '../Question';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-select-exam',
  templateUrl: './select-exam.component.html',
  styleUrls: ['./select-exam.component.css']
})
export class SelectExamComponent implements OnInit {

 subjectName : string;
 public questions : IQuestion[] = [];
 
  name: string;
  constructor(private router: Router, private studentService: StudentService) { }

  ngOnInit() {
  }


  selectExam (subjName: string) {
    alert(subjName);
    this.subjectName = subjName;
    this.questionDisplay();
    this.router.navigateByUrl('/startexam');
}


 questionDisplay (){
     this.studentService.getQuestions("SQL")
     .subscribe(data => {
       console.log(data);
      this.questions = data
     });
     console.log(this.questions);
   }

}
