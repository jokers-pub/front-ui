## Table 表格

用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

### 基础表格

基础的表格展示用法。

!!!demo1!!!

### 带斑马纹表格

使用带斑马纹的表格，可以更容易区分出不同行的数据。

`stripe`属性可以创建带斑马纹的表格。它接受一个`Boolean`，默认为`false`，设置为`true`即为启用。

!!!demo2!!!

### 带边框表格

默认情况下，Table 组件是不具有竖直方向的边框的，如果需要，可以使用`border`属性，它接受一个`Boolean`，设置为`true`即可启用。

!!!demo3!!!

### 固定表头

纵向内容过多时，可选择固定表头。

只要在`jk-table`元素中定义了`height`属性，即可实现固定表头的表格，而不需要额外的代码。

!!!demo4!!!

### 固定列

横向内容过多时，可选择固定列。

固定列需要使用`fixed`属性，它接受 Boolean 值或者`left` `right`，表示左边固定还是右边固定。

!!!demo5!!!

### 流体高度

当数据量动态变化时，可以为 Table 设置一个最大高度。

通过设置`max-height`属性为 Table 指定最大高度。此时若表格所需的高度大于最大高度，则会显示一个滚动条。

!!!demo6!!!

### 多级表头

数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。

只需要在 `jk-table-column` 里面嵌套 `jk-table-column`，就可以实现多级表头。

!!!demo7!!!

### 选中行

可通过`select`属性来开启选中行，设置`select`属性为**true**代表开启选中模式，可配置为`mutiple`属性来开启多选模式。

可通过新增`jk-table-column`组件，并配置 type 为**selection**来展示选中辅助列，**注意**若开启辅助列，则点击行不再进行选中操作。

通过事件`selected-change`来观察选中状态变化，其中单选模式下返回单行数据，多选模式下返回多行数据。

也可以通过以下方法来进行选中行的读取和控制：

-   `getSelectedRow` 获取选中行，单选模式下返回单行数据，多选模式下返回多行数据
-   `setSelectedRow` 选中行，可传入多行或单行数据，**注意**单选模式下传入多行数据时只会选中第一项数据
-   `clearSelectedRow` 清除选中行
-   `selectAll` 多选模式下，可通过该方法选中全部非禁用数据

单选模式示例：

!!!demo8!!!

多选模式示例：

!!!demo9!!!

### 排序

对表格进行排序，可快速查找或对比数据。

在列中设置`sortable`属性即可实现以该列为基准的排序，接受一个`Boolean`，默认为`false`。
可以通过 Table 的`default-sort`属性设置默认的排序列和排序顺序。可以使用`sort-method`来自定义排序规则，其中`default-sort-order`属性默认为**ascending**，可配置**descending**实现排序方式切换。

如果需要后端排序，需将`sortable`设置为`custom`，同时在 Table 上监听`sort-change`事件，在事件回调中可以获取当前排序的字段名和排序顺序，从而向接口请求排序后的表格数据。

!!!demo10!!!

自定义排序，模拟服务端排序

!!!demo11!!!

### 筛选

对表格进行筛选，可快速查找到自己想看的数据。

在列中设置`filter` `filter-method`属性即可开启该列的筛选，filter 是一个数组，若不设置则默认尝试展示当前列所有可选值，`filter-method`是一个方法，它用于决定某些数据是否显示，会传入三个参数：`当前行数据` 、 `筛选条件值`和`筛选列`。

其中 filter 可配置数组，数组可以为**string[]**，也可以为筛选想做转译，例如：

```js
[
    { value: "1", text: "男" },
    { value: "0", text: "女" }
];
```

!!!demo12!!!

### 索引列

通过配置`jk-table-column`组件的 type="index"来展示索引列，并通过 index 属性来配置起始索引，默认起始位置为 1。

!!!demo13!!!

### 自定义列模板

自定义列的显示内容，可组合其他组件使用。
通过 `RenderSection` 可以获取到 value, row, rowIndex, columnIndex,column, 和 store（table 数据管理）的数据，用法参考 demo。

其中`td`区域代表表格内容单元格渲染，`th`区域代表表头渲染。

!!!demo14!!!

### 展开行

当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能。
通过设置 type="expand" 和 `section('expand',data)` 可以开启展开行功能，`jk-table-column` 的模板会被渲染成为展开行的内容，其中 data 参数包括：`当前行数据`,`行索引`,`store数据管理`。

!!!demo15!!!

### 树列表

支持树类型的数据的显示。当 row 中包含 `children` 字段时，被视为树形数据。渲染树形数据时，必须要指定 `row-key`。支持子节点数据异步加载。设置 Table 的 `lazy` 属性为 true 与加载函数 `load` 。通过指定 row 中的 `isLeafKey` 字段来指定哪些行是包含子节点。

> 可通过更改`childrenKey`和 `isLeafKey`来配置节点属性和是否叶子属性

!!!demo16!!!

异步加载

!!!demo17!!!

> 注意，树形列表如果启用排序、筛选或索引列，只会对一级列表进行操作，不会对子集作用。

### 尺寸

通过修改 size 属性来修改表格的大小。

!!!demo18!!!

### 大数据同步加载

大数据加载（800 条）。

!!!demo19!!!

### Table Attributes

| 参数                       | 说明                                                                                                                                                                         | 类型                                                  | 可选值                | 默认值   |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | --------------------- | -------- |
| data                       | 显示的数据                                                                                                                                                                   | array                                                 | —                     | —        |
| class                      | 自定义 class 样式                                                                                                                                                            | string                                                | -                     | -        |
| height                     | Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。 | string/number                                         | —                     | —        |
| max-height                 | Table 的最大高度。合法的值为数字或者单位为 px 的高度。                                                                                                                       | string/number                                         | —                     | —        |
| stripe                     | 是否为斑马纹 table                                                                                                                                                           | boolean                                               | —                     | false    |
| border                     | 是否带有纵向边框                                                                                                                                                             | boolean                                               | —                     | false    |
| size                       | Table 的尺寸                                                                                                                                                                 | string                                                | medium / small / mini | —        |
| show-header                | 是否显示表头                                                                                                                                                                 | boolean                                               | —                     | true     |
| row-class-name             | 行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。                                                                                                | Function({row, rowIndex})/String                      | —                     | —        |
| row-style                  | 行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。                                                                                                | Function({row, rowIndex})/Object                      | —                     | —        |
| cell-class-name            | 单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。                                                                                        | Function({row, column, rowIndex, columnIndex})/String | —                     | —        |
| cell-style                 | 单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。                                                                                        | Function({row, column, rowIndex, columnIndex})/Object | string                | —        |
| header-row-class-name      | 表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。                                                                                        | Function({row, rowIndex})/String                      | —                     | —        |
| header-row-style           | 表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。                                                                                        | Function({row, rowIndex})/Object                      | —                     | —        |
| header-cell-class-name     | 表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。                                                                                | Function({row, column, rowIndex, columnIndex})/String | —                     | —        |
| header-cell-style          | 表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。                                                                                | Function({row, column, rowIndex, columnIndex})/Object | —                     | —        |
| empty-text                 | 空数据时显示的文本内容，也可以通过 `section="empty"` 设置                                                                                                                    | String                                                | —                     | 暂无数据 |
| default-sort               | 默认的排序列的                                                                                                                                                               | string                                                | -                     | -        |
| default-sort-order         | 默认排序的规则                                                                                                                                                               | ascending                                             | descending            | -        |
| childrenKey                | 树结构列表时，用于指定子集属性名称                                                                                                                                           |                                                       | string                | children |
| isLeafKey                  | 树结构列表时，用于指定是否有子集属性名称                                                                                                                                     |                                                       | string                | -        |
| dataChangeNotClearSelected | 数据变更后不清空选中项                                                                                                                                                       |                                                       | boolean               | -        |
| defaultExpandAll           | 是否默认展开所有行                                                                                                                                                           |                                                       | boolean               | -        |

### Table Events

| 事件名          | 说明                                         | 参数              |
| --------------- | -------------------------------------------- | ----------------- |
| selected-change | 当选择项发生变化时会触发该事件               | 选中行            |
| sort-change     | 当表格的排序条件发生变化的时候会触发该事件   | { column, order } |
| expand-change   | 当用户对某一行展开或者关闭的时候会触发该事件 | row, expand       |

### Table Methods

| 方法名           | 说明                                                                                                               | 参数                       |
| ---------------- | ------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| clearSelectedRow | 用于多选表格，清空用户的选择                                                                                       | —                          |
| selectAll        | 用于多选表格，切换所有行的选中状态                                                                                 | -                          |
| setSelectedRow   | 用于单选表格，设定某一行为选中行                                                                                   | row                        |
| clearSort        | 用于清空排序条件，数据会恢复成未排序的状态                                                                         | —                          |
| clearFilter      | 不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态，也可传入由 column.key 组成的数组以清除指定列的过滤条件 | column.key                 |
| sort             | 手动对 Table 进行排序。参数`key`属性指定排序列，`order`指定排序顺序。                                              | key: string, order: string |
| getSelectRow     | 获取选中行                                                                                                         | —                          |

### Table-column Attributes

| 参数          | 说明                                                                                                                                                       | 类型                                      | 可选值                 | 默认值 |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ---------------------- | ------ |
| type          | 对应列的类型。如果设置了 `selection` 则显示单选/多选框；如果设置了 `index` 则显示该行的索引（从 1 开始计算）；如果设置了 `expand` 则显示为一个可展开的按钮 | string                                    | selection/index/expand | —      |
| index         | 如果设置了 `type=index`，可以通过传递 `index` 属性来自定义索引                                                                                             | number, Function(index)                   | -                      | -      |
| key           | column 的 key，如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件                                                                   | string                                    | —                      | —      |
| label         | 显示的标题                                                                                                                                                 | string                                    | —                      | —      |
| width         | 对应列的宽度                                                                                                                                               | string                                    | —                      | —      |
| fixed         | 列是否固定在左侧或者右侧，true 表示固定在左侧                                                                                                              | string, boolean                           | true, left, right      | —      |
| sortable      | 对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件                                                        | boolean, string                           | true, false, 'custom'  | false  |
| sort-method   | 对数据进行排序的时候使用的方法，仅当 sortable 设置为 true 的时候有效，自定义数据排序，返回新的数据                                                         | —                                         | —                      |
| align         | 对齐方式                                                                                                                                                   | String                                    | left/center/right      | left   |
| header-align  | 表头对齐方式，若不设置该项，则使用表格的对齐方式                                                                                                           | String                                    | left/center/right      | —      |
| class         | 列的 class                                                                                                                                                 | string                                    | —                      | —      |
| filter        | 数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性，默认按当前列数据筛选。                                                                    | Array<{ text, value }> 或者 Array<string> | —                      | —      |
| filter-method | 数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。                                                               | Function(row, filters, col)               | —                      | —      |

### Table-column Section

| name   | 说明                                                                     |
| ------ | ------------------------------------------------------------------------ |
| td     | 自定义列的内容，参数为 {value, row,rowIndex, column, columnIndex,store } |
| th     | 自定义表头的内容，参数为 { column, columnIndex,store }                   |
| expand | 针对展开行的扩展 ， 参数为 { row, rowIndex,store }                       |
