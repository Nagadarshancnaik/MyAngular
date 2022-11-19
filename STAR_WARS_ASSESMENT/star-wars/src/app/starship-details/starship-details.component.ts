import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.css']
})
export class StarshipDetailsComponent implements OnInit {
  starships: any;

  constructor() { }

  ngOnInit(): void {
    this.starships=JSON.parse(localStorage.getItem('starships')as any);

  }

}
