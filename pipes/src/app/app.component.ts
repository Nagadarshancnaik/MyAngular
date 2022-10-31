import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inbuilt pipes';
  title2 = 'custom pipes';

  name="NAGADARSHAN"
  name2="angular"
  dateEx= Date.now();
  jsonEx= {name:"Nagadarshan",age:22, domain:"angular"}
  currencyEx=100;
  percentEx=0.2991

 employees=[
  {id:1,name:"Nagadarshan",city:"UDUPI",salary:10,doj:new Date("08/22/2020")},
  {id:2,name:"Pooja",city:"BANGALORE",salary:223100,doj:new Date("08/25/2019")},
  {id:3,name:"thanu",city:"mangalore",salary:30000,doj:new Date("08/30/2020")},
  {id:4,name:"nithin",city:"UDUPI",salary:130000,doj:new Date("06/22/2021")},
  {id:5,name:"rahul",city:"delhi",salary:210000,doj:new Date("08/20/2015")},
 ];
public userName:String|undefined;
 reverse(name:any){
    this.userName=name;
 }
}
