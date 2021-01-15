import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
 message : string;
 adminlogin : AdminLogin = new AdminLogin();


  constructor(private studentService  :  StudentService, private router :Router) { }

  loginCheck()
  {
    console.log(this.adminlogin);
    this.studentService.adminlogin(this.adminlogin).subscribe((response:any) =>{
      console.log(response);

      if(response.status == "SUCCESS"){
        let userId = response.userId;
        sessionStorage.setItem('id', String(userId));
        this.router.navigate(['adminarea']);

      }

      else
      this.message = response.message;
    })
  }

  ngOnInit() {
  }

}


export class AdminLogin{

  id: number;
  password: string;
}