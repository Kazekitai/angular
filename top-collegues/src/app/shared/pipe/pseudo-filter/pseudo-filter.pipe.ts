import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pseudoFilter'
})
export class PseudoFilterPipe implements PipeTransform {

  transform(items: any[], pseudoFilter:string[]): any {
    if(!items || !pseudoFilter) {
      return items;
    }
    
    let str = "";
    for(let i=0;i<pseudoFilter.length;i++) {
      str += pseudoFilter[i].toUpperCase();
    }
    let filtersize:number = str.length;
    return items.filter(item => item.pseudo.toUpperCase().substring(0, filtersize) == str );
  }

}
