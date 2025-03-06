import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'pair',
    pure: true,
    standalone: false
})
  // thx stack overflow
  export class PairPipe implements PipeTransform {
    transform(array) {
      return array.reduce((result, item, index) => (
        index % 2 ? result : [...result, [item, array[index + 1]]]
      ), []);
    }
  }