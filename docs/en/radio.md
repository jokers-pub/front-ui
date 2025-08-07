## Radio Button

Single selection from a set of options

### Basic Usage

Since options are visible by default, they should not be too numerous. If there are excessive options, consider using the Select component instead.

To use the Radio component, bind a value to the `value` property. The `value` can be of type `String`, `Number`, or `Boolean`.

!!!demo1!!!

### Disabled State

The disabled state of a radio button.

Simply set the `disabled` attribute on the `jk-radio` element. It accepts a `Boolean` value, where `true` means disabled.

!!!demo2!!!

### Radio Group

Used for selecting one mutually exclusive option from multiple choices.

Combine the parent element `jk-radio-group` with child elements `jk-radio` to create a radio group. Bind the `value` on `jk-radio-group` and set the `label` on `jk-radio`. There's no need to bind variables for each `jk-radio` individually. Additionally, a `change` event is provided to respond to selection changes, which passes the new `value` as an argument.

!!!demo3!!!

### With Border

Set the `border` attribute to render radio buttons with borders. The `size` attribute on `jk-radio` will only take effect when `border` is set.

!!!demo4!!!

### Button Style

Radio groups with button styling. 

Simply replace the `jk-radio` element with `jk-radio-button`. Additionally, Joker-UI provides the `size` attribute.

!!!demo5!!!

### Radio Attributes

| Attribute  | Description | Type | Accepted Values | Default |
|------------|-------------|------|-----------------|---------|
| value      | Binding value | string / number / boolean | — | — |
| class      | Custom CSS class | string | — | — |
| label      | Value of the radio button | string / number / boolean | — | — |
| hide-label | Whether to hide the label | boolean | — | — |
| disabled   | Whether it is disabled | boolean | — | false |
| border     | Whether to show a border | boolean | — | false |
| size       | Size of the radio button, only effective when `border` is true | string | medium / small / mini | — |
| name       | Native `name` attribute | string | — | — |

### Radio Events

| Event Name | Description | Callback Parameters |
|------------|-------------|----------------------|
| change     | Triggered when selection changes | The new value after change |

### Radio-button Attributes

| Attribute  | Description | Type | Accepted Values | Default |
|------------|-------------|------|-----------------|---------|
| value      | Binding value | string / number / boolean | — | — |
| label      | Value of the radio button | string / number / boolean | — | — |
| disabled   | Whether it is disabled | boolean | — | false |
| size       | Size of the radio button, only effective when `border` is true | string | medium / small / mini | — |
| name       | Native `name` attribute | string | — | — |

### Radio-button Events

| Event Name | Description | Callback Parameters |
|------------|-------------|----------------------|
| change     | Triggered when selection changes | The new value after change |

### Radio-group Attributes

| Attribute  | Description | Type | Accepted Values | Default |
|------------|-------------|------|-----------------|---------|
| value      | Binding value | string / number / boolean | — | — |
| size       | Size of the radio group, only effective for button-style radios or those with borders | string | medium / small / mini | — |
| disabled   | Whether it is disabled | boolean | — | false |

### Radio-group Events

| Event Name | Description | Callback Parameters |
|------------|-------------|----------------------|
| change     | Triggered when selection changes | The new value after change |