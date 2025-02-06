## ColorPicker

Used for color selection, supporting multiple formats.

### Basic Usage

Set the `value` variable to display the default value and obtain the selected value through the `value`.
!!!demo1!!!

### Select Transparency

The ColorPicker supports both ordinary colors and colors with an Alpha channel. You can control whether to support the selection of transparency through the `show-alpha` attribute.
!!!demo2!!!

### Different Sizes

!!!demo3!!!

### Read-only/Disabled

!!!demo4!!!

### Attributes

| Parameter  | Description                               | Type    | Optional Values       | Default Value |
| ---------- | ----------------------------------------- | ------- | --------------------- | ------------- |
| value      | Bound value                               | string  | —                     | —             |
| disabled   | Whether it is disabled                    | boolean | —                     | false         |
| class      | Custom class style                        | string  | -                     | -             |
| size       | Size                                      | string  | medium / small / mini | —             |
| show-alpha | Whether to support transparency selection | boolean | —                     | false         |
| format     | The format for writing colors             | string  | hex / rgba            | -             |

### Events

| Event Name | Description                            | Callback Parameter |
| ---------- | -------------------------------------- | ------------------ |
| change     | Triggered when the bound value changes | The current value  |
