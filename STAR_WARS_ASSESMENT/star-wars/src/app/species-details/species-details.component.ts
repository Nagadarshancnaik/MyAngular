import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-species-details',
  templateUrl: './species-details.component.html',
  styleUrls: ['./species-details.component.css']
})
export class SpeciesDetailsComponent implements OnInit {
  species: any;

  constructor() { }

  ngOnInit(): void {
    this.species=JSON.parse(localStorage.getItem('species')as any);

  }

}
