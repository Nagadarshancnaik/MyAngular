import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const API_URL=environment.API_URL;
const API_KEY=environment.API_KEY;
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(public http:HttpClient) { }

  getFromApi(data:any){
    // console.log(data);
    
    return this.http.get(`${API_URL}/weather?q=${data}&appid=${API_KEY}`);
  }
}
