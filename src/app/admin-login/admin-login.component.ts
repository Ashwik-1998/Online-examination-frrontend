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
 response : any;


  constructor(private studentService  :  StudentService, private router :Router) { }

  loginCheck()
  {
    alert(JSON.stringify(this.login));
    this.studentService.login(this.login).subscribe(response =>{
      alert(JSON.stringify(response));

      

    })
  }

  ngOnInit() {
  }

}


export class AdminLogin{

  email:string;
  password: string;
}