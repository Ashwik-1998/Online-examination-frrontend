import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Login } from './user-login/user-login.component';
import { AdminLogin } from './admin-login/admin-login.component';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

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
}
