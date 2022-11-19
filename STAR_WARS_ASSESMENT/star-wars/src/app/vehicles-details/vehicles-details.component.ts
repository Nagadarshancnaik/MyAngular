import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicles-details',
  templateUrl: './vehicles-details.component.html',
  styleUrls: ['./vehicles-details.component.css']
})
export class VehiclesDetailsComponent implements OnInit {
  vehicles: any;

  constructor() { }

  ngOnInit(): void {
    this.vehicles=JSON.parse(localStorage.getItem('vehicles')as any);

  }

}
