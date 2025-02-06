## Checkbox

Allows multiple selections from a set of options.

### Basic Usage

When used alone, it can represent the switch between two states. The content written in the label is the description after the Checkbox button.
In the `jk-checkbox` component, define the `value` binding variable. In a single Checkbox, the value of the default binding variable will be of type `Boolean`, and `true` when selected.
!!!demo1!!!

### Disabled State

The state where the checkbox is unavailable.
Just set the `disabled` attribute in the `jk-checkbox` component. It accepts a `Boolean` value, with `true` indicating disabled.
!!!demo2!!!

### Checkbox Group

Suitable for scenarios where multiple checkboxes are bound to the same array. The selected items in this group of options are represented by whether they are checked or not.
The `jk-checkbox-group` component can manage multiple checkboxes as a group. You only need to use `value` to bind an `Array`-type variable in the Group. The `label` attribute of the `jk-checkbox` is the value corresponding to this checkbox. If there is no content in the label, this attribute also serves as the description after the Checkbox button. The `label` corresponds to the element value in the array. If the specified value exists, it is in the selected state; otherwise, it is not selected.
!!!demo3!!!

### Indeterminate State

The `indeterminate` attribute is used to represent the indeterminate state of the checkbox, generally used to achieve the effect of "select all".
!!!demo4!!!

### Limit on the Number of Selectable Items

The `min` and `max` attributes can be used to limit the number of items that can be checked.
!!!demo5!!!

### Button Style

A set of checkboxes in button style.
!!!demo6!!!

### With Border

Setting the `border` attribute can render it as a checkbox with a border. The `size` attribute of the `jk-checkbox` only takes effect when `border` is set.
!!!demo7!!!

### Checkbox Attributes

| Parameter     | Description                                                     | Type                      | Optional Values       | Default Value |
| ------------- | --------------------------------------------------------------- | ------------------------- | --------------------- | ------------- |
| value         | Bound value                                                     | string / number / boolean | —                     | —             |
| label         | The value of the Checkbox                                       | string / number / boolean | —                     | —             |
| class         | Custom class style                                              | string                    | -                     | -             |
| disabled      | Whether it is disabled                                          | boolean                   | —                     | false         |
| border        | Whether to display a border                                     | boolean                   | —                     | false         |
| size          | The size of the Checkbox, only valid when border is true        | string                    | medium / small / mini | —             |
| name          | Native name attribute                                           | string                    | —                     | —             |
| indeterminate | Set the indeterminate state, only responsible for style control | boolean                   | —                     | —             |

### Checkbox Events

| Event Name | Description                                          | Callback Parameter |
| ---------- | ---------------------------------------------------- | ------------------ |
| change     | The event triggered when the selection state changes | The changed value  |

### Checkbox-button Attributes

| Parameter | Description                                                    | Type                      | Optional Values | Default Value |
| --------- | -------------------------------------------------------------- | ------------------------- | --------------- | ------------- |
| value     | Bound value                                                    | string / number / boolean | —               | —             |
| label     | The value in the selected state (only valid in checkbox-group) | string / number / boolean | —               | —             |
| disabled  | Whether it is disabled                                         | boolean                   | —               | false         |
| name      | Native name attribute                                          | string                    | —               | —             |

### Checkbox-button Events

| Event Name | Description                                          | Callback Parameter |
| ---------- | ---------------------------------------------------- | ------------------ |
| change     | The event triggered when the selection state changes | The changed value  |

### Checkbox-group Attributes

| Parameter | Description                                                                                       | Type    | Optional Values       | Default Value |
| --------- | ------------------------------------------------------------------------------------------------- | ------- | --------------------- | ------------- |
| value     | Bound value                                                                                       | array   | —                     | []            |
| size      | The size of the checkbox group, only valid for button-style checkboxes or checkboxes with borders | string  | medium / small / mini | —             |
| disabled  | Whether it is disabled                                                                            | boolean | —                     | false         |
| min       | The minimum number of checkboxes that can be checked                                              | number  | —                     | -             |
| max       | The maximum number of checkboxes that can be checked                                              | number  | —                     | -             |

### Checkbox-group Events

| Event Name | Description                                          | Callback Parameter |
| ---------- | ---------------------------------------------------- | ------------------ |
| change     | The event triggered when the selection state changes | The changed value  |
