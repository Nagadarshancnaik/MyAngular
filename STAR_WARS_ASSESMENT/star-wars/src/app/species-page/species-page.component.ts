import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';
let  url = 'https://swapi.dev/api/species/';
@Component({
  selector: 'app-species-page',
  templateUrl: './species-page.component.html',
  styleUrls: ['./species-page.component.css']
})
export class SpeciesPageComponent implements OnInit {
 
  species: any;
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
    this.serveice.getspeciesDetailApi(url).subscribe(data => {
      this.species=data;
      this.load = false;
      this.unload = true
      console.log(this.species);
      if (this.species?.previous === null) {

        this.disableP = 'disable';
  
      } else {
  
        this.disableP = 'enable';
  
      } 
      
    })
  }
  next(url1:any){
    this.serveice.getspeciesDetailApi(this.species.next).subscribe(data=>{
      this.species=data;
      url=url1;
      this.visible(this.species);

    })
  }
  prev(url1:any){
    this.serveice.getspeciesDetailApi(this.species.previous).subscribe(data=>{
      this.species=data;
      url=url1;

      this.visible(this.species);

    })
  }
  character(data:any){
    localStorage.setItem('species',JSON.stringify(this.species.results[data]));
    localStorage.setItem('charId',JSON.stringify(data))
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
