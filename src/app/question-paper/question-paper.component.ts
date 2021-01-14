import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { ExamServiceService } from '../exam-service.service';

@Component({
  selector: 'app-question-paper',
  templateUrl: './question-paper.component.html',
  styleUrls: ['./question-paper.component.css']
})
export class QuestionPaperComponent implements OnInit {

  @Input() public questionsList = [];
  p:number=1;
  selectedOption:string;
  selectedQuesid:string;
  userId : string;
  reportCard : ReportCard;
  
  constructor(private router: Router, private examService: ExamServiceService) { }

  ngOnInit() {
    this.userId = sessionStorage.getItem("userId");
    console.log(this.userId);
  }
  radioChange(event:any){
    this.selectedOption=event.target.value;
    this.selectedQuesid=event.target.id;
  }
  onSubmitAnswer(){
    // alert(this.selectedOption);
    // alert(this.selectedQuesid); 

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

          // this.reportCard.name = data.fullName;
          // this.reportCard.score = data.score;
          // this.reportCard.testLevel = data.testLevel;
          // this.reportCard.subjectName = data.testSubjectName;

          this.reportCard = data;
          console.log(this.reportCard);

      }

    );



    this.router.navigate(['generatereport']);
  }

}


export class ReportCard{

  // name : string;
  // score : number;
  // testLevel : number;
  // subjectName : string;

constructor(){}

}