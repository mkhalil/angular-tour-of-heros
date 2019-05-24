import {Component, OnInit} from '@angular/core';
import {Hero} from '../../model/Hero';
import {HeroService} from '../hero.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.heroService.getHeroes().pipe(map(result => {
      console.log('value = ', result);
      return result;
    })).subscribe(result => this.heroes = result.splice(0,4));
  }

}
