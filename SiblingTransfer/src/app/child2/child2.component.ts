import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  public newMessage:any;
  constructor(private shareService:ShareService) { }

  ngOnInit(): void {
    this.shareService.shareSubject.subscribe(data=>{
      this.newMessage=data;
    })
  }
  sendMessageToChild1(data:any){
    this.shareService.shareDataTwo(data.value);
  }

}
