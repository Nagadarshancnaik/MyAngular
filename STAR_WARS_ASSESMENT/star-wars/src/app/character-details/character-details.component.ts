import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  people: any;

  constructor() { }

  ngOnInit(): void {
    this.people=JSON.parse(localStorage.getItem('people')as any);
  }

}
