import { EmailChangerService } from './../email-changer.service';
import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: []
})
export class TestComponent {
  
  constructor(private emailChanger: EmailChangerService) { }
  
  @Input() currentEmail:string = '';

  
}
