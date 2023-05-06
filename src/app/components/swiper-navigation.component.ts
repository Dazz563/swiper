import {CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {NgFor} from '@angular/common';

import Swiper from 'swiper';

@Component({
	selector: 'app-swiper-navigation',
	standalone: true,
	imports: [NgFor],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	template: `
		<ng-content></ng-content>
		<swiper-container #swiperContainer class="mySwiper">
			<swiper-slide *ngFor="let item of data">
				<div class="card">
					<p class="title">{{ item.title }}</p>
					<ul>
						<li class="item" *ngFor="let list of item.list">{{ list }}</li>
					</ul>
				</div>
			</swiper-slide>
		</swiper-container>
		<div class="navigation">
			<div (click)="previousSlide()"><span class="material-symbols-outlined"> chevron_left </span></div>
			<div (click)="nextSlide()"><span class="material-symbols-outlined"> chevron_right </span></div>
		</div>
	`,
	styles: [],
})
export class SwiperNavigationComponent {
	@ViewChild('swiperContainer') swiperContainer!: ElementRef;
	@Input() data: any;
	swiper!: Swiper;

	ngOnInit(): void {}

	ngAfterViewInit(): void {
		this.swiper = new Swiper(this.swiperContainer.nativeElement, {
			mousewheel: true,
			// autoplay: {
			// 	delay: 2000,
			// 	disableOnInteraction: true,
			// },
			slidesPerView: 4,
			spaceBetween: 30,
		});

		// Force an update to ensure that the configuration options are applied correctly
		setTimeout(() => {
			this.swiper.update();
		}, 0);
	}

	/**
	 * after a delete is made we need to initialize the swiper again to avoid
	 * empty spaces
	 */
	initSwiper() {
		this.swiper = new Swiper('.swiper-container', {
			speed: 400,
			slidesPerView: 1,
		});
	}

	previousSlide() {
		this.swiper.slidePrev();
	}

	nextSlide() {
		this.swiper.slideNext();
	}
}
