import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
@Component({
	selector: 'wswitch',
	templateUrl: './switch.component.html',
	styleUrls: ['./switch.component.scss']
})
export class SwitchComponent{
	private _checked: boolean;
	private _disabled: boolean;
	private _reverse: boolean;

	@Input() wngModel;
	@Input() label;
	@Output() wngModelChange = new EventEmitter()
	@Input() size = 'medium';
	@Output() change = new EventEmitter<boolean>();
	@Input() color = 'rgb(47, 207, 45)';
	@Input() switchOffColor = '';
	@Input() switchColor = '#fff';
	@Input() defaultBgColor = '#fff';
	@Input() defaultBoColor = '#dfdfdf';
	@Input() labelOn = '';
	@Input() labelOff = '';
	@Input() set checked(v: boolean) {
		this._checked = v !== false;
	}
	get checked() {
		return this._checked;
	}
	@Input() set disabled(v: boolean) {
		this._disabled = v !== false;
	}
	get disabled() {
		return this._disabled;
	}
	@Input() set reverse(v: boolean) {
		this._reverse = v !== false;
	}
	get reverse() {
		return this._reverse;
	}
	getColor(flag = '') {
		if (flag === 'borderColor') {
			return this.defaultBoColor;
		}
		if (flag === 'switchColor') {
			if (this.reverse) {
				return !this.checked ? this.switchColor : this.switchOffColor || this.switchColor;
			}
			return this.checked ? this.switchColor : this.switchOffColor || this.switchColor;
		}
		if (this.reverse) {
			return !this.checked ? this.color : this.defaultBgColor;
		}
		return this.checked ? this.color : this.defaultBgColor;
	}
	@HostListener('click')
	onToggle() {
		if (this.disabled) {
			return;
		}
		this.checked = !this.checked;
		this.change.emit(this.checked);
		this.onChangeCallback(this.checked);
		this.onTouchedCallback(this.checked);
	}
	writeValue(obj: any): void {
		if (obj !== this.checked) {
			this.checked = !!obj;
	  	}
	}
	registerOnChange(fn: any) {
		this.onChangeCallback = fn;
	}
	registerOnTouched(fn: any) {
		this.onTouchedCallback = fn;
	}
	setDisabledState(isDisabled: boolean) {
		this.disabled = isDisabled;
	}
	private onTouchedCallback = (v: any) => { };
	private onChangeCallback = (v: any) => { };
  
	constructor() {}
}
