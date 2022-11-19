import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';

@Component({
  selector: 'app-planets-page',
  templateUrl: './planets-page.component.html',
  styleUrls: ['./planets-page.component.css']
})
export class PlanetsPageComponent implements OnInit {
  url = 'https://swapi.dev/api/planets/';
  planets: any;

  constructor(public serveice: StarwarsService) { }

  ngOnInit(): void {
    this.get(this.url);

  }
  get(url: any) {
    this.serveice.getCharcterDetailApi(url).subscribe(data => {
      this.planets=data;
      console.log(this.planets);
      
    })
  }
  next(){
    this.serveice.getCharcterDetailApi(this.planets.next).subscribe(data=>{
      this.planets=data;
    })
  }



  prev(){
    this.serveice.getCharcterDetailApi(this.planets.previous).subscribe(data=>{
      this.planets=data;
    })
  }



  character(data:any){
    localStorage.setItem('planets',JSON.stringify(this.planets.results[data]));
  }

}
