import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeServiceService } from '../home-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  courseType = 'All';
  couseTypeDetails: any;
  banners: any;
  ongoing: any;
  topBusiness: any;
  topDesign: any
  duaration: any;
  duaration1: any;
  act1 = 'active';
  act2 = 'no-active';
  act3 = 'no-active';
  categories: any;
  name: any;
  a1 = 'dark-dot'
  a2 = 'dot'
  a3 = 'dot'
  page = 1
  constructor(private homeService: HomeServiceService, private route: Router) { }

  ngOnInit(): void {
    localStorage.setItem('token', JSON.stringify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzljMzM5NDE3NTM4ZjAwYmIxNGZjNmMiLCJpYXQiOjE2NzIyMTA4MzMsImV4cCI6MTY3MjI5NzIzM30.UxovHBxAYcJVIImi88XSOimguwMRFU6QKcwFQG3Nfko'))
    this.getBanners(this.page)
    this.getCource(this.courseType);
    this.onGoingCourses();
    this.topCoursesBusiness();
    this.topCoursesDesign();
    this.allCategories()
    this.takeName();
  }
  takeName() {
    this.homeService.getName().subscribe(data => {
      this.name = data;
      console.log(this.name, "user");

    })
  }

  getCource(type: any) {
    console.log(type, "service");
    this.homeService.getCourseByType(type).subscribe(data => {
      console.log(data, "typess");
      this.couseTypeDetails = data
    })
  }

  getBanners(page: any) {
    this.homeService.getBannersService(page).subscribe(data => {
      console.log(data, "banners");
      this.banners = data
    })
  }
  onGoingCourses() {
    this.homeService.getOnGoingCourses().subscribe(data => {
      console.log(data, "ongoing");
      this.ongoing = data
    })
  }
  topCoursesBusiness() {
    this.homeService.getTopCoursesBusiness().subscribe(data => {
      this.topBusiness = data;
      console.log(this.topBusiness, "business");

    })
  }

  topCoursesDesign() {
    this.homeService.getTopCoursesDesign().subscribe(data => {
      this.topDesign = data;
      console.log(this.topDesign, 'design');
    })
  }

  lessonDuration(time: any) {
    this.duaration = time / 60;
    this.duaration1 = parseFloat(this.duaration).toFixed(2);
  }
  all(type: any) {
    console.log(type, "method");

    this.act1 = 'active'
    this.act2 = 'no-active'
    this.act3 = 'no-active'
    this.getCource(type)

  }
  popular(type: any) {
    console.log(type, "method");

    this.act1 = 'no-active'
    this.act2 = 'active'
    this.act3 = 'no-active'
    this.getCource(type)

  }
  newest(type: any) {
    console.log(type, "method");

    this.act1 = 'no-active'
    this.act2 = 'no-active'
    this.act3 = 'active'
    this.getCource(type)

  }

  allCategories() {
    this.homeService.getCategories().subscribe(data => {
      console.log(data, "categories");
      this.categories = data
    })
  }
  dot1() {
    this.a1 = 'dark-dot'
    this.a2 = 'dot'
    this.a3 = 'dot'
    this.getBanners(1)
  }
  dot2() {
    this.a1 = 'dot'
    this.a2 = 'dark-dot'
    this.a3 = 'dot'
    this.getBanners(2)

  }
  dot3() {
    this.a1 = 'dot'
    this.a2 = 'dot'
    this.a3 = 'dark-dot'
    this.getBanners(3)
  }
  goToOverview(courseId: any) {
    sessionStorage.setItem('courseId', courseId);
    this.route.navigate(['/courseDetails'])
  }

}
