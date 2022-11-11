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
  favCity: any;
  city:any
  show:any=false;
  active='active';
  getFavourite:any;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.date = new Date();

    this.getFavourite=localStorage.getItem("FavCities")
    this.getFavourite=JSON.parse(this.getFavourite);
    console.log(this.getFavourite);
    
  }
  removeFav() {
    this.dialog.open(RemoveFavComponent);
    
  }


  getFavCity() {
    this.city =(localStorage.getItem('cityData'));
     this.city= JSON.parse(this.city);
    console.log(this.city)
    if (this.city) {
      this.favCity = [...new Map(this.city.map((m:any) => [m.id, m])).values()];
      console.log(this.favCity)
    }
  }

 




}
