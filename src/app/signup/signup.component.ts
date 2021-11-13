import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
userform:FormGroup;
model:any={};
e:any[];
  constructor(private r:Router) { }

  ngOnInit() {
    this.e=JSON.parse(localStorage.getItem("empData"));
    this.userform=new FormGroup(
      { 
      username:new FormControl('',[Validators.required,Validators.minLength(3) ]),
      userPassword:new FormControl('',[Validators.required,Validators.minLength(5)]),
      Email:new FormControl('',[Validators.required,Validators.email])
// ,Validators.pattern("/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/")
  }
 );
  }
  adddata(){
    let emp=JSON.parse(localStorage.getItem("empData"));
    if(emp==null){
      emp=[];
    }
    this.model=this.userform.value;
    emp.push(this.model);
    localStorage.setItem("empData",JSON.stringify(emp));
    this.e=JSON.parse(localStorage.getItem("empData"));
    alert("Registration Successfully");
    this.model={};
    this.r.navigate(['login']);
  }

}
