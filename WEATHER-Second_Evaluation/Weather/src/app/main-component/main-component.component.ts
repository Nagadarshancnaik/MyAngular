import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
date:any;
  constructor() { }

  ngOnInit(): void {
    this.date=new Date();
  }

}
