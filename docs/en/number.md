## InputNumber

Only allows the input of standard numeric values, and the range can be defined.

### Basic Usage

To use it, simply bind a variable to `value` in the `jk-number` element. The initial value of the variable is the default value.

!!!demo1!!!

### Disabled State

The `disabled` attribute accepts a `Boolean`. Setting it to `true` disables the entire component. If you only need to control the value within a certain range, you can set the `min` and `max` attributes. When `min` and `max` are not set, the minimum value is 0.

!!!demo2!!!

### Step

Allows the definition of step-by-step control for incrementing and decrementing.

Setting the `step` attribute can control the step size, which accepts a `Number`.

!!!demo3!!!

### Strict Step

The `step-strictly` attribute accepts a `Boolean`. If this attribute is set to `true`, only multiples of the step can be entered.

!!!demo4!!!

### Precision

Setting the `precision` attribute can control the numerical precision, which accepts a `Number`.

!!!demo5!!!

> The value of `precision` must be a non-negative integer and cannot be less than the number of decimal places of `step`.

### Size

Three additional sizes of numeric input boxes are provided: `medium`, `small`, and `mini`.

!!!demo6!!!

### Button Position

Setting the `controls-position` attribute can control the position of the buttons.

!!!demo7!!!

### No Control Buttons

Setting the `hidden-controls` attribute can control the position of the buttons.

!!!demo8!!!

### Attributes

| Parameter         | Description                                   | Type    | Optional Values | Default Value |
| ----------------- | --------------------------------------------- | ------- | --------------- | ------------- |
| value             | Bound value                                   | number  | —               | —             |
| class             | Custom class style                            | string  | -               | -             |
| min               | Set the minimum value allowed by the counter  | number  | —               | -Infinity     |
| max               | Set the maximum value allowed by the counter  | number  | —               | Infinity      |
| step              | Counter step size                             | number  | —               | 1             |
| step-strictly     | Whether only multiples of step can be entered | boolean | —               | false         |
| precision         | Numerical precision                           | number  | —               | —             |
| size              | Counter size                                  | string  | large, small    | —             |
| disabled          | Whether to disable the counter                | boolean | —               | false         |
| hidden-controls   | Whether to hide the control buttons           | boolean | —               | false         |
| controls-position | Position of the control buttons               | string  | right           | -             |
| name              | Native attribute                              | string  | —               | —             |
| label             | The label text associated with the input box  | string  | —               | —             |
| placeholder       | Default placeholder of the input box          | string  | -               | -             |
| fullWidth         | Whether the width is 100%                     | boolean | -               | -             |

### Events

| Event Name | Description                                           | Callback Parameters    |
| ---------- | ----------------------------------------------------- | ---------------------- |
| change     | Triggered when the bound value is changed             | currentValue, oldValue |
| blur       | Triggered when the Input in the component loses focus | VNode.Event            |
| focus      | Triggered when the Input in the component gains focus | VNode.Event            |

### Methods

| Method Name | Description                  | Parameter |
| ----------- | ---------------------------- | --------- |
| blur        | Make the input lose focus    | -         |
| focus       | Make the input gain focus    | -         |
| select      | Select the text in the input | —         |
