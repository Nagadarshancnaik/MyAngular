import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from '../home-service.service';

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.css']
})
export class FilterDialogComponent implements OnInit {
  status: boolean = false;
  durationArray: any[] = [];
  durationArray1: any[] = [];
  catt: any[] = [];

  categories: any;

  constructor(private homeService: HomeServiceService) { }

  ngOnInit(): void {
    this.allCategories()

  }
  onClick(cat: any, index: any) {
    if(this.catt.includes(cat)){
      let index=this.catt.indexOf(cat)
      this.catt.splice(index,1)
    }
    else{
      this.catt.push(cat);
      console.log(this.catt);
    }
   

    this.status = !this.status;
  }
  clearAll() {
    this.catt=[];
    this.durationArray=[]
    this.durationArray1=[]

    this.status = false;
  }

  duration(a: any, b: any) {
    if( this.durationArray.includes(b) || this.durationArray1.includes(a) ){
      let index=this.durationArray1.indexOf(a)
      this.durationArray1.splice(index,1)
      let index1=this.durationArray.indexOf(b)
      this.durationArray.splice(index1,1)
    }
    else{
    this.durationArray1.push(a)
    console.log(this.durationArray1, "subArray");
    this.durationArray.push(b)
  }
  }

  allCategories() {
    this.homeService.getCategories().subscribe(data => {
      console.log(data, "categories");
      this.categories = data
    })
  }
}

