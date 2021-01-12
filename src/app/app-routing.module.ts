import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [

  {path:'user-login',component:UserLoginComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'register',component:RegistrationComponent},
  {path:'home',component:HomeComponent},
  {path:'add-question',component:AddQuestionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
