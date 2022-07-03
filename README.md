# ngx-switch

## Installation

```sh
waw add ngx-switch
```
### Usage
```
import { SwitchModule } from 'src/app/modules';
@NgModule({
	imports: [
		SwitchModule
	]
})

```

```html
<wswitch disabled="true" label="Sound Notification" [(wngModel)]="value.switch" (wngModelChange)="function()"></wswitch>
```

## Arguments
```
id: string
name: string
disabled: boolean (default: false)
label: string | Displayed text
wngModel: boolean | Returns the state of switch
wngModelChange | Called when model changes
```
