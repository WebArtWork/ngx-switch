import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
	selector: 'wswitch',
	templateUrl: './switch.component.html',
	styleUrls: ['./switch.component.scss']
})
export class SwitchComponent{
	@Input() model;
	@Input() label;
	@Output() modelChange = new EventEmitter()

	constructor() {}
}
