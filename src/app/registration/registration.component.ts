import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  student: Student = new Student();

  constructor(private studentService: StudentService) { }


  ngOnInit(): void {

  }

  register(){
    alert(JSON.stringify(this.student));

    this.studentService.register(this.student).subscribe(response => {
      alert(JSON.stringify(response));
    })
  }

}
