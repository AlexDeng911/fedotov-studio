import { Component } from '@angular/core';
import { galleries } from '../../shared/gallerys/gallery';

@Component({
	selector: 'app-slider',
	templateUrl: './slider.component.html',
	styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
	readonly gallery = galleries;
}
