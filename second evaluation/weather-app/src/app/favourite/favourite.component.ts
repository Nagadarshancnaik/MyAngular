import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RemoveFavComponent } from '../remove-fav/remove-fav.component';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  removeFav(){
      this.dialog.open(RemoveFavComponent);
  }
}
