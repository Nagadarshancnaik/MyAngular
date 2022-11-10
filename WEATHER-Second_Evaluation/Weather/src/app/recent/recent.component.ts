import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClearSearchComponent } from '../clear-search/clear-search.component';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})
export class RecentComponent implements OnInit {
date:any;
routerUrl!: string;
  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
    this.date=new Date();
  }
  ClearSearch(){
    this.dialog.open(ClearSearchComponent);
  }
}
