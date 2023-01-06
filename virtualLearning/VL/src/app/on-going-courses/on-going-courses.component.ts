import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeServiceService } from '../home-service.service';

@Component({
  selector: 'app-on-going-courses',
  templateUrl: './on-going-courses.component.html',
  styleUrls: ['./on-going-courses.component.css']
})
export class OnGoingCoursesComponent implements OnInit {
act1='act';
act2='no-act';
  allOngoingCourse: any;

  constructor(private onService:HomeServiceService,private route: Router) { }

  ngOnInit(): void {
    this.onService.getAllOngoingCourses().subscribe(data=>{
      console.log(data,"allOngoing");
      this.allOngoingCourse=data;
    })
  }
  ongoing(){
this.act1='act';
this.act2='no-act'
  }
  completed(){
    this.act1='no-act';
    this.act2='act'
  }
  goToOverview(courseId: any) {
    sessionStorage.setItem('courseId', courseId);
    this.route.navigate(['/courseDetails'])
  }

}
