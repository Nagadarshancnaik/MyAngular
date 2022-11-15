import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClearRecentComponent } from '../clear-recent/clear-recent.component';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})
export class RecentComponent implements OnInit {
  getRecentList: any;
fav:any;
  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
    this.getRecentList=localStorage.getItem('recentcity')
    this.getRecentList=JSON.parse(this.getRecentList);
    // console.log(this.getRecentList);
    if(localStorage.getItem('recentcity')){
      this.fav=true;
    }
    else{
      this.fav=false;
    }

  }
  removeFav(){
    this.dialog.open(ClearRecentComponent);
}
}
