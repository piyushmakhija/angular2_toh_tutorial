import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {PolymerElement} from '@vaadin/angular2-polymer'
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from './hero-search.component';

// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

import { HeroService } from './hero.service'

import { routing } from './app.routing';

import './rxjs-extensions';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		routing,
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService)
	],
	declarations: [
		AppComponent,
		HeroesComponent,
		HeroDetailComponent,
		DashboardComponent,
		HeroSearchComponent,
		PolymerElement('app-header-layout'),
		PolymerElement('app-header'),
		PolymerElement('app-toolbar')
		// PolymerElement('paper-element')
	],
	providers: [HeroService],
	bootstrap: [ AppComponent ],
	schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule {}