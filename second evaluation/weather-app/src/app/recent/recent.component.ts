import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ClearRecentComponent } from '../clear-recent/clear-recent.component';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})
export class RecentComponent implements OnInit {
  getRecentList: any;
fav:any;
  constructor(public dialog:MatDialog,private router: Router) { }

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
    localStorage.setItem('url',JSON.stringify(this.router.url));
  }
  removeFav(){
    this.dialog.open(ClearRecentComponent);
}
navigateToHome(data:any){
  this.router.navigate(['home']);
  localStorage.setItem('cityFromApi',JSON.stringify(data));
}
}
