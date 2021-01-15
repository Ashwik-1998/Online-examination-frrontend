import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamServiceService {


  constructor(private http: HttpClient) { }

  sendResponse(questionId: number, optionChosen : number) {
    let url = "http://localhost:8081/response?questionId="+ questionId + "&optionChosen="+ optionChosen;
    return this.http.get(url);
  }

  scoreCalculation(questionId: number, optionChosen : number) {
    let url = "http://localhost:8081/submitresponse?questionId="+ questionId + "&optionChosen="+ optionChosen;
    return this.http.get(url);
  }


  generateReport(userId : number) : Observable<any> {
   // userId = 4;
    let url = "http://localhost:8081/generatereport?userId="+userId;
    return this.http.get<any>(url);
  }


  deleteQuestion(subjectName : string , testLevel :number) {
    let url = "http://localhost:8081/removequestion?subjectName="+ subjectName + "&testLevel="+ testLevel;
      return this.http.get(url);
    }
}
