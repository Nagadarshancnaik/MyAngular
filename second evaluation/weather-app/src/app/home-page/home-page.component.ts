import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  homeCity: any;
  text: string = 'Add to favorite';
  color = 'no-color';
  border = 'favorite_border';
  favCity: any;
  active='active';
  active1='no-active';
  temperature: any;
  constructor(public weatherservice: WeatherService,private router:Router) { }

  ngOnInit(): void {
    this.homeCity = localStorage.getItem('cityFromApi');
    this.homeCity = JSON.parse(this.homeCity);
    this.temperature = (this.homeCity['main'].temp - 273.15).toFixed(0)


    this.favCity = JSON.parse(localStorage.getItem('favCity') as any);

    if (this.favCity) {
      for (let fc of this.favCity) {
        if (fc['name'] == this.homeCity['name']) {
          this.border = 'favorite';
          this.text = 'Added to favourite';
          this.color = 'color';
          break;
        } else {
          this.border = 'favorite_border';
          this.text = 'Add to favourite';
          this.color = 'no-color';
        }
      }
    }
    if(JSON.parse(localStorage.getItem('deg') as any)=='cel'){
      this.cel();
    }
    else {
      this.far();
    }
    localStorage.setItem('url',JSON.stringify(this.router.url));
  }

  cel() {
    this.temperature = (this.homeCity['main'].temp - 273.15).toFixed(0);
    localStorage.setItem('deg',JSON.stringify('cel'));
    this.active='active'
    this.active1='no-active'

  }
  far() {
    this.temperature = (((this.homeCity['main'].temp - 273.15)) * (9 / 5) + 32).toFixed(0);
    localStorage.setItem('deg',JSON.stringify('fan'));
    this.active='no-active'
    this.active1='active'
  }

  addToFav() {
    // this.color=='no-color'?this.color='color':this.color='no-color'
    this.color == 'no-color' ? this.color = 'color' : this.color = 'no-color';
    this.text == 'Add to favorite' ? this.text = 'Added to favorite' : this.text = 'Add to favorite';
    this.border == 'favorite_border' ? this.border = "favorite" : this.border = 'favorite_border';

    this.favCity = localStorage.getItem('cityFromApi');
    this.favCity = JSON.parse(this.favCity);

    // console.log(this.favCity);
    if (this.border == 'favorite') {
      this.favList(this.favCity);
    }

    else if (this.border == 'favorite_border') {

      let favs;
      favs = JSON.parse(localStorage.getItem('favCity') as any);
      let current = favs.find((cur: any) => {
        return cur['name'] == this.homeCity['name'];
      })

      favs.splice(favs.indexOf(current), 1);
      localStorage.setItem('favCity', JSON.stringify(favs));
    }
  }
  favList(data: any) {
    let favCityList = [];
    let fl: any;
    if (localStorage.getItem('favCity')) {
      fl = localStorage.getItem('favCity')
      favCityList = JSON.parse(fl);
      favCityList = [data, ...favCityList];
    }
    else {
      favCityList = [data];
    }
    localStorage.setItem('favCity', JSON.stringify(favCityList));
    // console.log(localStorage.getItem('favCity'));  
  }
}
