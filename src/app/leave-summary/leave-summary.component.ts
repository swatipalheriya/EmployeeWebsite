import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leave-summary',
  templateUrl: './leave-summary.component.html',
  styleUrls: ['./leave-summary.component.css']
})
export class LeaveSummaryComponent implements OnInit {
leaveinfo:any=[];  
status:"pending";                            //when employee apply for leave it creates localstorage

  constructor() { }

  ngOnInit() {
    this.leaveinfo=JSON.parse(localStorage.getItem("applyData"));
  }
  approval(i){
    console.log(i)
    this.leaveinfo=JSON.parse(localStorage.getItem("applyData"));

    for(let j=0;j<this.leaveinfo.length-1;j++){
      if(j==i)
        {
          this.leaveinfo[j].status="Approved";
          localStorage.setItem("applyData",JSON.stringify(this.leaveinfo));    //override array,localstorage data
          this.leaveinfo=JSON.parse(localStorage.getItem("applyData"));
      }
    }
  }
notApproval(i){
    this.leaveinfo=JSON.parse(localStorage.getItem("applyData"));
    for(let j=0;j<this.leaveinfo.length-1;j++){
        if(j==i)
        {
          this.leaveinfo[j].status="Rejected";
          localStorage.setItem("applyData",JSON.stringify(this.leaveinfo));
          this.leaveinfo=JSON.parse(localStorage.getItem("applyData"));
        }
      }
      
    }
  }

 
