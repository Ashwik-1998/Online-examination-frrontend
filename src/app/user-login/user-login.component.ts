import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent  {

  login: Login = new Login();
  message  :string;
  
  constructor(private studentService  :  StudentService, private router :Router) { }

  

  loginCheck()
  {
    console.log(this.login);
    this.studentService.login(this.login).subscribe((response:any) =>{
      console.log(response);

      if(response.status == "SUCCESS"){
        let userId = response.userId;
        sessionStorage.setItem('userId', String(userId));
        this.router.navigate(['home']);

        sessionStorage.setItem('logged', "true");

      }

      else
      this.message = response.message;
    })

  }

  }

export class Login{

  email:string;
  password: string;
}

