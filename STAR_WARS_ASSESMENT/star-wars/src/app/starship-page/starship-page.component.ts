import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';

@Component({
  selector: 'app-starship-page',
  templateUrl: './starship-page.component.html',
  styleUrls: ['./starship-page.component.css']
})
export class StarshipPageComponent implements OnInit {
  url = 'https://swapi.dev/api/starships/';
  starships: any;

  constructor(public serveice: StarwarsService) { }

  ngOnInit(): void {
    this.get(this.url);

  }
  get(url: any) {
    this.serveice.getstarshipsDetailApi(url).subscribe(data => {
      this.starships=data;
      console.log(this.starships);
      
    })
  }

  next(){
    this.serveice.getstarshipsDetailApi(this.starships.next).subscribe(data=>{
      this.starships=data;
    })
  }



  prev(){
    this.serveice.getstarshipsDetailApi(this.starships.previous).subscribe(data=>{
      this.starships=data;
    })
  }



  character(data:any){
    localStorage.setItem('starships',JSON.stringify(this.starships.results[data]));
  }

}
