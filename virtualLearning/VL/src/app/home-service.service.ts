import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(private http: HttpClient) { }

  login(body: any) {
    return this.http.post('http://20.204.120.151:3000/signIn', body)
  }



  getCourseByType(type: any) {
    let token = JSON.parse(sessionStorage.getItem('token1') as any);

    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );

    console.log(headers_object);
    console.log(type);


    const body = {
      choice: type,
      view: '',
    }
    return this.http.post('http://20.204.120.151:3000/choiceYourCourse', body, {
      headers: headers_object
    });
  }
  getBannersService(page:any) {
    let token = JSON.parse(sessionStorage.getItem('token1') as any);
    console.log(token);

    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );

    return this.http.get('http://20.204.120.151:3000/getBanner?page='+page, {
      headers: headers_object
    })
  }
  getOnGoingCourses() {
    let token = JSON.parse(sessionStorage.getItem('token1') as any);

    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.get('http://20.204.120.151:3000/ongoingCourses', {
      headers: headers_object
    })
  }
  getTopCoursesBusiness() {
    let token = JSON.parse(sessionStorage.getItem('token1') as any);

    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    const body = {
      text: 'business'
    }

    return this.http.post('http://20.204.120.151:3000/topCoursesInCategory', body, {
      headers: headers_object
    })

  }
  getTopCoursesDesign() {
    let token = JSON.parse(sessionStorage.getItem('token1') as any);

    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    const body = {
      text: 'design'
    }
    return this.http.post('http://20.204.120.151:3000/topCoursesInCategory', body, {
      headers: headers_object
    })
  }
  getTopSearch() {
    let token = JSON.parse(sessionStorage.getItem('token1') as any);

    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
   return this.http.get('http://20.204.120.151:3000/topSearches',{
      headers: headers_object
    })
  }
  getCategories(){
    let token = JSON.parse(sessionStorage.getItem('token1') as any);

    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    const body={
      "choice":"seeAll"
    }
    return this.http.post('http://20.204.120.151:3000/getCategories',body,{
      headers: headers_object
    })
  }
  searchByCategory(cat:any){
   const body= {
      text:cat
  }
  let token = JSON.parse(sessionStorage.getItem('token1') as any);

    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.post('http://20.204.120.151:3000/searchByCategory',body,{
      headers: headers_object
    })
  }
  getName(){
    let token = JSON.parse(sessionStorage.getItem('token1') as any);

    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.get('http://20.204.120.151:3000/getName',{
      headers: headers_object
    })
  }

  getOverviewDetails(courseId:any){
    console.log(courseId);
    
  let token = JSON.parse(sessionStorage.getItem('token1') as any);

    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    const body={
      "view":"Overview",
      "courseId":courseId
    }
   return this.http.post('http://20.204.120.151:3000/getCourse/overview',body,{
      headers: headers_object
    })
  }
  getChapterDetails(courseId:any){
    let token = JSON.parse(sessionStorage.getItem('token1') as any);

    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    const body={
      "view":"chapters",
      "courseId":courseId
    }
   return this.http.post('http://20.204.120.151:3000/getCourse/chapters',body,{
      headers: headers_object
    })
  }
  getAllOngoingCourses(){
    let token = JSON.parse(sessionStorage.getItem('token1') as any);

    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.get('http://20.204.120.151:3000/ongoingCourses?choice=seeAll', {
      headers: headers_object
    })
  }
}
