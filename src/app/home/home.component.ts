import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loginFlag: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.loginFlag = Boolean(sessionStorage.getItem('logged'));
  }

  userLogin = function () {
    this.loginFlag = Boolean(sessionStorage.getItem('logged'));
    this.router.navigateByUrl('/user-login');
  }

  userLogout = function () {
    sessionStorage.clear();
    this.router.navigateByUrl('/dashboard');
  }

  userRegister = function () {
    this.router.navigateByUrl('/register');
  }


  report = function () {

    if (sessionStorage.getItem('userId') == null) {
      alert("Please login before seeing your reports");
      this.router.navigateByUrl('/user-login');
    }

    else {
      this.router.navigateByUrl('/userreport');
    }
  }

  newExam = function () {

    if (sessionStorage.getItem('userId') == null) {
      alert("Please login before selecting exam");
      this.router.navigateByUrl('/user-login');
    }

    else {
      this.router.navigateByUrl('/selectexam');
    }
  }

  home() {
    this.router.navigateByUrl('/home');
  }
  aboutUs() {
    this.router.navigateByUrl('/aboutus');
  }
}