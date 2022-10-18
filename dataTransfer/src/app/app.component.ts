import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dataTransfer';



public parentName:any;
public parentMark:any;
// parent to child
  transferData(name:any,mark:any){
    this.parentName=name;
    this.parentMark=mark;
  }

// child to parent
  titleChange(newTitle:any){
    this.title=newTitle; 
  }
}
