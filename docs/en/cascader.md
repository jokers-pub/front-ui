## Cascader

When a dataset has clear hierarchical relationships, the cascader can be used to view and select level by level.

### Basic Usage

There are two ways to trigger submenu expansion. Simply specify the options array via the `options` property of Cascader to render a cascading selector. The trigger method for expanding submenus can be defined via `props.expandTrigger`.

!!!demo1!!!

### Disabled Options

Declare a disabled option by setting the `disabled` field in the data source. In this example, the first element in the array specified by `options` contains the `disabled: true` key-value pair, making it disabled. By default, Cascader checks whether the `disabled` field for each item in the data is `true`. If your data uses a different field name to represent disabled status, you can specify it via the `props.disabled` property (see the API table below). Similarly, the field names for `value`, `label`, and `children` can also be customized in the same way.

!!!demo2!!!

### Clearable

Set the input box to be clearable via the `clearable` property.

!!!demo3!!!

### Show Last Level Only

You can choose to display only the label of the last level of the selected item in the input box, rather than the full path. The `show-all-levels` property defines whether to show the complete path. Setting it to `false` will display only the last level.

!!!demo4!!!

### Multiple Selection

Enable multi-select mode by setting `multiple = true`.

!!!demo5!!!

### Dynamic Loading

Dynamically load options for a level when it is selected.

Enable dynamic loading via `lazy`, and specify the method to load the data source using `lazyload`. The `lazyload` method has two parameters: the first parameter `node` is the currently clicked node, and the second `resolve` is the callback for when data loading is complete (must be called). To more accurately display the node state, you can also add a flag indicating whether the node is a leaf node (default field is `leaf`, which can be modified via `props.leaf`). Otherwise, it will simply determine if the node is a leaf based on whether it has child nodes.

!!!demo6!!!

### Searchable

Quickly search and select options.

Set `filterable` to `true` to enable the search function. By default, it matches nodes whose `label` (or `label` of all parent nodes, determined by `show-all-levels`) contains the input value. You can also use `filter-method` to customize the search logic, which accepts a function with two parameters: the first is the node `node`, and the second is the search keyword `keyword`. Return a boolean to indicate whether there is a match.

!!!demo7!!!

### Custom Node Content

You can customize the content of option nodes via `section` for the cascader's options. The named slot (`section`) passes two fields: `node` and `data`, representing the current node's Node object and data, respectively.

!!!demo8!!!

### Cascader Attributes

| Parameter      | Description                                                                                                | Type                    | Options               | Default     |
| -------------- | ---------------------------------------------------------------------------------------------------------- | ----------------------- | --------------------- | ----------- |
| value          | Binding value for the selected item                                                                        | -                       | —                     | —           |
| options        | Data source for options. Field names can be configured via `Props`                                         | array                   | —                     | —           |
| props          | Configuration options. See the table below for details                                                     | object                  | —                     | —           |
| class          | Custom class styling                                                                                       | string                  | -                     | -           |
| size           | Size                                                                                                       | string                  | medium / small / mini | —           |
| placeholder    | Placeholder text for the input field                                                                       | string                  | —                     | Select      |
| disabled       | Whether disabled                                                                                           | boolean                 | —                     | false       |
| clearable      | Whether the selection is clearable                                                                         | boolean                 | —                     | false       |
| show-all-levels | Whether to show the full path of the selected value in the input field                                      | boolean                 | —                     | true        |
| separator      | Separator for option levels                                                                                | string                  | —                     | Slash ('/') |
| filterable     | Whether options are searchable                                                                             | boolean                 | —                     | —           |
| filter-method  | Custom search logic. The first parameter is the node `node`, and the second is the keyword `keyword`. Return a boolean to indicate a match. | function(node, keyword) | -                     | -           |

### Cascader Events

| Event Name | Description                          | Callback Parameters     |
| ---------- | ------------------------------------ | ----------------------- |
| change     | Triggered when the selected node changes | Value of the selected node |

### Cascader Slot

| Name    | Description                                      |
| ------- | ----------------------------------------------- |
| default | Custom content for option nodes, parameters: { node } |

### Props

| Parameter       | Description                                                                                               | Type                                                                                     | Options       | Default     |
| --------------- | --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------- | ----------- |
| expandTrigger   | Method for expanding submenus                                                                             | string                                                                                   | click / hover | click       |
| multiple        | Whether multiple selection is allowed                                                                     | boolean                                                                                  | -             | false       |
| emitPath        | Whether to return an array of values from each level of the selected node's path. If false, only the node's value is returned. | boolean                                                                                  | -             | true        |
| lazy            | Whether to load child nodes dynamically. Requires the `lazyLoad` method.                                  | boolean                                                                                  | -             | false       |
| lazyLoad        | Method for dynamically loading data. Only works when `lazy` is true.                                      | function(node, resolve), where `node` is the currently clicked node, and `resolve` is the callback for completed loading (must be called). | -             | -           |
| value           | Key name for the option's value field                                                                     | string                                                                                   | —             | value       |
| label           | Key name for the option's label field                                                                     | string                                                                                   | —             | label       |
| children        | Key name for the option's child options field                                                             | string                                                                                   | —             | children    |
| disabled        | Key name for the option's disabled state field                                                            | string                                                                                   | —             | disabled    |
| leaf            | Key name for the flag indicating whether the option is a leaf node                                        | string                                                                                   | —             | leaf        |