import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RemoveFavComponent } from '../remove-fav/remove-fav.component';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  date: any;
  routerUrl!: string;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.date = new Date();
  }
  removeFav() {
    this.dialog.open(RemoveFavComponent);
  }
}
