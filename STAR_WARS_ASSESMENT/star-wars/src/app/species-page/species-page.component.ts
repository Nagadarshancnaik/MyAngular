import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';

@Component({
  selector: 'app-species-page',
  templateUrl: './species-page.component.html',
  styleUrls: ['./species-page.component.css']
})
export class SpeciesPageComponent implements OnInit {
  url = 'https://swapi.dev/api/species/';
  species: any;

  constructor(public serveice: StarwarsService) { }

  ngOnInit(): void {
    this.get(this.url);

  }
  get(url: any) {
    this.serveice.getspeciesDetailApi(url).subscribe(data => {
      this.species=data;
      console.log(this.species);
      
    })
  }
  next(){
    this.serveice.getspeciesDetailApi(this.species.next).subscribe(data=>{
      this.species=data;
    })
  }
  prev(){
    this.serveice.getspeciesDetailApi(this.species.previous).subscribe(data=>{
      this.species=data;
    })
  }
  character(data:any){
    localStorage.setItem('species',JSON.stringify(this.species.results[data]));
  }


}
