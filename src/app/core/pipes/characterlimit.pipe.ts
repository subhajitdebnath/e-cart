import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'characterlimit'
})
export class CharacterlimitPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    // console.log(value, args);
    const limit = args[0] ? args[0] : 15;
    const trail = '...';
    if(value.length > limit) {
      return value.substring(0, limit) + trail;
    } else {
      return value;
    }
    
  }

}
