import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


interface login extends Array<login[]>{
  id:number,

  userName:string,

  password:string
}

@Injectable({
  providedIn: 'root'
})
export class InvisionService {
  
  constructor(private http:HttpClient) { }
  

  getpass():Observable<login[]>{
    return (this.http.get<login[]>('http://localhost:3000/passwordManager'));
   }
}
