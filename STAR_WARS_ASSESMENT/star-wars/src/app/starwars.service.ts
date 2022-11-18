import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor(public http:HttpClient) { }

  getapi(url:any){
  return this.http.get(url);
  }
}

