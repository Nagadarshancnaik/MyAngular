import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private e1:ElementRef) { 
    e1.nativeElement.style.color="green"
    e1.nativeElement.style.fontSize="40px"


  }

}
