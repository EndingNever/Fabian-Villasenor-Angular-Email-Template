import { EmailChangerService } from './../email-changer.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mid-col',
  templateUrl: './mid-col.component.html',
  styleUrls: ['./mid-col.component.css']
})
export class MidColComponent implements OnInit {
  @Output() emailSelected = new EventEmitter<string>();

  
  constructor(private emailChanger: EmailChangerService) { }

  ngOnInit(): void {
  }

  onClick(value: string){
    // this.emailSelected.emit(value);
    this.emailSelected.emit(value);
    // console.log(value);
  }
  
}
