import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminLogin } from './admin-login/admin-login.component';
import { Student } from './Student';
import { Login } from './user-login/user-login.component';
import { HttpClientModule } from '@angular/common/http';
import { Question } from './add-question/add-question.component';
import { IQuestion } from './Question';
import { TestReport } from './view-report/view-report.component';
import { GetStudentServiceService } from './get-student-service.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  register(student: Student) : Observable<any> {
    let url = "http://localhost:8081/register";
    return this.http.post(url,student);
  }

  login( login :Login) 
  {
    let url = "http://localhost:8081/userlogin";
    return this.http.post(url,login);
  }

  adminlogin( adminlogin :AdminLogin) 
  {
    let url = "http://localhost:8081/adminlogin";
    return this.http.post(url,adminlogin);
  }

  forgotPassword(body):Observable<any>{
    let url="http://localhost:8081/changepassword";
    return this.http.post(url,body)
  
  }
  requestReset(body):Observable<any>{
    let url="http://localhost:8081/changepassword";
    return this.http.post(url,body)
  }


  addquestion(question : Question): Observable<any>{

    let url="http://localhost:8081/addquestion";
      return this.http.post(url, question);
    }

    getQuestions(subjectName: string, userId:number) : Observable<any>{
      let url="http://localhost:8081/startexam?userId="+ userId +"&subjectName="+subjectName;
      return this.http.get<any>(url);
    }

    viewReports(){
      let url="http://localhost:8081/viewReports";
      return this.http.get<TestReport>(url);
    }

    fetchStudents(getstudents: GetStudentServiceService) : Observable<any>{
      console.log(getstudents.testSubjectName);
      console.log(getstudents.state);
      let url="http://localhost:8081/searchstudent?score="+getstudents.score+"&testLevel="+getstudents.testLevel+"&testSubjectName="+getstudents.testSubjectName+"&city="+getstudents.city+"&state="+getstudents.state;
      return this.http.get(url);
    }


    fetchUserReport(userId : number): Observable<any>{

      let url = "http://localhost:8081/fetchreport?userId="+userId;

      return this.http.get(url);
    }


    maxLevelCrossed(userId : number, subjectName : string): Observable<any>{

      let url = "http://localhost:8081/maxlevel?userId="+userId+"&subjectName="+subjectName;

      return this.http.get(url);
    }
   
}