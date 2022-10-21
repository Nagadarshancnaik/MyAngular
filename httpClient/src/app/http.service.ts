import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  
  // post method
  addUser(){
    const body= {
      title: 'foo',
      body: 'bar',
      userId: 1,
    }
     return this.http.post('https://jsonplaceholder.typicode.com/users',body)
  }


  /*  post 2
  this.http.post('https://jsonplaceholder.typicode.com/users',body).subscribe(data=>{
    console.log(data);
    },(err)=>{
    console.log(err);
    })
*/


  // get method
  getUser(){
    const header2 = new HttpHeaders(
      {
        'content-type':'aplication/JSON',
        'authenticationToken':'12345',
      }
    );
    const params2 =new HttpParams()
    .set('pageNumber',10)
    .set('pageSize',100)
   return this.http.get('https://jsonplaceholder.typicode.com/users',{headers:header2,params:params2});
  }
  



  //put Method
  updateUser(){
      const updatebody={
        name: 'Angular Tutorial',
        userId: 1
      }

      return this.http.put('https://jsonplaceholder.typicode.com/users/1',updatebody)
  }


  deleteUser(){
    return this.http.delete('https://jsonplaceholder.typicode.com/users/3')
  }
  
}
