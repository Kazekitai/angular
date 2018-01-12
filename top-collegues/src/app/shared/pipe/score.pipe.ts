import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let template:string;
    if(value > 0 ) {
      template = ` + ${value}`;
    } else {
      template = `${value}`;
    }
    return template;
  }

}
