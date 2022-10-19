import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor() { }
  // public shareSubject=new BehaviorSubject<string>("Hi");

  public shareSubject=new Subject<string>();

  public shareSubjectTwo=new Subject<string>();


  shareData(data:any){
    this.shareSubject.next(data);
  }


  shareDataTwo(data:any){
    this.shareSubjectTwo.next(data)
  }
}
