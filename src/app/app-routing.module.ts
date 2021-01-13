import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AdminAreaComponent } from './admin-area/admin-area.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { QuestionPaperComponent } from './question-paper/question-paper.component';
import { RegistrationComponent } from './registration/registration.component';
import { SelectExamComponent } from './select-exam/select-exam.component';
import { StartExamComponent } from './start-exam/start-exam.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [

  {path:'user-login',component:UserLoginComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'register',component:RegistrationComponent},
  {path:'home',component:HomeComponent},
  {path:'add-question',component:AddQuestionComponent},
  {path:'selectexam',component: SelectExamComponent},
  {path:'startexam',component: StartExamComponent},
  {path:'questionpaper',component: QuestionPaperComponent}
  {path:'admin-area',component:AdminAreaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
