import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'getCeil',
    pure: true
  })
export class GetCeil implements PipeTransform {
    transform(value: number): any {
        return Math.ceil(value);
    }
}