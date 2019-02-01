import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterStr: string, propName: string): any {
    /**
     * Here value is array
     */
    console.log(value)
    if (value.length === 0 || filterStr == '') {
      return value;
    }
    const resAr = [];

    for (var i = 0; i < value.length; i++) {
      if (value[i][propName] == filterStr) {
        resAr.push(value[i])
      }
    }
    return resAr
  }

}