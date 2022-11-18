import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  text1: boolean=false;
  text2: boolean=false;
  text3: boolean=false;
  text4: boolean=false;
  text5: boolean=false;
  text6: boolean=false;

  url1 = 'https://swapi.dev/api/people/';
  constructor(public serveice: StarwarsService) { }


  ngOnInit(): void {
    this.get(this.url1);

  }
  get(url: any) {
    this.serveice.getapi(url).subscribe(data => {
      localStorage.setItem('page1', JSON.stringify(data))
    })
  }
}
