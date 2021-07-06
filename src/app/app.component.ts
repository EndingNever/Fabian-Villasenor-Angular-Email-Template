import { EmailChangerService } from './email-changer.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmailChangerService]
})
export class AppComponent {
  title = 'email-template';
  // receivedEmail: string = this.emailChanger.currentEmail;
  
  constructor(private emailChanger: EmailChangerService) { }

  currentEmail:string = 'lancia';

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  
  onEmailReceived(value:any) {
    this.currentEmail = value;
    console.log(value);
    
    // this.emailChanger.currentEmail = value;
    // console.log(this.currentEmail);
  }
}
