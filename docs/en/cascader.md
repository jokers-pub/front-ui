## Cascader

When a data set has a clear hierarchical structure, it can be viewed and selected step by step through the cascader.

### Basic Usage

There are two ways to trigger the sub-menu. Just specify the option array for the `options` attribute of the `Cascader` to render a cascader. The trigger method for expanding the sub-level menu can be defined through `props.expandTrigger`.
!!!demo1!!!

### Disabled Options

Declare that an option is disabled by setting the `disabled` field in the data source. In this example, the first element in the array specified by `options` contains the key-value pair `disabled: true`, so it is disabled. By default, the `Cascader` checks whether the `disabled` field of each item in the data is `true`. If the field name representing the disabled meaning in your data is not `disabled`, it can be specified through the `props.disabled` property (see the API table below for details). Of course, the field names `value`, `label`, and `children` can also be specified in the same way.
!!!demo2!!!

### Clearable

Set the input box to be clearable through `clearable`.
!!!demo3!!!

### Show Only the Last Level

Only the label of the last level of the selected item can be displayed in the input box, instead of the complete path where the selected item is located. The `show-all-levels` property defines whether to display the complete path. Assigning it as `false` will show only the last level.
!!!demo4!!!

### Multiple Selection

The multiple-selection mode can be enabled by setting `multiple = true`.
!!!demo5!!!

### Dynamic Loading

When a certain level is selected, dynamically load the options at that level.
Enable dynamic loading through `lazy`, and set the method for loading the data source through `lazyload`. The `lazyload` method has two parameters. The first parameter `node` is the currently clicked node, and the second `resolve` is the callback when the data loading is completed (must be called). To more accurately display the state of the node, a flag indicating whether the node is a leaf node can also be added to the node data (the default field is `leaf`, which can be modified through `props.leaf`). Otherwise, it will simply judge whether it is a leaf node by the presence or absence of child nodes.
!!!demo6!!!

### Searchable

Options can be quickly searched and selected.
Assigning `filterable` as `true` can turn on the search function. By default, it will match the options whose `label` of the node or the `label` of all parent nodes (determined by `show-all-levels`) contains the input value. You can also customize the search logic with `filter-method`, which accepts a function. The first parameter is the node `node`, and the second parameter is the search keyword `keyword`. Whether it hits is indicated by returning a boolean value.
!!!demo7!!!

### Customize Node Content

The node content of the alternative options can be customized. The node content of the alternative options of the cascader can be customized through `section`. The named area (section) will be passed two fields, `node` and `data`, representing the Node object and data of the current node respectively.
!!!demo8!!!

### Cascader Attributes

| Parameter       | Description                                                                                                                                                                      | Type                    | Optional Values       | Default Value |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | --------------------- | ------------- |
| value           | The bound value of the selected item                                                                                                                                             | -                       | —                     | —             |
| options         | The data source of available options, and the key names can be configured through the `Props` attribute                                                                          | array                   | —                     | —             |
| props           | Configuration options, see the table below for details                                                                                                                           | object                  | —                     | —             |
| class           | Custom class style                                                                                                                                                               | string                  | -                     | -             |
| size            | Size                                                                                                                                                                             | string                  | medium / small / mini | —             |
| placeholder     | Placeholder text of the input box                                                                                                                                                | string                  | —                     | Please select |
| disabled        | Whether it is disabled                                                                                                                                                           | boolean                 | —                     | false         |
| clearable       | Whether it supports clearing options                                                                                                                                             | boolean                 | —                     | false         |
| show-all-levels | Whether to display the complete path of the selected value in the input box                                                                                                      | boolean                 | —                     | true          |
| separator       | Option separator                                                                                                                                                                 | string                  | —                     | Slash '/'     |
| filterable      | Whether options can be searched                                                                                                                                                  | boolean                 | —                     | —             |
| filter-method   | Custom search logic. The first parameter is the node `node`, and the second parameter is the search keyword `keyword`. Whether it hits is indicated by returning a boolean value | function(node, keyword) | -                     | -             |

### Cascader Events

| Event Name | Description                              | Callback Parameter             |
| ---------- | ---------------------------------------- | ------------------------------ |
| change     | Triggered when the selected node changes | The value of the selected node |

### Cascader Section

| Name    | Description                                                                          |
| ------- | ------------------------------------------------------------------------------------ |
| default | Customize the node content of the alternative options, with the parameter `{ node }` |

### Props

| Parameter     | Description                                                                                                                                                                                    | Type                                                                                                                                                  | Optional Values | Default Value |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ------------- |
| expandTrigger | The expansion method of the secondary menu                                                                                                                                                     | string                                                                                                                                                | click / hover   | 'click'       |
| multiple      | Whether multiple selection is allowed                                                                                                                                                          | boolean                                                                                                                                               | -               | false         |
| emitPath      | When the selected node changes, whether to return an array composed of the values of each level of the menu where the node is located. If set to false, only the value of the node is returned | boolean                                                                                                                                               | -               | true          |
| lazy          | Whether to dynamically load child nodes, needs to be used in combination with the `lazyLoad` method                                                                                            | boolean                                                                                                                                               | -               | false         |
| lazyLoad      | The method for loading dynamic data, only valid when `lazy` is true                                                                                                                            | function(node, resolve), where `node` is the currently clicked node and `resolve` is the callback when the data loading is completed (must be called) | -               | -             |
| value         | Specify the value of the option as a certain property value of the option object                                                                                                               | string                                                                                                                                                | —               | 'value'       |
| label         | Specify the label of the option as a certain property value of the option object                                                                                                               | string                                                                                                                                                | —               | 'label'       |
| children      | Specify the sub-options of the option as a certain property value of the option object                                                                                                         | string                                                                                                                                                | —               | 'children'    |
| disabled      | Specify the disabled state of the option as a certain property value of the option object                                                                                                      | string                                                                                                                                                | —               | 'disabled'    |
| leaf          | Specify the flag of the leaf node of the option as a certain property value of the option object                                                                                               | string                                                                                                                                                | —               | 'leaf'        |
