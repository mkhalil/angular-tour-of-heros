import {Component, OnInit} from '@angular/core';
import {Hero} from '../../model/Hero';
import {HeroService} from '../hero.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-hereos',
  templateUrl: './hereos.component.html',
  styleUrls: ['./hereos.component.css']
})
export class HereosComponent implements OnInit {

  heroes: Hero[];

  selectedHero: Hero = new Hero();

  onSelectHero = (selectHero: Hero): void => {
    this.selectedHero = selectHero;
    this.messageService.add('Hero selected : ' + selectHero.name);
  };

  constructor(private heroService: HeroService, private messageService: MessageService) {
  }

  ngOnInit() {
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
    });
  }

}
