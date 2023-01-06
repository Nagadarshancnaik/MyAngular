import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeServiceService } from '../home-service.service';

@Component({
  selector: 'app-mobile-search',
  templateUrl: './mobile-search.component.html',
  styleUrls: ['./mobile-search.component.css']
})
export class MobileSearchComponent implements OnInit {
  topSearches: any;
  categories: any;
  resultOfCategory: any;

  constructor(private searchService:HomeServiceService,private route: Router) { }
  status:boolean=false;
  showPopup:boolean=false;
  result:boolean=false;
  showTopCat:boolean=true;
  inputValue=''
  searchedResult = false;
  extendSeach = true;
  noMatchField = false;
  topSearchField=true;
  durationArray: any[] = [];
  durationArray1: any[] = [];
  catt: any[] = [];

  ngOnInit(): void {
    this.topSearch();
    this.allCategories();
  }
  mblBack() {
    // this.mblextend = false;
    // this.mblheader = true;
  }
  openMobileFilter() {
    console.log("clicked");
    var blur=document.getElementById('blur');
    blur?.classList.toggle('active')
    this.showPopup=!this.showPopup
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
  clearAll(){
    this.catt=[];
    this.durationArray=[]
    this.durationArray1=[]

    this.status = false;
  }

  topSearch() {
    this.searchService.getTopSearch().subscribe(data => {
      console.log(data, "topSearch");
      this.topSearches = data
    })
  }
  
  allCategories() {
    this.searchService.getCategories().subscribe(data => {
      console.log(data, "categories");
      this.categories = data
    })
  }
  onCategory(cat: any) {
    this.inputValue=cat;
    this.searchService.searchByCategory(cat).subscribe(data => {
      console.log(data, "categorydata");
      this.resultOfCategory = data;
      if (this.resultOfCategory.length === 0) {
        this.extendSeach = true;
        this.topSearchField = false;
        this.noMatchField = true;
        this.searchedResult = false;

      }
      else {
        this.topSearchField = true;
        this.noMatchField = false;
        this.searchedResult = true;
        this.extendSeach = false;
      }
    })
  }
  enterValue(event: any, value: any) {
    this.inputValue=value;
    console.log(this.inputValue);
    
    if (value != '') {
      this.onCategory(value)
    }
    else {
      this.searchedResult = false;
      this.extendSeach = true;
      this.topSearchField=true;
      this.noMatchField=false;
    }
  }
  searchInput() {
    
    if (this.searchedResult == true) {
      this.extendSeach = false;
    }
    else {
      // this.inputValue=""
      this.extendSeach = true;
      this.searchedResult = false;
    }
  }

  onTopSearch(data:any) {
    
    this.inputValue=data;
    this.onCategory(data)

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
  gotoOverview(courseId:any){
    sessionStorage.setItem('courseId', courseId);
    this.route.navigate(['/courseDetails'])
  }


}
