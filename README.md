# ngx-switch

## Installation

```sh
waw add ngx-switch
```
## Usage

```javascript
import { AppComponent } from './app.component';
import { SwitchModule } from 'ngx-switch';

@NgModule({
  imports: [SwitchModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

```html
<wswitch></wswitch>
```
### Size

> type: *string*
> default: medium
```html
<wswitch size="small"></wswitch>
<wswitch size="large"></wswitch>
```
### Disabled

> type: *boolean*
> default: false
```html
<wswitch disabled></wswitch>
<wswitch checked [disabled]="true"></wswitch>
```
### Color

> type: *string*
> default: rgb(100, 189, 99)
```html
<wswitch color="red"></wswitch>
```

### Switch Color

> type: *string*
> default: #fff

```html
<wswitch switchColor="#fcfcfc"></wswitch>
```

### Background Color

*Default background color*

> type: *string*
> default: #fff

```html
<wswitch defaultBgColor="red"></wswitch>
```

### Border Color

*Default border color*

> type: *string*
> default: #dfdfdf

```html
<wswitch defaultBoColor="black"></wswitch>
```
### Toggle text

```html
<wswitch labelOn="Yes" labelOff="No"></wswitch>
```
