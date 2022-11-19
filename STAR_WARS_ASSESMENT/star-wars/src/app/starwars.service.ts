import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor(public http: HttpClient) { }

  getCharcterDetailApi(url: any) {
    return this.http.get(url);
  }

  getfilmsDetailApi(url: any) {
    return this.http.get(url);
  }

  getspeciesDetailApi(url: any) {
    return this.http.get(url);
  }
  getplanetsDetailApi(url: any) {
    return this.http.get(url);
  }
  getstarshipsDetailApi(url: any) {
    return this.http.get(url);
  }
  getvehiclesDetailApi(url: any) {
    return this.http.get(url);
  }
}

