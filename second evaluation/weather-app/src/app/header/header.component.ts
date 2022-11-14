import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  date: any;
  active='active';
  constructor() { }

  ngOnInit(): void {
    this.date=new Date();
  }

}
