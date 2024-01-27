import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oddevenchecker'
})
export class OddevencheckerPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return (value / 2 === 0 ? 'even' : 'odd');
  }

}
