## Select

When there are too many options, use a dropdown menu to display and select content.

### Basic Usage

Basic single-selection widely applicable. The value of `value` is the `value` attribute value of the currently selected `jk-option`.

!!!demo1!!!

### With Disabled Options

In `jk-option`, set the `disabled` value to `true` to disable the option.

!!!demo2!!!

### Clearable Single-selection

Contains a clear button to clear the selector to its initial state.

Set the `clearable` attribute for `jk-select`, and the selector can be cleared. Note that the `clearable` attribute is only applicable to single-selection.

!!!demo3!!!

### Multiple-selection Dropdown

Basic multiple-selection widely applicable, with selected items displayed as Tags.

!!!demo4!!!

### Custom Template

You can customize the alternative options.

!!!demo5!!!

### Grouping

Display alternative options in groups.

!!!demo6!!!

### Searchable

You can quickly find options using the search function.

Adding the `filterable` attribute enables the search function. By default, Select will find all options whose `label` attribute contains the input value. If you want to use other search logic, you can achieve this by passing in a `filter-method`. `filter-method` is a `Function` that will be called when the input value changes, with the current input value as the parameter.

!!!demo7!!!

### Multiple-selection and Searchable

!!!demo8!!!

### Size

You can specify the size of the input box through the `size` attribute. Besides the default size, there are also three sizes: medium, small, and mini.

!!!demo9!!!

### Select Attributes

| Parameter      | Description                                                                                                                                                                                         | Type                      | Optional Values   | Default Value    |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ----------------- | ---------------- |
| value          | Bound value                                                                                                                                                                                         | boolean / string / number | —                 | —                |
| class          | Custom class style                                                                                                                                                                                  | string                    | -                 | -                |
| multiple       | Whether it is multiple-selection                                                                                                                                                                    | boolean                   | —                 | false            |
| disabled       | Whether it is disabled                                                                                                                                                                              | boolean                   | —                 | false            |
| value-key      | The key name used as the unique identifier of the value, required when the bound value is of object type                                                                                            | string                    | —                 | value            |
| size           | Size of the input box                                                                                                                                                                               | string                    | medium/small/mini | —                |
| clearable      | Whether the option can be cleared                                                                                                                                                                   | boolean                   | —                 | false            |
| multiple-limit | The maximum number of items that the user can select in multiple-selection. If it is 0, there is no limit                                                                                           | number                    | —                 | 0                |
| name           | Used to connect to the `name` attribute in the form                                                                                                                                                 | string                    | —                 | —                |
| placeholder    | Placeholder                                                                                                                                                                                         | string                    | —                 | Please select    |
| filterable     | Whether it is searchable                                                                                                                                                                            | boolean                   | —                 | false            |
| filter-method  | Custom search method. When querying, the keyword, selected label, and option value will be passed into this method. This method returns `true`/`false` to determine whether the option is displayed | function                  | —                 | —                |
| remote         | Whether it is a remote search                                                                                                                                                                       | boolean                   | —                 | false            |
| remote-method  | Remote search method                                                                                                                                                                                | function                  | —                 | —                |
| loading        | Whether data is being fetched remotely                                                                                                                                                              | boolean                   | —                 | false            |
| loading-text   | The text displayed when loading remotely                                                                                                                                                            | string                    | —                 | Loading...       |
| no-match-text  | The text displayed when there is no match for the search condition. It can also be set using the `section "empty"`                                                                                  | string                    | —                 | No matching data |
| no-data-text   | The text displayed when there are no options. It can also be set using the `section "empty"`                                                                                                        | string                    | —                 | No data          |
| fullWidth      | Whether the width is 100%                                                                                                                                                                           | boolean                   | —                 | -                |
| allowCreate    | Whether to allow the creation of new items                                                                                                                                                          | boolean                   | —                 | -                |
| createText     | Text prompt for creating new items                                                                                                                                                                  | string                    | —                 | Create new value |

### Select Events

| Event Name | Description                                                       | Callback Parameters                           |
| ---------- | ----------------------------------------------------------------- | --------------------------------------------- |
| change     | Triggered when the selected value changes                         | The currently selected value                  |
| new        | Triggered when clicking to create a new value in single-selection | The query value (input value in the text box) |

### Select Sections

| Name    | Description                    |
| ------- | ------------------------------ |
| default | List of Option components      |
| empty   | List when there are no options |

### Option Group Attributes

| Parameter | Description                                  | Type    | Optional Values | Default Value |
| --------- | -------------------------------------------- | ------- | --------------- | ------------- |
| label     | The group name of the grouping               | string  | —               | —             |
| disabled  | Whether to disable all options in this group | boolean | —               | false         |

### Option Attributes

| Parameter | Description                                                               | Type                 | Optional Values | Default Value |
| --------- | ------------------------------------------------------------------------- | -------------------- | --------------- | ------------- |
| value     | The value of the option                                                   | string/number/object | —               | —             |
| label     | The label of the option. If not set, it is the same as `value` by default | string/number        | —               | —             |
| disabled  | Whether to disable this option                                            | boolean              | —               | false         |
