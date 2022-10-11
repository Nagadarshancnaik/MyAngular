import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TDF';
  defaultCountry="india"
  firstName="";
  lastName="";
  onSubmit(form:NgForm){
    console.log(form);
    // alert("Form is submitted")
  }
 
}











