import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { ExamServiceService } from '../exam-service.service';
import { IQuestion } from '../Question';
import { ReportCardServiceService } from '../report-card-service.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-question-paper',
  templateUrl: './question-paper.component.html',
  styleUrls: ['./question-paper.component.css']
})
export class QuestionPaperComponent implements OnInit {

  //@Input() public questionsList = [];

  public questionsList : IQuestion[] = [];
  //public randomQuestionsList : IQuestion[] = [];
  reportId : number;

  p:number=1;
  selectedOption:string;
  selectedQuesid:string;
  userId : string;

  minutes: number = 20;
  seconds: number = 59;
  interval;
  //reportCard : ReportCard;
  
  constructor(private router: Router, private examService: ExamServiceService, public reportCard : ReportCardServiceService, private studentService: StudentService) { }

  ngOnInit() {
    this.userId = sessionStorage.getItem("userId");
    console.log(this.userId);


    // question fetch
    console.log(sessionStorage.getItem('subject'))
    this.studentService.getQuestions(sessionStorage.getItem('subject'), Number(sessionStorage.getItem('userId')))
    .subscribe(data => {
      console.log(data);
     this.questionsList = data.questions;
     sessionStorage.setItem('reportId', data.reportId);
    });
    console.log(this.questionsList);


    // randomization of questions
    // for (var i = 0; i < 6; i++) {
    //     var rand = this.questionsList[Math.floor(Math.random() * this.questionsList.length)];
    //     this.randomQuestionsList.push(rand);
    //   }


    // timer functionality
    this.interval = setInterval(() => {

      if(this.minutes>0 || this.seconds>0){
      if(this.seconds > 0) {
        this.seconds--;
      } 
      else{
        this.minutes--;
        this.seconds = 59;
      }
    }else {
        this.submitExam();
        //this.timeLeft = 60;
      }
    },1000)

  }
  radioChange(event:any){
    this.selectedOption=event.target.value;
    this.selectedQuesid=event.target.id;
  }
  onSubmitAnswer(event : any){
    // alert(this.selectedOption);
    // alert(this.selectedQuesid); 

    event.target.disabled = true;
    this.examService.sendResponse(Number(this.selectedQuesid) , Number(this.selectedOption)).subscribe(

      data => { 
        console.log(this.selectedQuesid);
      }
    );

    this.examService.scoreCalculation(Number(this.selectedQuesid) , Number(this.selectedOption)).subscribe(

      data => { 
        console.log(this.selectedQuesid);
      }
    );

  }
  
  submitExam(){
    this.examService.generateReport(Number(this.userId)).subscribe(

      data => {

          this.reportCard.name = data.fullName;
          this.reportCard.score = data.score;
          this.reportCard.testLevel = data.testLevel;
          this.reportCard.subjectName = data.testSubjectName;

         // this.reportCard = data;
          console.log(this.reportCard);

      }

    );



    this.router.navigate(['generatereport']);
  }

}