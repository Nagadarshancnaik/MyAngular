import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
  <h3> Selected id is {{departmentId}} </h3>  
  <p>
    <button (click)="showOverview()">overview</button>
    <button (click)="showContact()">contact</button>

  </p>
  <router-outlet></router-outlet>
    <button (click)="goPrevious()">Previous</button>
    <button (click)="goNext()">Next</button> 
    <br>
    <button (click)="goBack()">Back</button>

 
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {
// public id1:any;
// public name:any;
public departmentId:any;
  constructor(private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params:ParamMap)=>{
      // let id=params.get("id");
      // this.id1=id;

      // let name=params.get("name");
      // this.name=name;

      let id=params.get('id');
      this.departmentId=id;

    });
  }

  goPrevious(){
      let previousId=parseInt(this.departmentId)-1;
      this.router.navigate(['/department',previousId])
  }


  goNext() {
    let nextId=parseInt(this.departmentId)+1;
    this.router.navigate(['/department',nextId])
  }

  goBack(){
    let selectedId=this.departmentId?this.departmentId:null;
    // this.router.navigate(['department',{id: selectedId}])   //this is absolute navigation
    this.router.navigate(['../',{id: selectedId}],{relativeTo:this.route})   //  (../)   means one segment back in the url
  }

  showOverview(){
    this.router.navigate(['overview'],{relativeTo:this.route});
  }

  showContact(){
    this.router.navigate(['contact'],{relativeTo:this.route});
  }


}
