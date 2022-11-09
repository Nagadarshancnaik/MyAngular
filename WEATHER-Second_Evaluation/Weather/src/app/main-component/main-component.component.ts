import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
date:any;
city:any;
  cityName='udupi';
  cityWeather:any;
  constructor(public http:HttpClient,public weatherservice:WeatherService) { 
    // this.searchData();
  }

  ngOnInit(): void {
    this.date=new Date();
    this.cityWeather=localStorage.getItem("cityWeather");
    this.cityWeather=JSON.parse(this.cityWeather);
    console.log(this.cityWeather);
    
  }
// searchData(){
//   this.http.get(`${API_URL}/weather?q=${this.cityName}&appid=${API_KEY}`).subscribe(result=>{
//     console.log(result);
//   })
// }

onSearch(data:any){
  // console.log("clicked");
  
  this.weatherservice.getFromApi(data).subscribe(value=>{
    // console.log(value); 
    localStorage.setItem("cityWeather",(JSON.stringify(value)));
  window.location.reload();
    // this.city=this.cityWeather.name;
    // console.log(this.city);
    
  });
}
}
