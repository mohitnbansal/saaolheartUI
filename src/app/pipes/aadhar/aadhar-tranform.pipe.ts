import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aadharTranform'
})
export class AadharTranformPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    let theVal : string = value;
    if(value !== null ) {
    const len =   value.length;
    const theLoop = Number(len % 4);
    if (len === 4) {

      theVal = value + '-';
    } else if (len > 4 && len === 9) {
      theVal = value + '-';
    } else if (len > 9 && len === 14) {

    }
  }
return theVal;
}
}
