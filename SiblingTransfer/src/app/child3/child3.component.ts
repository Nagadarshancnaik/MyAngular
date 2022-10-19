import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {
public newMessage:any;
  constructor(private shareService:ShareService) { }

  ngOnInit(): void {
    this.shareService.shareSubject.subscribe(data=>{
      this.newMessage=data;
    })
  }

}
