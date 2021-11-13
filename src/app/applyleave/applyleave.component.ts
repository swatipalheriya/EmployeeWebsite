import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginservService } from '../loginserv.service';

@Component({
  selector: 'app-applyleave',
  templateUrl: './applyleave.component.html',
  styleUrls: ['./applyleave.component.css']
})
export class ApplyleaveComponent implements OnInit {
  model: any = {};
  leaveform: FormGroup;
  e: any[] = [];
  employee: any[] = [];
  model2: any = {};
  isEdit = true;
  isupdate = true;
  model3: any = {};
  model4: any = {};
  model5: any = {};
  username: any;
  status: "pending";
  myvalue: any;
fromdate: any;
todate:any;


  constructor(private m: LoginservService) {
    this.model2 = this.m.getData();
    this.username = this.model2.username;
  }

  ngOnInit() {
    this.e = JSON.parse(localStorage.getItem("applyData"));
    this.leaveform = new FormGroup({
     fromdate: new FormControl(['', Validators.required]),
      todate: new FormControl(['', Validators.required]),     
       });
       if ((this.fromdate !== null &&  this.todate !== null) && this.fromdate > this.todate) {
        return this.leaveform;
        }
 
  if (this.e != null) {
    let j = 0;
    for (let i = 0; i < this.e.length; i++) {
      if (this.e[i].username == this.username) {
        this.employee[j] = this.e[i];
        j++;
      }
      if(this.e[i].status != "pending")
      {
        this.isEdit=true;
      }else{
        this.isEdit=false;
      }
    }
  }
}
 
  addData() {
    this.model = this.leaveform.value;
    this.model.username = this.username;
    this.model.status = 'pending';
    console.log(this.model)
    let emp = JSON.parse(localStorage.getItem("applyData"));
    if (emp == null) {
      emp = [];
    }

    emp.push(this.model);
    localStorage.setItem("applyData", JSON.stringify(emp));
    this.e = JSON.parse(localStorage.getItem("applyData"));

    let j = 0;
    for (let i = 0; i < this.e.length; i++) {
      if (this.e[i].username == this.username) {
        this.employee[j] = this.e[i];
        j++;
      }
      if (this.e[i].status != 'pending') {
        this.isEdit = true;
      }
      else {
        this.isEdit = false;
      }
    }

}

  deleteLeave(i) {
    this.e.splice(i, 1);
    localStorage.setItem("applyData", JSON.stringify(this.e));
    this.e = JSON.parse(localStorage.getItem("applyData"));
    this.employee = this.e;
  }

  editLeave(i) {
    this.isupdate =true;
    this.model3.fromdate = this.e[i].fromdate;
    this.model3.todate = this.e[i].todate;
    this.myvalue = i;
  }

  updateLeave() {
    this.isEdit = false;
    let k = this.myvalue;
    this.model4 = this.leaveform.value;
    this.model5.fromdate = this.model4.fromdate;
    this.model5.todate = this.model4.todate;
    this.model5.username = this.username;
    this.model5.status = this.status;

    for (let i = 0; i < this.e.length; i++) {
      if (i == k) {
        this.e[i] = this.model5;
        localStorage.setItem("applyData", JSON.stringify(this.e));
        this.e = JSON.parse(localStorage.getItem("applyData"));
        this.employee = this.e;
      }
      if (this.e[i].status != 'Not Approve') {
        this.isEdit = true;
      }
      else {
        this.isEdit = false;
      }
    }
    this.model4 = {};
    this.model5 = {};
  }
}