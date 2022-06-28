import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
	selector: 'wswitch',
	templateUrl: './switch.component.html',
	styleUrls: ['./switch.component.scss']
})
export class SwitchComponent{
	public _id: string
	public _disabled : boolean
	public _checked: boolean = false;
	@Input() label;
	@Input() required: boolean
	@Input() name: string
	@Input() model = false;

	@Input() set checked(v: boolean) {
		this._checked = v !== false;
	}
	@Input() set disabled(v: boolean) {
		this._disabled = v !== false;
	}
	@Output() modelChange = new EventEmitter()		
	get id() {
		return this._id;
	}
	get disabled() {
		return this._disabled;
	}
	constructor() {}
}