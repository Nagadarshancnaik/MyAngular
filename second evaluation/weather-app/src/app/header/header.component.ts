import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  date: any;
  active = 'active';
  cityDetails: any;
  menuVariable: boolean = false;
  hamburger_icon_variable: boolean = false;
  constructor(public weatherservice: WeatherService) { }

  ngOnInit(): void {
    this.date = new Date();
  }

  openMenu() {
    this.menuVariable = !this.menuVariable;
    this.hamburger_icon_variable = !this.hamburger_icon_variable;
  }
  searchCity(city: any) {
    this.weatherservice.getApiData(city).subscribe(value => {
      this.cityDetails = value;
      // console.log(this.cityDetails);
      localStorage.setItem('cityFromApi', JSON.stringify(this.cityDetails));

      this.recentList(this.cityDetails);
    window.location.reload();
    });
  }
  


  recentList(data: any) {
    // console.log(data);

    let recentCityList = [];
    let fl: any;
    if (localStorage.getItem('recentcity')) {
      fl = localStorage.getItem('recentcity')
      recentCityList = JSON.parse(fl);
      recentCityList = [data, ...recentCityList];
    }

    else {
      recentCityList = [data];
    }

    localStorage.setItem('recentcity', JSON.stringify(recentCityList))
  }
}
