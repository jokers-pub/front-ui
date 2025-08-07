## Select

When there are too many options, use a dropdown menu to display and select content.  

### Basic Usage  
Basic single selection with broad applicability.  
The `value` corresponds to the `value` property of the currently selected `jk-option`.  

!!!demo1!!!  

### Disabled Option  

Set `disabled` to `true` in `jk-option` to disable the option.  

!!!demo2!!!  

### Clearable Single Select  

Includes a clear button to reset the selector to its initial state.  

Set the `clearable` attribute for `jk-select` to enable clearing. Note that `clearable` only applies to single selection.  

!!!demo3!!!  

### Multiple Selection Dropdown  

Basic multiple selection with broad applicability, displaying selected items as Tags.  

!!!demo4!!!  

### Custom Template  

Options can be customized.  

!!!demo5!!!  

### Grouping  

Group options for better organization.  

!!!demo6!!!  

### Searchable  

Quickly find options using search functionality.  

Enable search functionality by adding the `filterable` attribute. By default, Select filters options whose `label` contains the input value. For custom search logic, provide a `filter-method`. `filter-method` is a `Function` called when the input changes, with the current input value as the parameter.  

!!!demo7!!!  

### Searchable Multiple Selection  

!!!demo8!!!  

### Sizes  

Specify the input size via the `size` attribute. Apart from the default size, medium, small, and mini are also available.  

!!!demo9!!!  

### Select Attributes  

| Parameter        | Description                                                                                                          | Type                      | Options            | Default    |  
|------------------|----------------------------------------------------------------------------------------------------------------------|---------------------------|--------------------|------------|  
| value            | Bound value                                                                                                          | boolean/string/number     | —                  | —          |  
| class            | Custom CSS class                                                                                                     | string                    | —                  | —          |  
| multiple         | Whether multiple selection is enabled                                                                                | boolean                   | —                  | false      |  
| disabled         | Whether the select is disabled                                                                                       | boolean                   | —                  | false      |  
| value-key        | Key name for unique identifier for value, required when binding to an object                                         | string                    | —                  | value      |  
| size             | Input size                                                                                                           | string                    | medium/small/mini  | —          |  
| clearable        | Whether the selection can be cleared                                                                                 | boolean                   | —                  | false      |  
| multiple-limit   | Maximum number of selectable items in multiple mode; 0 means unlimited                                               | number                    | —                  | 0          |  
| name             | Corresponds to the form’s `name` attribute                                                                           | string                    | —                  | —          |  
| placeholder      | Placeholder text                                                                                                     | string                    | —                  | Select     |  
| filterable       | Whether search is enabled                                                                                            | boolean                   | —                  | false      |  
| filter-method    | Custom search method; takes the query text, selected label, and option value, returning `true/false` for visibility  | function                  | —                  | —          |  
| remote           | Whether to use remote search                                                                                         | boolean                   | —                  | false      |  
| remote-method    | Remote search method                                                                                                 | function                  | —                  | —          |  
| loading          | Whether data is being fetched remotely                                                                               | boolean                   | —                  | false      |  
| loading-text     | Text displayed during remote loading                                                                                 | string                    | —                  | Loading... |  
| no-match-text    | Text displayed when no matches are found; can also use `slot="empty"`                                                | string                    | —                  | No matches |  
| no-data-text     | Text displayed when no data is available; can also use `slot="empty"`                                                | string                    | —                  | No data    |  
| fullWidth        | Whether the width is 100%                                                                                            | boolean                   | —                  | —          |  
| allowCreate      | Whether new items can be created                                                                                     | boolean                   | —                  | —          |  
| createText       | Prompt text for creating a new item                                                                                  | string                    | —                  | Create new value |  

### Select Events  

| Event Name | Description                           | Callback Parameters       |  
|------------|---------------------------------------|---------------------------|  
| change     | Triggers when the selected value changes | Current selected value    |  
| new        | Triggers when creating a new value in single select mode | Query value (input text) |  

### Select Slots  

| Name    | Description           |  
|---------|-----------------------|  
| default | List of Option components |  
| empty   | Displayed when no options are available |  

### Option Group Attributes  

| Parameter | Description                           | Type    | Options | Default |  
|-----------|---------------------------------------|---------|---------|---------|  
| label     | Group name                            | string  | —       | —       |  
| disabled  | Whether all options in the group are disabled | boolean | —       | false   |  

### Option Attributes  

| Parameter | Description                                      | Type                 | Options | Default |  
|-----------|--------------------------------------------------|----------------------|---------|---------|  
| value     | Value of the option                              | string/number/object | —       | —       |  
| label     | Label of the option; defaults to `value` if omitted | string/number        | —       | —       |  
| disabled  | Whether the option is disabled                   | boolean              | —       | false   |