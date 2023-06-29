import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IGallery } from '../../shared/gallerys/gallery.interface';
import { galleries } from '../../shared/gallerys/gallery-data';

@Component({
	selector: 'app-slider',
	templateUrl: './slider.component.html',
	styleUrls: ['./slider.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent {
	@Input() gallery: IGallery | any = galleries;

	// back = ($event: MouseEvent) => {
	// 	this.gallery.images[0].index--;
	// 	if (this.gallery.images[0].index < 0) {
	// 		this.gallery.images[0].index = this.gallery.images.length - 1;
	// 	}
	// 	console.log('index', this.gallery.images[0].index);
	// };
	// next = ($event: MouseEvent) => {
	// 	this.gallery.images[0].index++;
	// 	if (this.gallery.images[0].index > this.gallery.images.length - 1) {
	// 		this.gallery.images[0].index = 0;
	// 	}
	// 	console.log('index', this.gallery.images[0].index);
	// };
}
