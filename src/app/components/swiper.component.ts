import {CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {NgFor} from '@angular/common';

import Swiper from 'swiper';

@Component({
	selector: 'app-swiper',
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
	`,
	styles: [],
})
export class SwiperComponent {
	@ViewChild('swiperContainer') swiperContainer!: ElementRef;
	@Input() data: any;
	swiper!: Swiper;

	ngOnInit(): void {}

	ngAfterViewInit(): void {
		this.swiper = new Swiper(this.swiperContainer.nativeElement, {
			mousewheel: true,
			grabCursor: true,
			autoplay: {
				delay: 2000,
				disableOnInteraction: true,
			},
			slidesPerView: 4,
			spaceBetween: 30,
			injectStyles: [``],
		});

		// Force an update to ensure that the configuration options are applied correctly
		setTimeout(() => {
			this.swiper.update();
		}, 0);
	}
}
