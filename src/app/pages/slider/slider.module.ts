import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CarouselModule } from '../../shared/carousel/carousel.module';
import { SliderComponent } from './slider.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
	declarations: [SliderComponent],
	imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule, CarouselModule, MatProgressSpinnerModule],
	exports: [SliderComponent],
})
export class SliderModule {}
