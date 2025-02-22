## Table

Used to display multiple pieces of data with similar structures, and can perform operations such as sorting, filtering, comparison, or other custom operations on the data.

### Basic Table

Basic usage for table display.

!!!demo1!!!

### Striped Table

Using a striped table makes it easier to distinguish data in different rows.

The `stripe` attribute can create a striped table. It accepts a `Boolean`, with the default value of `false`. Setting it to `true` enables the striped effect.

!!!demo2!!!

### Bordered Table

By default, the Table component does not have vertical borders. If needed, you can use the `border` attribute, which accepts a `Boolean`. Setting it to `true` enables the borders.

!!!demo3!!!

### Fixed Table Header

When there is too much vertical content, you can choose to fix the table header.

Just define the `height` attribute in the `jk-table` element, and a table with a fixed header can be achieved without additional code.

!!!demo4!!!

### Fixed Columns

When there is too much horizontal content, you can choose to fix the columns.

To fix columns, use the `fixed` attribute, which accepts a `Boolean` value or `left`/`right`, indicating whether to fix on the left or right.

!!!demo5!!!

### Fluid Height

When the amount of data changes dynamically, you can set a maximum height for the Table.

Specify the maximum height for the Table by setting the `max-height` attribute. If the height required by the table is greater than the maximum height, a scroll bar will be displayed.

!!!demo6!!!

### Multi-level Table Header

When the data structure is relatively complex, multi-level table headers can be used to show the hierarchical relationship of the data.

Just nest `jk-table-column` inside `jk-table-column` to achieve a multi-level table header.

!!!demo7!!!

### Selecting Rows

You can enable row selection through the `select` attribute. Setting the `select` attribute to **true** represents enabling the selection mode, and you can configure the `mutiple` attribute to enable the multi-selection mode.

You can add a `jk-table-column` component and configure the `type` as **selection** to display the selection assist column. **Note** that if the assist column is enabled, clicking on the row will no longer perform the selection operation.

Observe the change of the selection status through the event `selected-change`. Whether it is a single selection or a multiple selection, the return value is an array, and each item in the array is the row data.

You can also read and control the selected rows through the following methods:

-   `getSelectedRow` Get the selected row(s). In the single-selection mode, single-row data is returned, and in the multi-selection mode, multiple-row data is returned.
-   `setSelectedRow` Select rows. You can pass in multiple-row or single-row data. **Note** that in the single-selection mode, only the first item of data will be selected when multiple-row data is passed in.
-   `clearSelectedRow` Clear the selected rows.
-   `selectAll` In the multi-selection mode, all non-disabled data can be selected through this method.

Single-selection mode example:

!!!demo8!!!

Multi-selection mode example:

!!!demo9!!!

### Sorting

Sorting the table allows for quick data lookup or comparison.

Setting the `sortable` attribute in a column enables sorting based on that column. It accepts a `Boolean`, with the default value of `false`.
You can set the default sorted column and sorting order through the `default-sort` attribute of the Table. You can use `sort-method` to customize the sorting rule. The `default-sort-order` attribute defaults to **ascending**, and can be configured as **descending** to switch the sorting method.

If backend sorting is required, set `sortable` to `custom`, and at the same time, listen to the `sort-change` event on the Table. In the event callback, you can obtain the field name and sorting order of the current sorting, so as to request the sorted table data from the interface.

!!!demo10!!!

Custom sorting, simulating server-side sorting

!!!demo11!!!

### Filtering

Filtering the table allows you to quickly find the data you want to view.

Setting the `filter` and `filter-method` attributes in a column enables filtering for that column. `filter` is an array. If not set, it will default to trying to display all optional values of the current column. `filter-method` is a method used to determine whether certain data is displayed. It is passed three parameters: `current row data`, `filter condition value`, and `filter column`.

The `filter` can be configured as an array. The array can be of type **string[]**, or it can be used for translation of filter options, for example:

```js
[
    { value: "1", text: "Male" },
    { value: "0", text: "Female" }
];
```

!!!demo12!!!

### Index Column

Display the index column by configuring the `type="index"` of the `jk-table-column` component, and configure the starting index through the `index` attribute. The default starting position is 1.

!!!demo13!!!

### Custom Column Template

Customize the display content of columns and combine with other components.
Through `RenderSection`, you can obtain data such as `value`, `row`, `rowIndex`, `columnIndex`, `column`, and `store` (table data management). Refer to the demo for usage.

The `td` area represents the rendering of table content cells, and the `th` area represents the rendering of table headers.

!!!demo14!!!

### Expanding Rows

When there is too much row content and you don't want to display a horizontal scroll bar, you can use the Table's expanding row function.
By setting `type="expand"` and `section('expand',data)`, the expanding row function can be enabled. The template of `jk-table-column` will be rendered as the content of the expanded row. The `data` parameter includes: `current row data`, `row index`, and `store data management`.

!!!demo15!!!

### Tree List

Supports the display of tree-type data. When a `row` contains a `children` field, it is regarded as tree-shaped data. When rendering tree-shaped data, `row-key` must be specified. It supports asynchronous loading of child node data. Set the `lazy` property of the Table to `true` and the loading function `load`. Specify which rows contain child nodes by specifying the `isLeafKey` field in the `row`.

> You can configure the node property and the leaf property by changing `childrenKey` and `isLeafKey`.

!!!demo16!!!

Asynchronous loading

!!!demo17!!!

> Note that if sorting, filtering, or an index column is enabled for a tree-shaped list, it will only operate on the first-level list and not on the subsets.

### Size

Modify the size of the table by changing the `size` attribute.

!!!demo18!!!

### Synchronous Loading of Big Data

Loading large amounts of data (800 entries).

!!!demo19!!!

### Table Attributes

| Parameter                  | Description                                                                                                                                                                                                                                                                      | Type                                                  | Optional Values       | Default Value |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | --------------------- | ------------- |
| data                       | The data to be displayed                                                                                                                                                                                                                                                         | array                                                 | —                     | —             |
| class                      | Custom class style                                                                                                                                                                                                                                                               | string                                                | -                     | -             |
| height                     | The height of the Table. By default, it is auto-height. If `height` is of type `number`, the unit is px; if `height` is of type `string`, this height will be set as the value of the Table's `style.height`, and the height of the Table will be controlled by external styles. | string/number                                         | —                     | —             |
| max-height                 | The maximum height of the Table. Legal values are numbers or heights with the unit of px.                                                                                                                                                                                        | string/number                                         | —                     | —             |
| stripe                     | Whether it is a striped table                                                                                                                                                                                                                                                    | boolean                                               | —                     | false         |
| border                     | Whether to have vertical borders                                                                                                                                                                                                                                                 | boolean                                               | —                     | false         |
| size                       | The size of the Table                                                                                                                                                                                                                                                            | string                                                | medium / small / mini | —             |
| show-header                | Whether to display the table header                                                                                                                                                                                                                                              | boolean                                               | —                     | true          |
| row-class-name             | The callback method for the `className` of the row. A string can also be used to set a fixed `className` for all rows.                                                                                                                                                           | Function({row, rowIndex})/String                      | —                     | —             |
| row-style                  | The callback method for the `style` of the row. A fixed `Object` can also be used to set the same `Style` for all rows.                                                                                                                                                          | Function({row, rowIndex})/Object                      | —                     | —             |
| cell-class-name            | The callback method for the `className` of the cell. A string can also be used to set a fixed `className` for all cells.                                                                                                                                                         | Function({row, column, rowIndex, columnIndex})/String | —                     | —             |
| cell-style                 | The callback method for the `style` of the cell. A fixed `Object` can also be used to set the same `Style` for all cells.                                                                                                                                                        | Function({row, column, rowIndex, columnIndex})/Object | string                | —             |
| header-row-class-name      | The callback method for the `className` of the table header row. A string can also be used to set a fixed `className` for all table header rows.                                                                                                                                 | Function({row, rowIndex})/String                      | —                     | —             |
| header-row-style           | The callback method for the `style` of the table header row. A fixed `Object` can also be used to set the same `Style` for all table header rows.                                                                                                                                | Function({row, rowIndex})/Object                      | —                     | —             |
| header-cell-class-name     | The callback method for the `className` of the table header cell. A string can also be used to set a fixed `className` for all table header cells.                                                                                                                               | Function({row, column, rowIndex, columnIndex})/String | —                     | —             |
| header-cell-style          | The callback method for the `style` of the table header cell. A fixed `Object` can also be used to set the same `Style` for all table header cells.                                                                                                                              | Function({row, column, rowIndex, columnIndex})/Object | —                     | —             |
| empty-text                 | The text content to be displayed when there is no data. It can also be set through `section="empty"`                                                                                                                                                                             | String                                                | —                     | No data yet   |
| default-sort               | The default sorted column                                                                                                                                                                                                                                                        | string                                                | -                     | -             |
| default-sort-order         | The default sorting rule                                                                                                                                                                                                                                                         | ascending                                             | descending            | -             |
| childrenKey                | When it is a tree-structured list, it is used to specify the name of the subset property                                                                                                                                                                                         |                                                       | string                | children      |
| isLeafKey                  | When it is a tree-structured list, it is used to specify the name of the property indicating whether there is a subset                                                                                                                                                           |                                                       | string                | -             |
| dataChangeNotClearSelected | Whether to not clear the selected items after the data changes                                                                                                                                                                                                                   |                                                       | boolean               | -             |
| defaultExpandAll           | Whether to expand all rows by default                                                                                                                                                                                                                                            |                                                       | boolean               | -             |

### Table Events

| Event Name      | Description                                                             | Parameters        |
| --------------- | ----------------------------------------------------------------------- | ----------------- |
| selected-change | This event is triggered when the selection changes                      | Selected rows[]   |
| sort-change     | This event is triggered when the sorting conditions of the table change | { column, order } |
| expand-change   | This event is triggered when a user expands or closes a row             | row, expand       |

### Table Methods

| Method Name      | Description                                                                                                                                                                                                                                          | Parameters                 |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| clearSelectedRow | Used for multi-selection tables to clear the user's selection                                                                                                                                                                                        | —                          |
| selectAll        | Used for multi-selection tables to toggle the selection state of all rows                                                                                                                                                                            | -                          |
| setSelectedRow   | Used for single-selection tables to set a certain row as the selected row                                                                                                                                                                            | row                        |
| clearSort        | Used to clear the sorting conditions, and the data will return to the unsorted state                                                                                                                                                                 | —                          |
| clearFilter      | When no parameters are passed in, it is used to clear all filtering conditions, and the data will return to the unfiltered state. An array composed of `column.key` can also be passed in to clear the filtering conditions of the specified columns | column.key                 |
| sort             | Manually sort the Table. The `key` attribute in the parameter specifies the sorted column, and `order` specifies the sorting order.                                                                                                                  | key: string, order: string |
| getSelectRow     | Get the selected row(s)                                                                                                                                                                                                                              | —                          |

### Table-column Attributes

| Parameter     | Description                                                                                                                                                                                                                                                          | Type                                    | Optional Values        | Default Value |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | ---------------------- | ------------- |
| type          | The type of the corresponding column. If `selection` is set, a single-selection/multi-selection box will be displayed; if `index` is set, the index of the row (starting from 1) will be displayed; if `expand` is set, it will be displayed as an expandable button | string                                  | selection/index/expand | —             |
| index         | If `type = index` is set, the index can be customized by passing the `index` attribute                                                                                                                                                                               | number, Function(index)                 | -                      | -             |
| key           | The `key` of the column. If the `filter-change` event is needed, this attribute is required to identify which column's filtering condition it is                                                                                                                     | string                                  | —                      | —             |
| label         | The displayed title                                                                                                                                                                                                                                                  | string                                  | —                      | —             |
| width         | The width of the corresponding column                                                                                                                                                                                                                                | string                                  | —                      | —             |
| fixed         | Whether the column is fixed on the left or right. `true` means fixed on the left                                                                                                                                                                                     | string, boolean                         | true, left, right      | —             |
| sortable      | Whether the corresponding column can be sorted. If set to 'custom', it means the user hopes for remote sorting, and the `sort-change` event of the Table needs to be listened to                                                                                     | boolean, string                         | true, false, 'custom'  | false         |
| sort-method   | The method used when sorting the data, only valid when `sortable` is set to `true`. Custom data sorting, returns new data                                                                                                                                            | —                                       | —                      |
| align         | Alignment method                                                                                                                                                                                                                                                     | String                                  | left/center/right      | left          |
| header-align  | The alignment method of the table header. If this item is not set, the alignment method of the table will be used                                                                                                                                                    | String                                  | left/center/right      | —             |
| class         | The class of the column                                                                                                                                                                                                                                              | string                                  | —                      | —             |
| filter        | The options for data filtering, in array format. The elements in the array need to have `text` and `value` attributes. By default, it filters according to the data of the current column.                                                                           | Array<{ text, value }> or Array<string> | —                      | —             |
| filter-method | The method used for data filtering. If it is a multi-selection filter option, it will be executed multiple times for each piece of data, and the data will be displayed if any execution returns `true`.                                                             | Function(row, filters, col)             | —                      | —             |

### Table-column Sections

| Name   | Description                                                                                               |
| ------ | --------------------------------------------------------------------------------------------------------- |
| td     | Customize the content of the column. The parameters are {value, row,rowIndex, column, columnIndex,store } |
| th     | Customize the content of the table header. The parameters are { column, columnIndex,store }               |
| expand | For the expansion of expandable rows, the parameters are { row, rowIndex,store }                          |
