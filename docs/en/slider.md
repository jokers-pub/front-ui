## Slider

Select within a fixed range by dragging the slider.

### Basic Usage

When dragging the slider, display the current value. Customize the initial value of the slider by setting the bound value.

!!!demo1!!!

### Discrete Values

Options can be discrete. Changing the value of `step` can change the step size. Setting the `show-stops` property can display breakpoints.

!!!demo2!!!

### With Input Box

Set the precise value through the input box. Setting the `show-input` property will display an input box on the right.

> When `range` or `show-input` is set, the `show-input` property will not take effect.

!!!demo3!!!

### Range Selection

Supports selecting a certain numerical range. Setting `range` enables range selection. At this time, the bound value is an array, and its elements are the minimum and maximum boundary values respectively.

!!!demo4!!!

### Vertical Mode

Setting `vertical` can make the Slider in vertical mode. At this time, the `height` property must be set.

!!!demo5!!!

### Display Marks

Setting the `marks` property can display marks.

!!!demo6!!!

### Attributes

| Parameter           | Description                                                                                                                                       | Type               | Optional Values               | Default Value |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ----------------------------- | ------------- |
| value               | Value                                                                                                                                             | number or number[] | —                             | 0             |
| class               | Custom class style                                                                                                                                | string             | -                             | -             |
| min                 | Minimum value                                                                                                                                     | number             | —                             | 0             |
| max                 | Maximum value                                                                                                                                     | number             | —                             | 100           |
| disabled            | Whether to disable                                                                                                                                | boolean            | —                             | false         |
| step                | Step size                                                                                                                                         | number             | —                             | 1             |
| show-input          | Whether to display the input box, only valid in non-range selection                                                                               | boolean            | —                             | false         |
| show-input-controls | Whether to display the control buttons of the input box when the input box is displayed                                                           | boolean            | —                             | true          |
| input-size          | The size of the input box, please refer to the input API for details                                                                              | string             | large / medium / small / mini | small         |
| show-stops          | Whether to display breakpoints                                                                                                                    | boolean            | —                             | false         |
| show-tooltip        | Whether to display the tooltip                                                                                                                    | boolean            | —                             | true          |
| format-tooltip      | Format the tooltip message                                                                                                                        | function(value)    | —                             | —             |
| range               | Whether it is range selection                                                                                                                     | boolean            | —                             | false         |
| vertical            | Whether it is in vertical mode                                                                                                                    | boolean            | —                             | false         |
| height              | The height of the Slider, required in vertical mode                                                                                               | string             | —                             | —             |
| label               | Screen reader label                                                                                                                               | string             | —                             | —             |
| marks               | Marks. The type of key must be number and the value should be within the closed interval `[min, max]`. Each mark can be set with a separate style | object             | —                             | —             |

### Events

| Event Name | Description                                                                                                     | Callback Parameters |
| ---------- | --------------------------------------------------------------------------------------------------------------- | ------------------- |
| change     | Triggered when the value changes (when dragging with the mouse, it is only triggered after releasing the mouse) | The changed value   |
| input      | This event overrides the trigger timing of `change`. `input` will also be triggered when the slider is dragged  | The changed value   |
