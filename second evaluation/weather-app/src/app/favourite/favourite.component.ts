import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RemoveFavComponent } from '../remove-fav/remove-fav.component';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
show:any=false;
  getFavList: any;
  fav: any = true;

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
    this.getFavList=localStorage.getItem('favCity')
    this.getFavList=JSON.parse(this.getFavList);
    // console.log(this.getFavList);
    if(localStorage.getItem('favCity')){
      this.fav = true;
    }else{
      this.fav = false;
    }
  }

  removeFav(){
      this.dialog.open(RemoveFavComponent);
  }
}
