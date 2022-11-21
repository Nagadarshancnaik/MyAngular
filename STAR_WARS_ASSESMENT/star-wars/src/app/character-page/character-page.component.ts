import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';
let url = 'https://swapi.dev/api/people/';
@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.css']
})

export class CharacterPageComponent implements OnInit {
  page1local: any;
  people: any;
  disableP = '';
  disableN = '';
 



  load = true;
  unload = false;
  
  constructor(public serveice: StarwarsService) { }

  ngOnInit(): void {
    this.get(url);
    // this.disableP = 'disable';
    // this.disableN = 'enable';
   
  
    // this.people=JSON.parse(sessionStorage.getItem('character')as any)
  }

  get(url: any) {
    this.serveice.getCharcterDetailApi(url).subscribe(data => {
      this.people=data;
      this.load = false;
      this.unload = true;
      console.log(this.people);
      if (this.people?.previous === null) {

        this.disableP = 'disable';
  
      } else {
  
        this.disableP = 'enable';
  
      }  
      
    })
 
  }


  next(url1:any){
 
    this.serveice.getCharcterDetailApi(this.people.next).subscribe(data=>{
      this.people=data;
      url=url1;
      // sessionStorage.setItem('character',JSON.stringify(this.people))
      this.visible(this.people);
      console.log(this.people);

    })
  }



  prev(url1:any){

    this.serveice.getCharcterDetailApi(this.people.previous).subscribe(data=>{
      this.people=data;
      url=url1;
      this.visible(this.people);
      // sessionStorage.setItem('character',JSON.stringify(this.people))
      console.log(this.people);

    })
  }



  character(data:any){
    localStorage.setItem('people',JSON.stringify(this.people.results[data]));
    localStorage.setItem('peopleId',JSON.stringify(data))

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
