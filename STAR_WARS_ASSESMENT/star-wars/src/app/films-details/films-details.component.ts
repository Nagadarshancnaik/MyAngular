import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';

@Component({
  selector: 'app-films-details',
  templateUrl: './films-details.component.html',
  styleUrls: ['./films-details.component.css']
})
export class FilmsDetailsComponent implements OnInit {
  films: any;
  url = 'https://swapi.dev/api/films/';

  constructor(public serveice: StarwarsService) { }

  ngOnInit(): void {
    this.films=JSON.parse(localStorage.getItem('films')as any);
    
  }

  

}

