import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SidenavModule } from '../sidenav/sidenav.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
	declarations: [HeaderComponent],
	imports: [CommonModule, SidenavModule, MatIconModule, MatButtonModule, MatTableModule, MatToolbarModule],
	exports: [HeaderComponent],
})
export class HeaderModule {}
