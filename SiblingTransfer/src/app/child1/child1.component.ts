import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  public message:any;
  constructor(private shareService:ShareService) { }

  ngOnInit(): void {
    this.shareService.shareSubjectTwo.subscribe(data=>{
      this.message=data;
    })
  }
  sendMessageToChild2(data:any){
    this.shareService.shareData(data.value)
  }
}
