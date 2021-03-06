import { Injectable } from '@angular/core';
import {Hero} from '../model/Hero';
import {HEROES} from './mock-heroes';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes= ():Observable<Hero[]> => {
    return of(HEROES);
  }

  constructor() { }
}
