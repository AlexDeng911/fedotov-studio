import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
	@Output() menuClickOutput = new EventEmitter<void>();
	@ViewChild('header') private readonly headerComponent: HeaderComponent | undefined;
}
