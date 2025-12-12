import { Pipe, PipeTransform } from '@angular/core';
import { getRandomInt } from '../functions/random-number';


@Pipe({
  name: 'randomInt',
  standalone: true 
})
export class RandomIntPipe implements PipeTransform {
  transform(max: number): number {
    return getRandomInt(max);
  }
}