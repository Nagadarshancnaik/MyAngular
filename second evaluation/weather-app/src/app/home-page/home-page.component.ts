import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  homeCity: any;
  text: string = 'Add to favorite';
  color = 'no-color';
  border = 'favorite_border';
  favCity:any;
  constructor() { }

  ngOnInit(): void {
    this.homeCity=localStorage.getItem('cityFromApi');
    this.homeCity=JSON.parse(this.homeCity);
    // console.log(this.homeCity);
    // console.log(this.homeCity);

    
  }
  addToFav(){
    // this.color=='no-color'?this.color='color':this.color='no-color'
    this.color == 'no-color' ? this.color = 'color' : this.color = 'no-color';
    this.text == 'Add to favorite' ? this.text = 'Added to favorite' : this.text = 'Add to favorite';
    this.border == 'favorite_border' ? this.border = "favorite" : this.border = 'favorite_border';

    this.favCity=localStorage.getItem('cityFromApi');
    this.favCity=JSON.parse(this.favCity);
    // console.log(this.favCity);
    this.favList(this.favCity);
  }
  favList(data:any){
    let favCityList=[];
    let fl:any;
    if(localStorage.getItem('favCity')){
      fl=localStorage.getItem('favCity')
      favCityList=JSON.parse(fl);
      favCityList=[data,...favCityList];
    }
    else{
      favCityList=[data];
    }
    localStorage.setItem('favCity',JSON.stringify(favCityList));
    // console.log(localStorage.getItem('favCity'));  
  }
}
