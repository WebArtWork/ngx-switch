# ngx-switch

## Installation

```sh
waw add ngx-switch
```

## Usage
```html
<wswitch></wswitch>
```
### Disabled

```html
<wswitch disabled></wswitch>
```
### ID

```html
<wswitch id="someID"></wswitch>
```
### Name

```html
<wswitch name="someNAME"></wswitch>
```
### Required

```html
<wswitch required="someREQUIRED"></wswitch>
```
### Checked

```html
<wswitch [checked]="true"></wswitch>
```
### Label
```html
<wswitch label="Sound Notification" [(model)]="value.switch" (modelChange)="test()"></wswitch>
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
