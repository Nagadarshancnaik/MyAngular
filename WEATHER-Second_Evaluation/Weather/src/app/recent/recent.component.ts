import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})
export class RecentComponent implements OnInit {
date:any;
  constructor() { }

  ngOnInit(): void {
    this.date=new Date();
  }

}
