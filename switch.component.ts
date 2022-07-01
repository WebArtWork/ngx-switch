import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
	selector: 'wswitch',
	templateUrl: './switch.component.html',
	styleUrls: ['./switch.component.scss']
})
export class SwitchComponent{
	private _id: string
	@Input() set id(s: string) {
		this._id = s;
	}
	get id() {
		return this._id;
	}
	@Input() name !: string; 
	@Input() wngModel;
	@Input() label;
	@Output() wngModelChange = new EventEmitter()
	@Input() required: boolean
	public _checked: boolean = false;
	@Input() set checked(v: boolean) {
		this._checked = v !== false;
	}
	get checked() {
		return this._checked;
	}	
	private _disabled: boolean;
	@Input() set disabled(v: boolean) {
		this._disabled = v !== false;
	}
	get disabled() {
		return this._disabled;
	}
	constructor() {}
}
