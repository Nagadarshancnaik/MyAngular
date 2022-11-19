import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';

@Component({
  selector: 'app-vehicles-page',
  templateUrl: './vehicles-page.component.html',
  styleUrls: ['./vehicles-page.component.css']
})
export class VehiclesPageComponent implements OnInit {
  url = 'https://swapi.dev/api/vehicles/';
  vehicles: any;

  constructor(public serveice: StarwarsService) { }

  ngOnInit(): void {
    this.get(this.url);

  }
  get(url: any) {
    this.serveice.getvehiclesDetailApi(url).subscribe(data => {
      this.vehicles=data;
      console.log(this.vehicles);
      
    })
  }


  next(){
    this.serveice.getvehiclesDetailApi(this.vehicles.next).subscribe(data=>{
      this.vehicles=data;
    })
  }



  prev(){
    this.serveice.getvehiclesDetailApi(this.vehicles.previous).subscribe(data=>{
      this.vehicles=data;
    })
  }



  character(data:any){
    localStorage.setItem('vehicles',JSON.stringify(this.vehicles.results[data]));
  }

}
