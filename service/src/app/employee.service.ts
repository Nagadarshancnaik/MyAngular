import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployee(){
    return [
      {"id":1,"name":"naga","age":22},
      {"id":2,"name":"darshan","age":33},
      {"id":3,"name":"naveen","age":44},
      {"id":4,"name":"pooja","age":55},
    ]
  }
}
