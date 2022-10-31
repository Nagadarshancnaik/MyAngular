import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let userName= value.split('').reverse().join('');
     return userName;
  }

}
