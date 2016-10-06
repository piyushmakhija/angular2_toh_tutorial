import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
	constructor(
		private heroService: HeroService,
		private router: Router
	) { }

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
	gotoDetail(): void {
		let link = ['/detail', this.selectedHero.id];
		this.router.navigate(link);
	}
}