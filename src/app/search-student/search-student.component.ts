import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadStart, Router } from '@angular/router';
import {DisplayStudentComponent} from '../display-student/display-student.component';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})

export class SearchStudentComponent implements OnInit {
  score = [20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];
  testLevel=[1,2,3];
  testSubjectName = [ 'Java','Sql','c,c++','python','dotnet'];
  userId : string;

  states: Array<any> = [
    { name: 'Gujurat', cities: ['Ahemedabad', 'Surat'] },
    { name: 'Karmataka', cities: ['Banglore','Hassan'] },
    { name: 'Maharastra', cities: ['Mumbai','Nagpur'] },
  ];
  cities: Array<any>;
  changeState(count) {
    this.cities = this.states.find(con => con.name == count).cities;
  } 

  constructor(private router:Router) {
  }
  ngOnInit(): void {
    this.userId = sessionStorage.getItem("userId");
    console.log(this.userId);
  }
  
  display() {
    this.router.navigateByUrl('/displaystudent');
  }
}