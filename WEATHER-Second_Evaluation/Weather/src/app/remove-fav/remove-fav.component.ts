import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remove-fav',
  templateUrl: './remove-fav.component.html',
  styleUrls: ['./remove-fav.component.css']
})
export class RemoveFavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
yes(){
  localStorage.removeItem('FavCities')
  window.location.reload();
}
}
