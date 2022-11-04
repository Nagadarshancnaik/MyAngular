import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


interface login extends Array<login[]>{
 
  id:number,

  name:string,

  pass:string
}

@Injectable({
  providedIn: 'root'
})
export class InvisionService {
  
  constructor(private http:HttpClient) { }
  

  getpass():Observable<login[]>{
    return (this.http.get<login[]>('http://localhost:3000/passwordManager'));
   }

  

   loginCheck():Observable<login[]>{
    return (this.http.get<login[]>('http://localhost:3000/passwordManager'));
   }

   updateEmployee(pass:any,name:any,id:any){
    const body={
      name: name,
      pass: pass,
      id:id
    }
    return this.http.put('http://localhost:3000/passwordManager/'+id,body);
   }



   //super admin
   postEmployeeDetail(data:any){
    return this.http.post<any>('http://localhost:3000/EmployeeDetails/',data);
   }

   getEmployeeDetail(){
    return this.http.get<any>('http://localhost:3000/EmployeeDetails/');
   }
   
}
