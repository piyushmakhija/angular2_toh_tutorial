import { Component, OnInit } from '@angular/core';

import {Hero} from './hero';
import {HeroService} from './hero.service'

@Component({
	moduleId: module.id,
	selector: "my-heroes",
	templateUrl: 'heroes.component.html',
	styleUrls: ['heroes.component.css'],
	providers: [HeroService]
})

export class HeroesComponent implements OnInit{
	constructor(private heroService: HeroService) { }

	title = 'Tour of Heroes';
	heroes:Hero[];
	selectedHero: Hero;
	hero: Hero = {
		id: 1,
		name: 'Windstorm'
	};
	ngOnInit(): void {
		this.getHeroes();
	}
	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}
}