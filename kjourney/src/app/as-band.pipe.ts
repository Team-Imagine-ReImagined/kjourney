import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asBand'
})
export class AsBandPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
