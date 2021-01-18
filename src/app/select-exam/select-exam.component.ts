import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { IQuestion } from '../Question';
import { StudentService } from '../student.service';
import { User } from  '../user';

@Component({
  selector: 'app-select-exam',
  templateUrl: './select-exam.component.html',
  styleUrls: ['./select-exam.component.css']
})


export class SelectExamComponent implements OnInit {

 subjectName : string;
 public questions : IQuestion[] = [];
 isSubmitted  =  false;
 userId: string;
 maxLevel : number ;
 
  name: string;
  constructor(private router: Router, private studentService: StudentService, private elementRef: ElementRef) { }

  ngOnInit() {

    this.userId = sessionStorage.getItem("userId");
    console.log(this.userId);
  }


  selectExam (subjName: string) {
    alert(subjName);
    this.subjectName = subjName;
    console.log(this.subjectName);

    sessionStorage.setItem('subject', this.subjectName);

    this.maxLevelCleared();

    this.elementRef.nativeElement.remove();

    this.router.navigateByUrl('/startexam');
}


 maxLevelCleared (){
     this.studentService.maxLevelCrossed(Number(sessionStorage.getItem('userId')), sessionStorage.getItem('subject'))
     .subscribe(data => {
      console.log(data);
      this.maxLevel  = data;
      alert("You have cleared "+ this.maxLevel + "Level of "+ sessionStorage.getItem('subject'));
      alert("You are eligible for giving "+ (this.maxLevel+1) + " Level of "+ sessionStorage.getItem('subject'));
     });
   }
   userLogout = function () {
    sessionStorage.clear();
    this.router.navigateByUrl('/dashboard');
  }

}