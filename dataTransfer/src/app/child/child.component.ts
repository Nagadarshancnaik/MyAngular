import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  constructor() { }
@Input() childName:any;
@Input() childMark:any;

@Output() updateTitle=new EventEmitter<string>();

ngOnChanges(changes:SimpleChanges):void{
console.log("ng is changed");

}
  ngOnInit(): void {
  }

}
