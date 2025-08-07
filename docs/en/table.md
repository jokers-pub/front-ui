## Table

Used for displaying multiple sets of structured data. Supports sorting, filtering, comparison, and other custom operations.

### Basic Table 

Basic table display usage.

!!!demo1!!!

### Striped Table  

A striped table allows easier differentiation between rows.

The `stripe` property creates a striped table. It accepts a `Boolean` value, defaulting to `false`. Set to `true` to enable.

!!!demo2!!!

### Bordered Table  

By default, the Table component does not have vertical borders. If needed, use the `border` property which accepts a `Boolean` (set to `true`).

!!!demo3!!!

### Fixed Header  

When vertical content is excessive, headers can be fixed.

Defining the `height` property on the `jk-table` element enables fixed headers without additional code.

!!!demo4!!!

### Fixed Columns  

When horizontal content is excessive, columns can be fixed.

Use the `fixed` property, which accepts a Boolean or `left`/`right` to specify fixed side.

!!!demo5!!!

### Fluid Height  

When data dynamically changes, set a maximum height for the Table.

Configure `max-height` to constrain table height. If content exceeds this, a scrollbar appears.

!!!demo6!!!

### Multi-Level Headers  

For complex data structures, multi-level headers display hierarchical relationships.

Nest `jk-table-column` within `jk-table-column` to implement this.

!!!demo7!!!

### Row Selection  

Enable row selection via the `select` property. Set to **true** for single-select mode or `mutiple` for multi-select.  

Adding a `jk-table-column` with type **selection** displays a selection auxiliary column. *Note*: When enabled, clicking rows no longer triggers selection.

The `selected-change` event monitors selection changes, returning an array of selected rows (for both modes).  

Selection can be controlled via:  

- `getSelectedRow`: Gets selected rows (single/multi)  
- `setSelectedRow`: Selects rows (multi-select inputs accept arrays but only select first item in single mode)  
- `clearSelectedRow`: Clears selection  
- `selectAll`: In multi-select mode, selects all non-disabled data  

Single-select demo:  

!!!demo8!!!  

Multi-select demo:  

!!!demo9!!!  

### Sorting  

Sort tables to quickly locate or compare data.  

Set `sortable` on columns to enable sorting (default `false`).  
Configure defaults via `default-sort` (column and order). Use `sort-method` for custom rules. `default-sort-order` defaults to **ascending**; set to **descending** to reverse.  

For server-side sorting, set `sortable` to `custom` and listen for `sort-change` to get sorting params.  

!!!demo10!!!  

Custom sorting (simulated server-side):  

!!!demo11!!!  

### Filtering  

Filter tables to quickly locate data.  

Set `filter` (values) and `filter-method` (logic) on columns. `filter` displays available options; if unset, shows all unique column values. The method receives: `row data`, `filter value`, and `filter column`.  

`filter` accepts arrays like:  

```js 
[
    { value: "1", text: "Male" },
    { value: "0", text: "Female" }
];
```

!!!demo12!!!  

### Index Column  

Set column type="index" to display indices. The `index` property sets the starting number (default: 1).  

!!!demo13!!!  

### Custom Column Templates  

Customize column content by combining components.  
`RenderSection` provides access to: value, row, rowIndex, columnIndex, column, and store (table data management). See demo.  

`td` renders cell content; `th` renders headers.  

!!!demo14!!!  

### Expandable Rows  

For rows with excessive content (avoiding horizontal scroll), use expandable rows.  
Set type="expand" and `section('expand',data)` to enable. `jk-table-column` templates render as expanded content, where `data` includes: `row data`, `row index`, `store`.  

!!!demo15!!!  

### Tree Table  

Displays hierarchical data. Rows with `children` are treated as tree nodes. Requires `row-key`. Supports async loading via `lazy=true` and `load` function. The `isLeafKey` field indicates leaf nodes.  

> Configure `childrenKey` and `isLeafKey` for custom node properties.  

!!!demo16!!!  

Async loading:  

!!!demo17!!!  

*Note*: Sorting/filtering/index columns only affect top-level in tree tables.  

### Size  

Adjust table size via the `size` property.  

!!!demo18!!!  

### Large Data Sync Loading  

Handling large datasets (800+ rows).  

!!!demo19!!!  

### Table Attributes  

| Parameter | Description | Type | Options | Default |  
|-----------|-------------|------|---------|---------|  
| data | Display data | array | — | — |  
| class | Custom CSS class | string | - | - |  
| height | Table height (auto by default). Number = px; string sets style.height. | string/number | — | — |  
| max-height | Maximum height (px or number). | string/number | — | — |  
| stripe | Zebra-striping | boolean | — | false |  
| border | Vertical borders | boolean | — | false |  
| size | Table size | string | medium/small/mini | — |  
| show-header | Show headers | boolean | — | true |  
| row-class-name | Row className callback (or string for fixed class) | Function({row, rowIndex})/String | — | — |  
| row-style | Row style callback (or object) | Function({row, rowIndex})/Object | — | — |  
| cell-class-name | Cell className callback (or string) | Function({row, column, rowIndex, columnIndex})/String | — | — |  
| cell-style | Cell style callback (or object) | Function({row, column, rowIndex, columnIndex})/Object | string | — |  
| header-row-class-name | Header row className callback (or string) | Function({row, rowIndex})/String | — | — |  
| header-row-style | Header row style callback (or object) | Function({row, rowIndex})/Object | — | — |  
| header-cell-class-name | Header cell className callback (or string) | Function({row, column, rowIndex, columnIndex})/String | — | — |  
| header-cell-style | Header cell style callback (or object) | Function({row, column, rowIndex, columnIndex})/Object | — | — |  
| empty-text | Empty data text (or use `section="empty"`) | String | — | No Data |  
| default-sort | Default sort column | string | - | - |  
| default-sort-order | Default sort order | string | ascending/descending | - |  
| childrenKey | Tree data child node key | string | children | children |  
| isLeafKey | Tree data leaf node indicator | string | - | - |  
| dataChangeNotClearSelected | Preserve selection on data change | boolean | - | - |  
| defaultExpandAll | Expand all rows by default | boolean | - | - |  

### Table Events  

| Event | Description | Params |  
|-------|-------------|--------|  
| selected-change | Triggered when selection changes | selected rows[] |  
| sort-change | Triggered when sort criteria changes | { column, order } |  
| expand-change | Triggered when expanding/collapsing rows | row, expand |  

### Table Methods  

| Method | Description | Params |  
|--------|-------------|--------|  
| clearSelectedRow | Clears multi-select selections | — |  
| selectAll | Toggles all rows' selection state | - |  
| setSelectedRow | Sets a single row as selected (single-select) | row |  
| clearSort | Clears sorting | — |  
| clearFilter | Clears filters (optionally by column keys) | column.key |  
| sort | Manual sorting (`key` = column, `order` = direction) | key: string, order: string |  
| getSelectRow | Gets selected rows | — |  

### Table-column Attributes  

| Parameter | Description | Type | Options | Default |  
|-----------|-------------|------|---------|---------|  
| type | Column type: `selection` (checkbox), `index` (row #), `expand` (expandable) | string | selection/index/expand | — |  
| index | Custom index when type="index" (number or function) | number, Function(index) | - | - |  
| key | Column identifier (required for filter-change events) | string | — | — |  
| label | Column header | string | — | — |  
| width | Column width | string | — | — |  
| fixed | Fixed column (left/right) | string, boolean | true/left/right | — |  
| sortable | Enables sorting (`custom` for remote sorting) | boolean, string | true/false/'custom' | false |  
| sort-method | Custom sort function (when sortable=true) | Function | — | — |  
| align | Content alignment | string | left/center/right | left |  
| header-align | Header alignment (inherits from table if unset) | string | left/center/right | — |  
| class | Column CSS class | string | — | — |  
| filter | Filter options (array with text/value) | Array<{ text, value }> or string[] | — | — |  
| filter-method | Filter function (executed per filter value) | Function(row, filters, col) | — | — |  

### Table-column Section  

| Name | Description |  
|------|-------------|  
| td | Custom cell content: {value, row, rowIndex, column, columnIndex, store } |  
| th | Custom header content: { column, columnIndex, store } |  
| expand | Expandable row: { row, rowIndex, store } |