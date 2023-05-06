import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {register} from 'swiper/element/bundle';
register();

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SwiperComponent} from './components/swiper.component';
import {SwiperPaginateComponent} from './components/swiper-paginate.component';
import {SwiperNavigationComponent} from './components/swiper-navigation.component';

@NgModule({
	declarations: [
		AppComponent, //
	],
	imports: [
		BrowserModule, //
		AppRoutingModule,
		SwiperComponent,
		SwiperPaginateComponent,
		SwiperNavigationComponent,
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
