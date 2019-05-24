import {Pipe, PipeTransform} from '@angular/core';
import {Hero} from './Hero';

@Pipe({name : 'sortHeroesPipe'})
export class SortHeroesPipe implements PipeTransform{
  transform(heroes: Hero[]): Hero[] {
    return heroes.sort((h1, h2) => h1.name.localeCompare(h2.name));
  }


}
