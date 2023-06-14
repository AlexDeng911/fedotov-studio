import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponent } from './pages/slider/slider.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SliderModule } from './pages/slider/slider.module';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
	declarations: [AppComponent, SliderComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatCardModule,
		MatButtonModule,
		MatIconModule,
		NgOptimizedImage,
	],
	providers: [],
	bootstrap: [AppComponent],
	exports: [SliderComponent],
})
export class AppModule {}
