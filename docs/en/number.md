## InputNumber Counter

Only allows input of standard numeric values within a definable range.

### Basic Usage

To use it, simply bind a variable to `value` in the `jk-number` element. The initial value of the variable will be the default value.

!!!demo1!!!

### Disabled State

The `disabled` property accepts a `Boolean`. Setting it to `true` disables the entire component. If you only need to restrict values within a specific range, you can set the `min` and `max` properties. If `min` and `max` are not set, the minimum value defaults to 0.

!!!demo2!!!

### Step

Allows defining increment/decrement step control.

Set the `step` property to control the step size. It accepts a `Number`.

!!!demo3!!!

### Strict Step

The `step-strictly` property accepts a `Boolean`. If set to `true`, only multiples of the step value can be entered.

!!!demo4!!!

### Precision

Set the `precision` property to control the numerical precision. It accepts a `Number`.

!!!demo5!!!

> The value of `precision` must be a non-negative integer and should not be less than the number of decimal places in `step`.

### Sizes

Additional numeric input box sizes are available: `medium`, `small`, and `mini`.

!!!demo6!!!

### Button Position

Set the `controls-position` property to specify the position of the buttons.

!!!demo7!!!

### No Control Buttons

Set the `hidden-controls` property to hide the control buttons.

!!!demo8!!!

### Attributes

| Parameter           | Description                        | Type     | Optional Values     | Default     |
| ------------------- | ---------------------------------- | -------- | ------------------- | ----------- |
| value               | Bound value                        | number   | —                   | —           |
| class               | Custom class style                 | string   | -                   | -           |
| min                 | Minimum allowed value              | number   | —                   | -Infinity   |
| max                 | Maximum allowed value              | number   | —                   | Infinity    |
| step                | Step size                          | number   | —                   | 1           |
| step-strictly       | Whether to allow only step multiples | boolean  | —                   | false       |
| precision           | Numerical precision                | number   | —                   | —           |
| size                | Size of the counter                | string   | large, small        | —           |
| disabled            | Whether the counter is disabled    | boolean  | —                   | false       |
| hidden-controls     | Whether to hide control buttons    | boolean  | —                   | false       |
| controls-position   | Position of control buttons        | string   | right               | -           |
| name                | Native attribute                   | string   | —                   | —           |
| label               | Label text associated with input   | string   | —                   | —           |
| placeholder         | Default placeholder for input      | string   | -                   | -           |
| fullWidth           | Whether to set width to 100%       | boolean  | -                   | -           |

### Events

| Event Name | Description                          | Callback Parameters            |
| ---------- | ------------------------------------ | ------------------------------ |
| change     | Triggers when the bound value changes | currentValue, oldValue         |
| blur       | Triggers when Input loses focus      | VNode.Event                    |
| focus      | Triggers when Input gains focus      | VNode.Event                    |

### Methods

| Method   | Description                      | Parameters |
| -------- | -------------------------------- | ---------- |
| blur     | Makes input lose focus           | -          |
| focus    | Makes input gain focus           | -          |
| select   | Selects text in the input        | —          |