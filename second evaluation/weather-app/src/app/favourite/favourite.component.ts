import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RemoveFavComponent } from '../remove-fav/remove-fav.component';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  show: any = false;
  getFavList: any;
  fav: any = true;

  constructor(public dialog: MatDialog,private router: Router) { }

  ngOnInit(): void {
    this.update();
    // console.log(this.getFavList);
    if (localStorage.getItem('favCity')) {
      this.fav = true;
    } else {
      this.fav = false;
    }
    localStorage.setItem('url',JSON.stringify(this.router.url));
  }

  removeFav() {
    this.dialog.open(RemoveFavComponent);
  }
  remove(data: any) {
    console.log(data);
    
    let favs = JSON.parse(localStorage.getItem('favCity') as any);
    console.log(favs);

    let current = favs.find((cur:any) => {
      return cur['name']==data['name'];
    })

    favs.splice(favs.indexOf(current), 1);
    localStorage.setItem('favCity', JSON.stringify(favs));
    this.update();
  }

  update() {
    this.getFavList = localStorage.getItem('favCity')
    this.getFavList = JSON.parse(this.getFavList);
  }
  navigateToHome(data:any){
    this.router.navigate(['home']);
  localStorage.setItem('cityFromApi',JSON.stringify(data));

  }
}
