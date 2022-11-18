import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.css']
})
export class CharacterPageComponent implements OnInit {
  page1local: any;

  constructor(public serveice: StarwarsService) { }
// data=[];
  ngOnInit(): void {
    this.page1local=JSON.parse(localStorage.getItem('page1') as any);
    // this.data=this.page1local;
    // console.log(this.data);
    
  }
  next(){
    this.serveice.getapi(this.page1local.next).subscribe(data=>{
      this.page1local=data;
    })
  }
  character(data:any){
    localStorage.setItem('people',JSON.stringify(this.page1local.results[data]));
  }

}
