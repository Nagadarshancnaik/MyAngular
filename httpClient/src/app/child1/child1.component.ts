import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  users:any;
  constructor(private htttpService:HttpService) { }
body:any;
  ngOnInit(): void {
    
    //get method
    this.htttpService.getUser().subscribe(data=>{
      this.users=data;
    })

//post method
    this.htttpService.addUser().subscribe(data=>{
      console.log(data)
      this.body=data;
    },(err)=>{
      console.log("error exist"+err);
      
    })

  /* post method 2
    this.htttpService.addUser();
  */  



    //put Method
    this.htttpService.updateUser().subscribe(data=>{
      console.log(data);
    },(err)=>{
      console.log("error occured"+err);
      
    })
  

    // delete method
   this.htttpService.deleteUser().subscribe(data=>{
    console.log("deleted successfully"+data);
    
   },(err)=>{
    console.log("error found"+err);
    
   })

  }


}
