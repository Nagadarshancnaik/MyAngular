import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,ParamMap} from '@angular/router'
@Component({
  selector: 'app-department-list',
  template: `
    <p>
      department-list works!
    </p>
    <h3>department list</h3>
              <ul class="items">
                <li (click)="onSelect(department)" [class.selected]="isSelect(department)" *ngFor="let department of departments">
                  <span> {{department.id}}</span> {{department.name}}
                </li>

              </ul>
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {
  public selectedId:any;
  departments=[
    {"id":1,"name":"Angular"},
    {"id":2,"name":"React js"},
    {"id":3,"name":"js"},
    {"id":4,"name":"bootstrap"},
  ]
  constructor(private router: Router ,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=params.get('id');
      this.selectedId=id;

    });
  }
  onSelect(department:any){
    // this.router.navigate(['/department',department.id])  //this is absolute navigation
    this.router.navigate([department.id],{relativeTo: this.route})    //relative navigation
  }

  isSelect(department:any){
    return department.id===parseInt(this.selectedId)
  }

}
