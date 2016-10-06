import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import {Hero} from './hero';

import { HeroService } from './hero.service';

@Component({
	selector: 'my-hero-detail',
	templateUrl: 'app/hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {

	constructor(
		private route: ActivatedRoute,
		private heroService: HeroService,
		private location: Location
	) { }

	@Input()
	hero: Hero;

	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
			let id = +params['id'];
			this.heroService.getHero(id)
				.then(hero => this.hero = hero);
		})
	}

	goBack(): void {
		this.location.back();
	}
}