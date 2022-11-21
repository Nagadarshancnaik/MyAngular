import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planets-details',
  templateUrl: './planets-details.component.html',
  styleUrls: ['./planets-details.component.css']
})
export class PlanetsDetailsComponent implements OnInit {
  planets: any;
  id:any;
  src:Array<string>=[];
  srcArr=['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYPqwD6VrM3TzRlS3R8KYUCu4af_4bAhWaHQ&usqp=CAU',
'https://www.denofgeek.com/wp-content/uploads/2021/04/star-wars-bespin-cloud-city.jpg?resize=1024,577',
'https://images.livemint.com/img/2022/05/07/600x338/SPACE-SCIENCE-PLUTO-VOLCANO-1_1651908123702_1651908150385.jpg',
'https://cdn.hswstatic.com/gif/play/833c1806-d792-4c3d-8218-a6c8ab185841-1920-1080.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyp7eS6n5bG5j7rk21IO5zpPHZjYKvhDtEZw&usqp=CAU',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJhQye-XSZvhw2EyPPegQEulWXsxbR3QS6Zg&usqp=CAU',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDUoU51GRIdBv-UV6i52usYAjMMarSZ-Vsjg&usqp=CAU',
'https://img5.goodfon.com/wallpaper/nbig/1/11/planeta-zvezdy-kosmos-prostranstvo.jpg',
'https://citi.io/wp-content/uploads/2022/05/star-wars-planet-coruscant.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ_GzsckfrlktEyCUeAne2mmFf8uLtWGHaag&usqp=CAU'];
  constructor() { }

  ngOnInit(): void {
    this.planets=JSON.parse(localStorage.getItem('planets')as any);
    this.id=JSON.parse(localStorage.getItem('planetId')as any)
    this.src.push(this.srcArr[this.id])
  }

}
