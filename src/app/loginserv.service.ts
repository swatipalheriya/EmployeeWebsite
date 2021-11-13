import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginservService {
  logininfo:any;
  
  constructor() { }
  SetData(logininfo)
  {
    this.logininfo=logininfo;
  }
  getData(){
    return this.logininfo;
  }
}
