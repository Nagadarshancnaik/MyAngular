import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FilterDialogComponent } from '../filter-dialog/filter-dialog.component';
import { HomeServiceService } from '../home-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showFilter = false;
  showCross = false;
  showSetting = true;
  extendSeach = false;
  showIcon = false;
  showleftIcon = true;
  searchedResult = false;
  topSearches: any;
  categories: any;
  resultOfCategory: any;
  topSearchField = true;
  noMatchField = false;
  inputValue = '';
  constructor(public dialog: MatDialog, private searchService: HomeServiceService,private route: Router) { }

  ngOnInit(): void {
    this.topSearch();
    this.allCategories();
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
    this.inputValue = cat;
    this.searchService.searchByCategory(cat).subscribe(data => {
      console.log(data, "categorydata");
      this.resultOfCategory = data
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

  searchInput() {
    
    if (this.searchedResult == true) {
      this.extendSeach = false;
    }
    else {
      // this.inputValue=""
      this.showFilter = true;
      this.showCross = true;
      this.showSetting = false;
      this.extendSeach = true;
      this.showIcon = true;
      this.showleftIcon = false;

      this.searchedResult = false;
    }
  }
  onCross() {
    this.showFilter = false;
    this.showCross = false;
    this.showSetting = true;
    this.extendSeach = false;
    this.showIcon = false;
    this.showleftIcon = true;
    this.searchedResult = false;

  }
  openFilter() {
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      height: '600px',
      width: '1000px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onTopSearch(data:any) {
    
    this.inputValue=data;
    this.onCategory(data)

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
  gotoOverview(courseId:any){
    sessionStorage.setItem('courseId', courseId);
    this.route.navigate(['/courseDetails'])
  }
}


