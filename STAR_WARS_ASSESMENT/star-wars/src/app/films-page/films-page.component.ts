import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';

@Component({
  selector: 'app-films-page',
  templateUrl: './films-page.component.html',
  styleUrls: ['./films-page.component.css']
})
export class FilmsPageComponent implements OnInit {
  films: any;
  url = 'https://swapi.dev/api/films/';

  load = true;
  unload = false;
  constructor(public serveice: StarwarsService) { }

  ngOnInit(): void {
    this.get(this.url);

  }
  get(url: any) {
    this.serveice.getfilmsDetailApi(url).subscribe(data => {
      this.films=data;
      this.load = false;
      this.unload = true;
      console.log(this.films);
      
    })
  }

  next(){
    this.serveice.getfilmsDetailApi(this.films.next).subscribe(data=>{
      this.films=data;
    })
  }



  prev(){
    this.serveice.getfilmsDetailApi(this.films.previous).subscribe(data=>{
      this.films=data;
    })
  }



  character(data:any){
    localStorage.setItem('films',JSON.stringify(this.films.results[data]));
  }
}
