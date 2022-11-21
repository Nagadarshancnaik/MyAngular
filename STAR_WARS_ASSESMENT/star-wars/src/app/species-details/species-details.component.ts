import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-species-details',
  templateUrl: './species-details.component.html',
  styleUrls: ['./species-details.component.css']
})
export class SpeciesDetailsComponent implements OnInit {
  species: any;
id:any;
src:Array<string>=[];
srcArr=['https://starwarsblog.starwars.com/wp-content/uploads/2020/01/215-buckets-list-extra_TALL.jpg',
'https://images.immediate.co.uk/production/volatile/sites/3/2017/12/yoda-the-empire-strikes-back-28a7558.jpg?quality=90&resize=768,574',
'https://static1.srcdn.com/wordpress/wp-content/uploads/2020/03/gamorrean-in-Star-Wars-featured.jpg',
'https://www.denofgeek.com/wp-content/uploads/2016/12/star_wars_races_klatooinian.jpg',
'https://fictionhorizon.com/wp-content/uploads/2022/02/databank_sullustan_01_169_01e4c3e0-1024x512.jpeg',
'https://i.ytimg.com/vi/dgMmBCjIeD8/maxresdefault.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToHJPKXBwpL0W4-l1yxFXOyJb9YVYj4R4FaA&usqp=CAU',
'https://images.squarespace-cdn.com/content/v1/5fbc4a62c2150e62cfcb09aa/e18d3438-9574-46c3-9e2a-65453bcb8346/Hera-mothers-day-tall.jpg',
'https://images.squarespace-cdn.com/content/v1/5fbc4a62c2150e62cfcb09aa/1618093200126-FYG9GYN06BCYQLDEK5NG/Wookiees.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0wACGMEuDTdnxF_ZyvoEc7UoEzNNptAlijfSMqiqmV6KDUPzYGWVvdnbr-blBGPwY0Zw&usqp=CAU'];
  constructor() { }

  ngOnInit(): void {
    this.species=JSON.parse(localStorage.getItem('species')as any);
this.id=JSON.parse(localStorage.getItem('charId')as any)
this.src.push(this.srcArr[this.id])
  }
  getRandomNumber(){
    return (Math.floor(Math.random()*10));
  }

}
