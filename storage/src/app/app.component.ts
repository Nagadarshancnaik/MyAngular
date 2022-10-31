import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'storage';
  public user=[{
    name:"Nagadarshan",
    age:23,
    domain:"Angular"
  },{
    name:'Rahul',
    age:22,
    domain:"Angular",
  }]

  getUser:any = {};
  setUsers:any;
  obj1:any;

  arr:any;
  obj2:any;
  ngOnInit(){
      
  this.setUsers=localStorage.setItem("users",JSON.stringify(this.user));
  
  this.setUsers=sessionStorage.setItem("users",JSON.stringify(this.user));



  this.getUser=localStorage.getItem("users");
  this.obj1 = JSON.parse(this.getUser);
  console.log(this.obj1);
  
  // console.log(JSON.parse(this.getUser));

  this.arr=localStorage.getItem("items");
  this.obj2=JSON.parse(this.arr);
  


  }

  

}
