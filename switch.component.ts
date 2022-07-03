import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
	selector: 'wswitch',
	templateUrl: './switch.component.html',
	styleUrls: ['./switch.component.scss']
})
export class SwitchComponent{
	@Input() id;
	@Input() name;
	@Input() wngModel;
	@Input() label;
	@Input() disabled: boolean
	@Output() wngModelChange = new EventEmitter()
	constructor() {}
}

