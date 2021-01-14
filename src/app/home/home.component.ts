import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  userLogin= function () {
    this.router.navigateByUrl('/user-login');
}
userRegister= function () {
  this.router.navigateByUrl('/register');
}
report= function () {
  this.router.navigateByUrl('/');
}
newExam= function () {
  this.router.navigateByUrl('/selectexam');
}
}