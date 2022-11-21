import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';
let  url = 'https://swapi.dev/api/vehicles/';

@Component({
  selector: 'app-vehicles-page',
  templateUrl: './vehicles-page.component.html',
  styleUrls: ['./vehicles-page.component.css']
})
export class VehiclesPageComponent implements OnInit {
  vehicles: any;
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
    this.serveice.getvehiclesDetailApi(url).subscribe(data => {
      this.vehicles=data;
      this.load = false;
      this.unload = true;
      console.log(this.vehicles);
      if (this.vehicles?.previous === null) {

        this.disableP = 'disable';
  
      } else {
  
        this.disableP = 'enable';
  
      }  
      
    })
  }


  next(url1:any){
    this.serveice.getvehiclesDetailApi(this.vehicles.next).subscribe(data=>{
      this.vehicles=data;
      url=url1;
      this.visible(this.vehicles);

    })
  }



  prev(url1:any){
    this.serveice.getvehiclesDetailApi(this.vehicles.previous).subscribe(data=>{
      this.vehicles=data;
      url=url1;

      this.visible(this.vehicles);

    })
  }



  character(data:any){
    localStorage.setItem('vehicles',JSON.stringify(this.vehicles.results[data]));
    localStorage.setItem('vehicleId',JSON.stringify(data))

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
