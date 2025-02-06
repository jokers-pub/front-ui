## Radio

Used to make a single selection among a set of alternative options.

### Basic Usage

Since the options are visible by default, the number of options should not be too large. If there are too many options, it is recommended to use the Select selector.

To use the Radio component, use the `value` attribute of Radio. The `value` can be `String`, `Number`, or `Boolean`.

!!!demo1!!!

### Disabled State

The state where the radio button is unavailable.

Just set the `disabled` attribute in the `jk-radio` element. It accepts a `Boolean`, and `true` means disabled.

!!!demo2!!!

### Radio Group

Suitable for scenarios where a selection is made among multiple mutually exclusive options.

Combining the parent element `jk-radio-group` and the child element `jk-radio` can achieve a radio group. Bind `value` on the `jk-radio-group` and set `label` on the `jk-radio`. There is no need to bind variables to each `jk-radio` anymore. In addition, a `change` event is provided to respond to changes in the selection, and it will pass in a parameter `value`.

!!!demo3!!!

### With Border

Setting the `border` attribute can render a radio button with a border. The `size` attribute of `jk-raido` only takes effect when `border` is set.

!!!demo4!!!

### Button Style

A radio combination with a button style.

Just change the `jk-radio` element to the `jk-radio-button` element. In addition, Joker-UI also provides the `size` attribute.

!!!demo5!!!

### Radio Attributes

| Parameter  | Description                                       | Type                      | Optional Values       | Default Value |
| ---------- | ------------------------------------------------- | ------------------------- | --------------------- | ------------- |
| value      | Bound value                                       | string / number / boolean | —                     | —             |
| class      | Custom class style                                | string                    | -                     | -             |
| label      | The value of Radio                                | string / number / boolean | —                     | —             |
| hide-label | Whether to hide the label                         | boolean                   | —                     | —             |
| disabled   | Whether to disable                                | boolean                   | —                     | false         |
| border     | Whether to display the border                     | boolean                   | —                     | false         |
| size       | The size of Radio, only valid when border is true | string                    | medium / small / mini | —             |
| name       | Native name attribute                             | string                    | —                     | —             |

### Radio Events

| Event Name | Description                                          | Callback Parameters |
| ---------- | ---------------------------------------------------- | ------------------- |
| change     | The event triggered when the selection state changes | The changed value   |

### Radio-button Attributes

| Parameter | Description                                       | Type                      | Optional Values       | Default Value |
| --------- | ------------------------------------------------- | ------------------------- | --------------------- | ------------- |
| value     | Bound value                                       | string / number / boolean | —                     | —             |
| label     | The value of Radio                                | string / number / boolean | —                     | —             |
| disabled  | Whether to disable                                | boolean                   | —                     | false         |
| size      | The size of Radio, only valid when border is true | string                    | medium / small / mini | —             |
| name      | Native name attribute                             | string                    | —                     | —             |

### Radio-button Events

| Event Name | Description                                          | Callback Parameters |
| ---------- | ---------------------------------------------------- | ------------------- |
| change     | The event triggered when the selection state changes | The changed value   |

### Radio-group Attributes

| Parameter | Description                                                                            | Type                      | Optional Values       | Default Value |
| --------- | -------------------------------------------------------------------------------------- | ------------------------- | --------------------- | ------------- |
| value     | Bound value                                                                            | string / number / boolean | —                     | —             |
| size      | The size of the radio group, only valid for button-style Radios or Radios with borders | string                    | medium / small / mini | —             |
| disabled  | Whether to disable                                                                     | boolean                   | —                     | false         |

### Radio-group Events

| Event Name | Description                                          | Callback Parameters |
| ---------- | ---------------------------------------------------- | ------------------- |
| change     | The event triggered when the selection state changes | The changed value   |
