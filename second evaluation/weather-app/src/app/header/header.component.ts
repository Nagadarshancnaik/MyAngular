import { AnimateTimings } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Router } from '@angular/router';

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
  weatherIcon: any;
  constructor(public weatherservice: WeatherService, private router: Router) { }

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
      this.refresh();
      this.router.navigate(['home']);

    });
  }

  recentList(data: any) {
    let recentCityList = [];
    let fl: any;
    const toIndex = 0;

    
    if (localStorage.getItem('recentcity')) {
      fl = localStorage.getItem('recentcity')
      recentCityList = JSON.parse(fl);

      let current = recentCityList.find((cur:any)=>{
        return cur['name'] == data['name'];
      })

      if(current == undefined){
        recentCityList = [data, ...recentCityList];
      } else{
        let fromIndex = recentCityList.indexOf(current); 
        let element = recentCityList.splice(fromIndex,1)[0];
        recentCityList.splice(toIndex,0,element);
      }
    }

    else {
      recentCityList = [data];
    }

    localStorage.setItem('recentcity', JSON.stringify(recentCityList))
  }

  enterSubmit(event: any, city: any) {
    if (event.keyCode === 13) {
      this.searchCity(city);
    }
  }

  refresh() {
    this.router.navigate(['home'])
      .then(() => {
        window.location.reload();
      });
  }
}
