import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicles-details',
  templateUrl: './vehicles-details.component.html',
  styleUrls: ['./vehicles-details.component.css']
})
export class VehiclesDetailsComponent implements OnInit {
  vehicles: any;
  id:any;
  src:Array<string>=[];
  srcArr=['https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/7/7f/Vehicles.png',
  'data:image/jpeg;base64,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',
  'data:image/jpeg;base64,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',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzWjR0Q9c7jMVXDQwUhALvMpx2-UTyPZZd7g&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe6eNKc3TucfWlI45nlNqQcQzBBvtqoVRt1g&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAeofDtBl7uXddvwPNIq-ok_KEBUaIE5tupw&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9UBKzLpnr20aNnB4-FMXI4nPYZrDe0jpAgQ&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfwBqJQ1xwgrul2jkHrg26yl5UGzLedGaPfQ&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3MinM9J7AdCY8gX1RiRUWYjS5ZW130Krxag&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnrzwfdEHJuqaU618qimJ4yZH_lJlKen4LXw&usqp=CAU'];
  constructor() { }

  ngOnInit(): void {
    this.vehicles=JSON.parse(localStorage.getItem('vehicles')as any);
    this.id=JSON.parse(localStorage.getItem('vehicleId')as any)
    this.src.push(this.srcArr[this.id])
  }

}