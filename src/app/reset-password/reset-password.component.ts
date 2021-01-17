import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent  {

  email:string;

  constructor(private studentService: StudentService,private router: Router) { }

  ngOnInit(){
    
  }

  forgotPassword(){

    console.log(this.email);
    
    this.studentService.forgotPassword(this.email).subscribe();

    alert("Your login credentials have been sent to your registered email ID");


  }

}