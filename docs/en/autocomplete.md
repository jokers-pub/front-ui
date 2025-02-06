## AutoComplete

Provides corresponding input suggestions based on the input content.

### Basic Usage

`autocomplete` is an input box component with input suggestions. `search-load` is a method attribute that returns input suggestions. In this method, when your input suggestion data is ready, you can return it to the `autocomplete` component through `callback(data)`.
!!!demo1!!!

### Custom Template

You can customize the display of input suggestions.
Use `section` to customize the template of input suggestions. The parameter is `item`, representing the current input suggestion object.
!!!demo2!!!

### Autocomplete Attributes

| Parameter        | Description                                                                                                                        | Type                            | Optional Values | Default Value |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | --------------- | ------------- |
| placeholder      | Placeholder text of the input box                                                                                                  | string                          | —               | —             |
| disabled         | Disable                                                                                                                            | boolean                         | —               | false         |
| value-key        | The key name in the input suggestion object used for display                                                                       | string                          | —               | value         |
| search-load      | The method to return input suggestions. Only when your input suggestion data is resolved, return it by calling `callback(data:[])` | Function(queryString, callback) | —               | —             |
| trigger-on-focus | Whether to display the suggestion list when the input box gets focus                                                               | boolean                         | —               | true          |
| class            | Custom class style                                                                                                                 | string                          | -               | -             |

### Autocomplete Sections

| Name    | Description                                                |
| ------- | ---------------------------------------------------------- |
| default | Customize input suggestions, with the parameter `{ item }` |
| prefix  | Content at the head of the input box                       |
| suffix  | Content at the tail of the input box                       |
| prepend | Pre-placed content of the input box                        |
| append  | Post-placed content of the input box                       |

### Events

| Event Name | Description                                        | Callback Parameters         |
| ---------- | -------------------------------------------------- | --------------------------- |
| select     | Triggered when clicking to select a suggested item | The selected suggested item |
| change     | Triggered when the value of the Input changes      | (value: string \| number)   |

### Methods

| Method Name | Description              | Parameter |
| ----------- | ------------------------ | --------- |
| focus       | Make the input get focus | -         |
