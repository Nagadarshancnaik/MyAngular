import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';
let  url = 'https://swapi.dev/api/starships/';
  
@Component({
  selector: 'app-starship-page',
  templateUrl: './starship-page.component.html',
  styleUrls: ['./starship-page.component.css']
})
export class StarshipPageComponent implements OnInit {
  starships: any;
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
    this.serveice.getstarshipsDetailApi(url).subscribe(data => {
      this.starships=data;
      this.load = false;
      this.unload = true;
      console.log(this.starships);
      if (this.starships?.previous === null) {

        this.disableP = 'disable';
  
      } else {
  
        this.disableP = 'enable';
  
      }
    })
  }

  next(url1:any){
    this.serveice.getstarshipsDetailApi(this.starships.next).subscribe(data=>{
      this.starships=data;
      url=url1;
      this.visible(this.starships);

    })
  }



  prev(url1:any){
    this.serveice.getstarshipsDetailApi(this.starships.previous).subscribe(data=>{
      this.starships=data;
      url=url1;

      this.visible(this.starships);

    })
  }



  character(data:any){
    localStorage.setItem('starships',JSON.stringify(this.starships.results[data]));
    localStorage.setItem('starId',JSON.stringify(data))

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
