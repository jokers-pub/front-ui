## Checkbox (Multi-selection Checkbox)  

A group of options for multiple selections  

### Basic Usage  

Can be used alone to toggle between two states. The content within the tag serves as the description after the Checkbox button.  

In the `jk-checkbox` component, define the `value` binding variable. For a single Checkbox, the default bound variable value will be a `Boolean`, where `true` indicates the checked state.  

!!!demo1!!!  

### Disabled State  

The disabled state for checkboxes.  

Simply set the `disabled` property on the `jk-checkbox` component. It accepts a `Boolean`, where `true` means disabled.  

!!!demo2!!!  

### Checkbox Group  

Suitable for scenarios where multiple checkboxes are bound to the same array, indicating the selected items in the group by whether they are checked.  

The `jk-checkbox-group` component can manage multiple Checkboxes as a group. Just bind an `Array`-type variable to the `value` property of the Group. The `label` property of each `jk-checkbox` corresponds to the value of that checkbox. If there is no content inside the tag, this property also serves as the description after the Checkbox button. The `label` should match the elements in the array—if the specified value exists, the checkbox will be checked; otherwise, it will be unchecked.  

!!!demo3!!!  

### Indeterminate State  

The `indeterminate` property represents an indeterminate state for the Checkbox, typically used to implement "select all" functionality.  

!!!demo4!!!  

### Limiting the Number of Selectable Items  

Using the `min` and `max` properties can restrict the number of items that can be checked.  

!!!demo5!!!  

### Button Style  

Checkbox groups with button styling.  

!!!demo6!!!  

### With Borders  

Setting the `border` property renders a checkbox with a border. The `size` property of `jk-checkbox` only takes effect when `border` is set.  

!!!demo7!!!  

### Checkbox Attributes  

| Parameter      | Description                                         | Type                      | Optional Values          | Default |
|---------------|-----------------------------------------------------|---------------------------|--------------------------|---------|
| value         | Bound value                                         | string / number / boolean | —                        | —       |
| label         | The value of the Checkbox                          | string / number / boolean | —                        | —       |
| class         | Custom CSS class                                    | string                    | —                        | —       |
| disabled      | Whether disabled                                    | boolean                   | —                        | false   |
| border        | Whether to display border                           | boolean                   | —                        | false   |
| size          | Size of Checkbox (only effective when `border` is `true`) | string                    | medium / small / mini    | —       |
| name          | Native `name` attribute                             | string                    | —                        | —       |
| indeterminate | Sets indeterminate state (controls styling only)    | boolean                   | —                        | —       |

### Checkbox Events  

| Event Name  | Description                                   | Callback Parameter   |
|------------|----------------------------------------------|---------------------|
| change     | Triggered when the selection state changes   | Updated value       |

### Checkbox-button Attributes  

| Parameter  | Description                                             | Type                      | Optional Values | Default |
|-----------|---------------------------------------------------------|---------------------------|-----------------|---------|
| value     | Bound value                                             | string / number / boolean | —               | —       |
| label     | Value when checked (only effective in `checkbox-group`) | string / number / boolean | —               | —       |
| disabled  | Whether disabled                                        | boolean                   | —               | false   |
| name      | Native `name` attribute                                 | string                    | —               | —       |

### Checkbox-button Events  

| Event Name  | Description                                   | Callback Parameter   |
|------------|----------------------------------------------|---------------------|
| change     | Triggered when the selection state changes   | Updated value       |

### Checkbox-group Attributes  

| Parameter  | Description                                                                 | Type    | Optional Values          | Default |
|-----------|-----------------------------------------------------------------------------|---------|--------------------------|---------|
| value     | Bound value                                                                | array   | —                        | []      |
| size      | Size of the checkbox group (only effective for button-style or bordered Checkbox) | string  | medium / small / mini    | —       |
| disabled  | Whether disabled                                                           | boolean | —                        | false   |
| min       | Minimum number of checkboxes that can be checked                           | number  | —                        | -       |
| max       | Maximum number of checkboxes that can be checked                           | number  | —                        | -       |

### Checkbox-group Events  

| Event Name  | Description                                   | Callback Parameter   |
|------------|----------------------------------------------|---------------------|
| change     | Triggered when the selection state changes   | Updated value       |