import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planets-details',
  templateUrl: './planets-details.component.html',
  styleUrls: ['./planets-details.component.css']
})
export class PlanetsDetailsComponent implements OnInit {
  planets: any;

  constructor() { }

  ngOnInit(): void {
    this.planets=JSON.parse(localStorage.getItem('planets')as any);

  }

}
