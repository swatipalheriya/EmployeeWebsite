import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from '../login-model';
import { LoginservService } from '../loginserv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  flag = false; flag1 = false;
  hide = true;
  user: LoginModel = new LoginModel();
  loginform: FormGroup;
  model: any = {};
  e: any[];
  adminLogin = {
    email: 'admin@gmail.com',
    password: 'admin123'
  };

  constructor(private formBuilder: FormBuilder, private r: Router,private m:LoginservService) { }

  ngOnInit() {
    this.loginform = this.formBuilder.group(
      {
        'email': [this.user.email, [Validators.required, Validators.email]],
        'password': [this.user.password, [Validators.required, Validators.maxLength(30)]],
      }
    );

  }
  signupData() {
    this.r.navigate(['signup']);
  }

  onLoginSubmit() {
    this.e = JSON.parse(localStorage.getItem("empData"));
    this.model = this.loginform.value;
    console.log(this.model)
    let myData: any = {};
    for (let i = 0; i < this.e.length; i++) {
      if (this.model.email == this.e[i].Email && this.model.password == this.e[i].userPassword) {
          this.flag = true;
            myData=this.e[i];
            console.log(myData)
        }
        else if (this.model.email == this.adminLogin.email && this.adminLogin.password) {
          this.flag1 = true;
        }
      }

      if (this.flag == true) {
        this.m.SetData(myData);
        this.r.navigate(['applyleave']);

      } else if (this.flag1 == true) {
        // this.m.SetData(leaveinfo);
        this.r.navigate(['summary']);
      }
      else {
        alert("user is not registerd")
        this.loginform.reset();
      }
    }
  }


