# ngx-switch

## Installation

```sh
waw add ngx-switch
```
### Usage
```html
<wswitch></wswitch>
<wswitch disabled></wswitch>
<wswitch id="someID"></wswitch>
<wswitch name="someNAME"></wswitch>
<wswitch required="someREQUIRED"></wswitch>
<wswitch label="Sound Notification" [(model)]="value.switch" (modelChange)="test()"></wswitch>
<wswitch [checked]="true"></wswitch>
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
