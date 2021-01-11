import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';

import { UserLoginComponent } from './user-login/user-login.component';


const routes: Routes = [

{path:'user-login',component:UserLoginComponent},
{path:'admin-login',component:AdminLoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
