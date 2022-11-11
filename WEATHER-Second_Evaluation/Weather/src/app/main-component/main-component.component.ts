import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NEVER } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherService } from '../weather.service';

const API_URL=environment.API_URL;
const API_KEY=environment.API_KEY;

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  text: string = 'Add to favorite';
  color = 'no-color';
  border = 'favorite_border';
date:any;
city:any;
favcity:any;
  cityName='udupi';
  routerUrl!: string;
  cityWeather:any;
  active='active';
  temperature:any;
  // isFav:Boolean;
  // const result: string[]
  detail:any;
  favCityArray :any[]=[];
  recentlySerached :any[]=[];
  constructor(public http:HttpClient,public weatherservice:WeatherService, public router: Router) { 
    // this.searchData();
  }

  ngOnInit(): void {
    this.date=new Date();
    
    this.cityWeather=localStorage.getItem("cityWeather");
    this.cityWeather=JSON.parse(this.cityWeather);
    // console.log(this.cityWeather);
    this.favCityArray = JSON.parse((localStorage.getItem('cityData') || '[]'));
    this.recentlySerached = JSON.parse((localStorage.getItem('recentlySerached') || '[]'))
    this.temperature=(this.cityWeather['main'].temp -273.15).toFixed(0);
    this.routerUrl = this.router.url;
  }
// searchData(){
//   this.http.get(`${API_URL}/weather?q=${this.cityName}&appid=${API_KEY}`).subscribe(result=>{
//     console.log(result);
//   })
// }

onSearch(data:any){
  // console.log("clicked");
  
  this.weatherservice.getFromApi(data).subscribe(data=>{
    // data('isFav')=false;
    this.detail=data;
    localStorage.setItem("cityWeather",(JSON.stringify(data)));
    console.log(data); 

    let recent = JSON.parse(localStorage.getItem('recentlySerached') || '{}');
    this.recentlySerached.push(data);

    if (recent.length < 5) {
      localStorage.setItem('recentlySerached', JSON.stringify(this.recentlySerached));
    }

    
  window.location.reload();
    // this.city=this.cityWeather.name;
    // console.log(this.city);
    this.cityWeather = JSON.parse((localStorage.getItem('weatherDetail') || '{}'));
    // console.log(this.cityWeather);
    // console.log("cityarray....................", this.favCityArray)
  },err => {
    console.log(err)
    alert('Enter city data is not available, please try with different city...')
  });
}


cel(){
  this.temperature=(this.cityWeather['main'].temp -273.15).toFixed(0)
}
far(){
  this.temperature=(this.cityWeather['main'].temp).toFixed(0)
}

addFav(){
  this.color == 'no-color' ? this.color = 'color' : this.color = 'no-color';
    this.text == 'Add to favorite' ? this.text = 'Added to favorite' : this.text = 'Add to favorite';
    this.border == 'favorite_border' ? this.border = "favorite" : this.border = 'favorite_border';
  // console.log(!data.isFav);
  // data.isFav = !data.isFav;
  // data['isFav'] = !data.isFav;
  // console.log(data);
  // localStorage.setItem('weatherDetail', JSON.stringify(data));
  // this.favCityArray.push(data);
  // console.log(this.favCityArray);
  // localStorage.setItem('cityData', JSON.stringify(this.favCityArray));  //fav DATA
  this.favcity=localStorage.getItem('cityWeather')
  this.favcity=JSON.parse(this.favcity)
  console.log(this.favcity);
  
this.addTofav(this.favcity);
}



addTofav(data:any){
  let favCities = [];
  let fc: any;
  if (localStorage.getItem('FavCities')) {
    fc = localStorage.getItem('FavCities')
    favCities = JSON.parse(fc);
    favCities = [data, ...favCities];
  }
  else {
    favCities = [data];
  }
  localStorage.setItem('FavCities', JSON.stringify(favCities));
}

addTosearch(){
  
}
}
