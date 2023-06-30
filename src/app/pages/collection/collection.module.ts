import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionListComponent } from './collection-list.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
	declarations: [CollectionListComponent],
	imports: [CommonModule, MatListModule],
	exports: [CollectionListComponent],
})
export class CollectionModule {}
