import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'experience'
})
export class ExperiencePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let currentYear = new Date().getFullYear();
    let employeeJoinYear=new Date(value).getFullYear();
    let totalExperience=currentYear-employeeJoinYear
    return totalExperience;
  }

}
