import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularmaterialModule} from './angularmaterial/angularmaterial.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import {LoginModel} from './login-model';
import { ApplyleaveComponent } from './applyleave/applyleave.component';
import { LeaveSummaryComponent } from './leave-summary/leave-summary.component';
import {LoginservService} from './loginserv.service';
import { SignoutComponent } from './signout/signout.component';


const appRouts:Routes=[
  {path:'',component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"applyleave",component:ApplyleaveComponent},
  {path:"summary",component:LeaveSummaryComponent},
  {path:"signout",component:SignoutComponent},
  {path:"",redirectTo:'./login',pathMatch:"full"},
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ApplyleaveComponent,
    LeaveSummaryComponent,
    SignoutComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularmaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRouts),
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [LoginservService],
  bootstrap: [AppComponent]
})
export class AppModule { }
