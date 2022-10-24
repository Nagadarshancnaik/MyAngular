import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PIPES';
  name="NAGADARSHAN"
  name2="angular"
  dateEx= Date.now();
  jsonEx= {name:"Nagadarshan",age:22, domain:"angular"}
  currencyEx=100;
  percentEx=0.2991

 employees=[
  {id:1,name:"Nagadarshan",city:"UDUPI",salary:10,dob:new Date("08/22/2022")},
  {id:2,name:"Pooja",city:"BANGALORE",salary:223100,dob:new Date("08/25/2022")},
  {id:3,name:"thanu",city:"mangalore",salary:30000,dob:new Date("08/30/2022")},
  {id:4,name:"nithin",city:"UDUPI",salary:130000,dob:new Date("06/22/2022")},
  {id:5,name:"rahul",city:"delhi",salary:210000,dob:new Date("08/20/2022")},
 ]
}
