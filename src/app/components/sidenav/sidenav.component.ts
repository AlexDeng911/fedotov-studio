import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: 'name',
			useValue: 'SidenavComponent',
		},
	],
})
export class SidenavComponent {
	@Output() menuClickOutput = new EventEmitter<void>();
	@ViewChild(MatDrawer, { static: true })
	private readonly matDrawerComponent!: MatDrawer;

	constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}
	toggleSidenavOpened() {
		this.matDrawerComponent.toggle();
		this.changeDetectorRef.markForCheck();
	}
}
