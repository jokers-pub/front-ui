## AutoComplete 

Provides input suggestions based on entered content.

### Basic Usage

autocomplete is an input component with suggestion capabilities. `search-load` is a method property that returns input suggestions. Within this method, you can pass the prepared suggestion data back to the autocomplete component via `callback(data)` when ready.

!!!demo1!!!

### Custom Template

Customize the display of input suggestions.

Use `section` to customize the suggestion template. The parameter is `item`, representing the current suggestion object.

!!!demo2!!!

### Attributes

| Parameter        | Description                                                                                     | Type                            | Optional Values | Default |
|------------------|-------------------------------------------------------------------------------------------------|---------------------------------|-----------------|---------|
| placeholder      | Placeholder text for the input box                                                             | string                          | —               | —       |
| disabled         | Disable the component                                                                           | boolean                         | —               | false   |
| value-key        | Key in the suggestion object used for display                                                   | string                          | —               | value   |
| search-load      | Method to return suggestions. Call `callback(data:[])` when suggestion data is resolved         | Function(queryString, callback) | —               | —       |
| trigger-on-focus | Whether to show suggestions when input is focused                                               | boolean                         | —               | true    |
| class            | Custom CSS class                                                                                | string                          | -               | -       |

### Slots

| Name    | Description                              |
|---------|------------------------------------------|
| default | Custom suggestion template (param: { item }) |
| prefix  | Content prepended to input box           |
| suffix  | Content appended to input box            |
| prepend | Content before input box                 |
| append  | Content after input box                  |

### Events

| Event Name | Description                         | Callback Param                       |
|------------|-------------------------------------|--------------------------------------|
| select     | Triggered when selecting a suggestion | Selected suggestion item             |
| change     | Triggered when input value changes | (value: string \| number)            |

### Methods

| Method  | Description               | Param |
|---------|---------------------------|-------|
| focus   | Focus the input element   | -     |