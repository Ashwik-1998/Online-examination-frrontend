import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminLogin } from './admin-login/admin-login.component';
import { Student } from './Student';
import { Login } from './user-login/user-login.component';
import { HttpClientModule } from '@angular/common/http';


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

  adminlogin( login :AdminLogin) 
  {
    let url = "http://localhost:8081/adminlogin";
    return this.http.post(url,login);
  }

  forgotPassword(body):Observable<any>{
    let url="http://localhost:8081/changepassword";
    return this.http.post(url,body)
  
  }
  requestReset(body):Observable<any>{
    let url="http://localhost:8081/changepassword";
    return this.http.post(url,body)
  }
   
}
