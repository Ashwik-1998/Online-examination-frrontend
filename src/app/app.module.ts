import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { RemoveQuestionComponent } from './remove-question/remove-question.component';
import { GenerateReportComponent } from './generate-report/generate-report.component';
import { ViewReportComponent } from './view-report/view-report.component';
import { SearchStudentComponent } from './search-student/search-student.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SelectExamComponent } from './select-exam/select-exam.component';
import { StartExamComponent } from './start-exam/start-exam.component';
import { QuestionPaperComponent } from './question-paper/question-paper.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { ResponseResetpasswordComponent } from './response-resetpassword/response-resetpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegistrationComponent,
    UserLoginComponent,
    AdminLoginComponent,
    ResetPasswordComponent,
    AddQuestionComponent,
    RemoveQuestionComponent,
    GenerateReportComponent,
    ViewReportComponent,
    SearchStudentComponent,
    HomeComponent,
    AboutUsComponent,
    SelectExamComponent,
    StartExamComponent,
    QuestionPaperComponent,
    HttpClientModule,
    FormsModule,
    NgxCaptchaModule,
    ResponseResetpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
