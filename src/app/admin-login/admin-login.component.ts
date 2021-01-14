import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Login } from '../user-login/user-login.component';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
 message : string;
 login : Login = new Login();


  constructor(private studentService  :  StudentService, private router :Router) { }

  loginCheck()
  {
    console.log(this.login);
    this.studentService.login(this.login).subscribe((response:any) =>{
      console.log(response);

      if(response.status == "SUCCESS"){
        let userId = response.userId;
        sessionStorage.setItem('userId', String(userId));
        this.router.navigate(['selectexam']);

      }

      else
      this.message = response.message;
    })
  }

  ngOnInit() {
  }

}


export class AdminLogin{

  email:string;
  password: string;
}