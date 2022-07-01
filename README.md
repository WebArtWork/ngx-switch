# ngx-switch

## Installation

```sh
waw add ngx-switch
```
### Usage
```html
<wswitch [(model)]="value.switch" (modelChange)="test()" label="Sound Notification" name="someNAME" id="someID" [checked]="true" required="someREQUIRED" disabled></wswitch>
```

## Arguments
```
id: string
name: string
required: boolean
checked: boolean (default: false)
disabled: boolean (default: false)
label: string | Displayed text
model: boolean | Returns the state of switch
modelChange | Called when model changes
```
