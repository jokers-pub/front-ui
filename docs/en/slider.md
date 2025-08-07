## Slider Component  

Use a slider to select values within a fixed range.  

### Basic Usage  

Display the current value while dragging the slider. Customize the initial value by binding it to a variable.  

!!!demo1!!!  

### Discrete Values  

Options can be discrete. Adjust the `step` property to change the step size. Enable the `show-stops` attribute to display breakpoints.  

!!!demo2!!!  

### With Input Box  

Set precise values via an input box. Enable the `show-input` property to display an input box on the right.  

> When `range` or `show-input` is enabled, the `show-input` property will not take effect.  

!!!demo3!!!  

### Range Selection  

Supports selecting a value range. Enable `range` to activate range selection, where the bound value becomes an array containing the minimum and maximum boundary values.  

!!!demo4!!!  

### Vertical Mode  

Set `vertical` to transform the slider into vertical mode. The `height` attribute must be specified in this case.  

!!!demo5!!!  

### Display Markers  

Use the `marks` property to display markers.  

!!!demo6!!!  

### Attributes  

| Attribute         | Description                                                                                     | Type                  | Accepted Values                | Default  |
| ----------------- | ---------------------------------------------------------------------------------------------- | --------------------- | ------------------------------ | -------- |
| value             | The slider value                                                                               | number / number[]     | —                              | 0        |
| class             | Custom CSS class                                                                               | string                | —                              | —        |
| min               | Minimum value                                                                                  | number                | —                              | 0        |
| max               | Maximum value                                                                                  | number                | —                              | 100      |
| disabled          | Whether the slider is disabled                                                                 | boolean               | —                              | false    |
| step              | Step size                                                                                      | number                | —                              | 1        |
| show-input        | Display an input box (only effective in non-range mode)                                        | boolean               | —                              | false    |
| show-input-controls | Whether to show control buttons for the input box (when enabled)                          | boolean               | —                              | true     |
| input-size        | Input box size; refer to the input component's API for details                                 | string                | large / medium / small / mini  | small    |
| show-stops        | Display breakpoints                                                                            | boolean               | —                              | false    |
| show-tooltip      | Display tooltip                                                                                | boolean               | —                              | true     |
| format-tooltip    | Format tooltip message                                                                         | function(value)       | —                              | —        |
| range             | Enable range selection                                                                         | boolean               | —                              | false    |
| vertical          | Enable vertical mode                                                                           | boolean               | —                              | false    |
| height            | Slider height (required in vertical mode)                                                      | string                | —                              | —        |
| label             | Screen reader label                                                                            | string                | —                              | —        |
| marks             | Markers (keys must be numbers within `[min, max]`; each marker can have custom styling)        | object                | —                              | —        |

### Events  

| Event Name | Description                                                                  | Callback Parameters      |  
| ---------- | ---------------------------------------------------------------------------- | ------------------------ |  
| change     | Triggered when the value changes (only after releasing the mouse when dragging) | Updated value           |  
| input      | Fires continuously while dragging the slider (overrides `change` timing)     | Updated value           |