import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ViewQuestion } from './view-question/view-question.component';

@Injectable({
  providedIn: 'root'
})
export class ExamServiceService {

  reportId : number;

  constructor(private http: HttpClient) { }

  sendResponse(questionId: number, optionChosen : number) {
    this.reportId = Number(sessionStorage.getItem('reportId'));

    let url = "http://localhost:8081/response?questionId="+ questionId + "&optionChosen="+ optionChosen + "&reportId="+this.reportId;
    return this.http.get(url);
  }

  scoreCalculation(questionId: number, optionChosen : number) {
    this.reportId = Number(sessionStorage.getItem('reportId'));
    let url = "http://localhost:8081/submitresponse?questionId="+ questionId + "&optionChosen="+ optionChosen + "&reportId="+this.reportId;
    return this.http.get(url);
  }


  generateReport(userId : number) : Observable<any> {
    this.reportId = Number(sessionStorage.getItem('reportId'));
    let url = "http://localhost:8081/generatereport?userId="+userId+ "&reportId="+this.reportId;
    return this.http.get<any>(url);
  }


  deleteQuestion(subjectName : string , testLevel :number) {
    let url = "http://localhost:8081/removequestion?subjectName="+ subjectName + "&testLevel="+ testLevel;
      return this.http.get(url);
    }


    viewQuestions()
    {
      let url = "http://localhost:8081/viewQuestion";
      
      return this.http.get<ViewQuestion[]>(url);
    }

    getQuestionById(questionId :  number)
    {
      let url = "http://localhost:8081/getquestion?questionId="+questionId;
      return this.http.get(url);
    }

    updateQuestion(questionId : number , question : ViewQuestion)
    {
      let url = "http://localhost:8081/updatequestion?questionId="+questionId ;
      return this.http.post(url,question);
    }
}
