import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.css']
})
export class CharacterPageComponent implements OnInit {
  page1local: any;
  url = 'https://swapi.dev/api/people/';
  people: any;

  constructor(public serveice: StarwarsService) { }

  ngOnInit(): void {
    this.get(this.url);
  }

  get(url: any) {
    this.serveice.getCharcterDetailApi(url).subscribe(data => {
      this.people=data;
      console.log(this.people);
      
    })
  }


  next(){
    this.serveice.getCharcterDetailApi(this.people.next).subscribe(data=>{
      this.people=data;
    })
  }



  prev(){
    this.serveice.getCharcterDetailApi(this.people.previous).subscribe(data=>{
      this.people=data;
    })
  }



  character(data:any){
    localStorage.setItem('people',JSON.stringify(this.people.results[data]));
  }

}
