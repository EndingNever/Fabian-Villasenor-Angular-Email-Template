import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailChangerService {
  currentEmail:string ='';
  

  constructor() { }

  onChangeEmail(emailName: string) {
    this.currentEmail = emailName;
    console.log(this.currentEmail);
  }

}

