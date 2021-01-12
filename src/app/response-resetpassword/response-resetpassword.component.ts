import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { SpawnSyncOptionsWithStringEncoding } from 'child_process';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent  {
  
  RequestResetForm:FormGroup;
  message:string;
  IsvalidForm=true;
  constructor(private studentService: StudentService,private router: Router) { }

  ngOnInit(){
    this.RequestResetForm=new FormGroup({
      'email':new FormControl(null,[Validators.required,Validators.email]),
    });
  }
RequestResetUser(form){
  console.log(form)
  if(form.valid){
    this.IsvalidForm=true;
    this.studentService.forgotPassword(this.RequestResetForm.value).subscribe(
      data=>{
        this.RequestResetForm.reset();
        this.message="Reset password link is shared to your email";
      }
    )

  }
  else{
    this.IsvalidForm=false;
  }
}
}