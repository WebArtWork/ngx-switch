# ngx-switch

## Installation

```sh
waw add ngx-switch
```

## Usage
```html
<wswitch label="Sound Notification" [(model)]="value.switch" (modelChange)="test()"></wswitch>
```

## Arguments
```
label: string | Displayed text
model: boolean | Returns the state of switch
modelChange | Called when model changes
```