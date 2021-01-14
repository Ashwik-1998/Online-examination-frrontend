import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { User } from  '../user';
import { AuthService } from  '../auth.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted  =  false;

  loginn: Login = new Login();
  response: any;

  constructor(private studentService  :  StudentService, private authService: AuthService, private router: Router, private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  }


  get formControls() { return this.loginForm.controls; }

  login(){
    console.log(this.loginForm.value);

    alert(JSON.stringify(this.loginn));
    this.studentService.login(this.loginn).subscribe(response =>{
      alert(JSON.stringify(response));
      this.isSubmitted = true;
    })
  
    if(this.loginForm.invalid){
      return;
    }
    this.authService.login(this.loginForm.value);
    this.router.navigateByUrl('/home');
  }
}


export class Login{

  email:string;
  password: string;
}
