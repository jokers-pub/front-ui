## Switch 

Represents a toggle between two mutually exclusive states, commonly used to trigger "on/off" actions.

### Basic Usage

Bind the value to a Boolean variable. Use the `activeColor` and `inactiveColor` properties to set the background colors of the switch.

!!!demo1!!!

### Disabled State

Set the `disabled` property, which accepts a Boolean value. Setting it to `true` will disable the switch.

!!!demo2!!!

### Text Description 

Use the `activeText` and `inactiveText` properties to set the text descriptions for the switch states.

!!!demo3!!!

### Extended Value Types  

Configure the `activeValue` and `inactiveValue` properties to accept values of type Boolean, String, or Number.

!!!demo4!!!

### Attributes

| Parameter          | Description                                                  | Type                      | Options | Default  |
| ------------------ | ------------------------------------------------------------ | ------------------------- | ------- | -------- |
| value              | Binding value                                                | string / number / boolean | —       | —        |
| disabled           | Whether the switch is disabled                               | boolean                   | —       | false    |
| class              | Custom class for styling                                     | string                    | -       | -        |
| width              | Width of the switch (in pixels)                              | number                    | —       | 40       |
| activeIconClass    | Class name for the icon displayed when the switch is on (overrides `activeText`) | string                    | —       | —        |
| inactiveIconClass  | Class name for the icon displayed when the switch is off (overrides `inactiveText`) | string                    | —       | —        |
| activeText         | Text description when the switch is on                       | string                    | —       | —        |
| inactiveText       | Text description when the switch is off                      | string                    | —       | —        |
| activeValue        | Value when the switch is on                                  | boolean / string / number | —       | true     |
| inactiveValue      | Value when the switch is off                                 | boolean / string / number | —       | false    |
| activeColor        | Background color when the switch is on                       | string                    | —       | —        |
| inactiveColor      | Background color when the switch is off                      | string                    | —       | —        |
| name               | Name attribute for the switch                                | string                    | —       | —        |

### Events

| Event Name | Description                                   | Callback Parameters   |
| ---------- | --------------------------------------------- | --------------------- |
| change     | Callback function when switch state changes   | New value after change |

### Methods

| Method  | Description                     | Parameters |
| ------- | ------------------------------- | ---------- |
| focus   | Focuses the Switch component    | -          |