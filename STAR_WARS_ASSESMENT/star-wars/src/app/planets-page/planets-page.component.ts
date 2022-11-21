import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';
let url = 'https://swapi.dev/api/planets/';
  
@Component({
  selector: 'app-planets-page',
  templateUrl: './planets-page.component.html',
  styleUrls: ['./planets-page.component.css']
})
export class PlanetsPageComponent implements OnInit {
  planets: any;
  disableP = '';
  disableN = '';
  load = true;
  unload = false;
  constructor(public serveice: StarwarsService) { }

  ngOnInit(): void {
    this.get(url);
    // this.disableP = 'disable';
    // this.disableN = 'enable';

  }
  get(url: any) {
    this.serveice.getCharcterDetailApi(url).subscribe(data => {
      this.planets=data;
      this.load = false;
      this.unload = true;
      console.log(this.planets);
      if (this.planets?.previous === null) {

        this.disableP = 'disable';
  
      } else {
  
        this.disableP = 'enable';
  
      } 
      
    })
  }
  next(url1:any){
    this.serveice.getCharcterDetailApi(this.planets.next).subscribe(data=>{
      this.planets=data;
      url=url1;
      this.visible(this.planets);

    })
  }



  prev(url1:any){
    this.serveice.getCharcterDetailApi(this.planets.previous).subscribe(data=>{
      this.planets=data;
      url=url1;

      this.visible(this.planets);

    })
  }



  character(data:any){
    localStorage.setItem('planets',JSON.stringify(this.planets.results[data]));
    localStorage.setItem('planetId',JSON.stringify(data))

  }
  visible(data: any) {

    if (data?.previous === null) {

      this.disableP = 'disable';

    } else {

      this.disableP = 'enable';

    }

    if (data?.next === null) {

      this.disableN = 'disable';

    } else {

      this.disableN = 'enable';

    }

  }

}
