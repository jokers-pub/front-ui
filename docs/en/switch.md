## Switch

Represents the switch between two mutually opposing states, often used to trigger "on/off".

### Basic Usage

Bind `value` to a variable of the `Boolean` type. You can use the `activeColor` and `inactiveColor` attributes to set the background color of the switch.

!!!demo1!!!

### Disabled State

Set the `disabled` attribute, which accepts a `Boolean`. Setting it to `true` disables the switch.

!!!demo2!!!

### Text Description

Use the `activeText` and `inactiveText` attributes to set the text description of the switch.

!!!demo3!!!

### Extended Value Types

Set the `activeValue` and `inactiveValue` attributes, which can accept values of the `Boolean`, `String`, or `Number` type.

!!!demo4!!!

### Switch Attributes

| Parameter         | Description                                                                                          | Type                      | Optional Values | Default Value |
| ----------------- | ---------------------------------------------------------------------------------------------------- | ------------------------- | --------------- | ------------- |
| value             | Bound value                                                                                          | string / number / boolean | —               | —             |
| disabled          | Whether to disable                                                                                   | boolean                   | —               | false         |
| class             | Custom class style                                                                                   | string                    | -               | -             |
| width             | The width of the switch (in pixels)                                                                  | number                    | —               | 40            |
| activeIconClass   | The class name of the icon displayed when the switch is on. Setting this will ignore `activeText`    | string                    |                 | —             |
| inactiveIconClass | The class name of the icon displayed when the switch is off. Setting this will ignore `inactiveText` | string                    | —               | —             |
| activeText        | The text description when the switch is on                                                           | string                    | —               | —             |
| inactiveText      | The text description when the switch is off                                                          | string                    | —               | —             |
| activeValue       | The value when the switch is on                                                                      | boolean / string / number | —               | true          |
| inactiveValue     | The value when the switch is off                                                                     | boolean / string / number | —               | false         |
| activeColor       | The background color when the switch is on                                                           | string                    | —               | —             |
| inactiveColor     | The background color when the switch is off                                                          | string                    | —               | —             |
| name              | The `name` attribute corresponding to the switch                                                     | string                    | —               | —             |

### Switch Events

| Event Name | Description                                                | Callback Parameters |
| ---------- | ---------------------------------------------------------- | ------------------- |
| change     | The callback function when the state of the switch changes | The changed value   |

### Switch Methods

| Method Name | Description                | Parameter |
| ----------- | -------------------------- | --------- |
| focus       | Make the Switch gain focus | -         |
