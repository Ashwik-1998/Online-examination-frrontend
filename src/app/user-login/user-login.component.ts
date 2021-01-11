import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  login: Login = new Login();
 // message  :string;
  response: any;
  constructor(private studentService  :  StudentService, private router :Router) { }

  ngOnInit() {
  }

 

  loginCheck()
  {
    alert(JSON.stringify(this.login));
    this.studentService.login(this.login).subscribe(response =>{
      alert(JSON.stringify(response));

      /*if(this.response.status == 'SUCCESS')
      {
        let userId = this.response.userId;
        let fullName = this.response.fullName;
         sessionStorage.setItem('userId',String(userId));
         sessionStorage.setItem('fullName',fullName);
         //this.router.navigate(['dashboard']);     
      }
      else{
        this.message = this.response.message;
      }*/
    })
  
  }

  }
export class Login{

  email:string;
  password: string;
}

