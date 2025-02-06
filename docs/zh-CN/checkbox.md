## Checkbox 多选框

一组备选项中进行多选

### 基础用法

单独使用可以表示两种状态之间的切换，写在标签中的内容为 Checkbox 按钮后的介绍。

在 `jk-checkbox` 组件中定义 `value` 绑定变量，单一的 Checkbox 中，默认绑定变量的值会是 `Boolean`，选中为 `true`。

!!!demo1!!!

### 禁用状态

多选框不可用状态。

只要在 `jk-checkbox` 组件中设置 `disabled` 属性即可，它接受一个 `Boolean`，`true` 为禁用。

!!!demo2!!!

### 多选框组

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

`jk-checkbox-group` 组件能把多个 Checkbox 管理为一组，只需要在 Group 中使用 `value` 绑定 `Array` 类型的变量即可。 `jk-checkbox` 的 `label` 属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 Checkbox 按钮后的介绍。`label` 与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中

!!!demo3!!!

### indeterminate 状态

`indeterminate` 属性用以表示 Checkbox 的不确定状态，一般用于实现全选的效果

!!!demo4!!!

### 可选项目数量的限制

使用 `min` 和 `max` 属性能够限制可以被勾选的项目的数量。

!!!demo5!!!

### 按钮样式

按钮样式的多选组合。

!!!demo6!!!

### 带有边框

设置 `border` 属性可以渲染为带有边框的单选框。`jk-checkbox` 只有在设置 `border` 时，`size` 属性才会生效

!!!demo7!!!

### Checkbox Attributes

| 参数          | 说明                                    | 类型                      | 可选值                | 默认值 |
| ------------- | --------------------------------------- | ------------------------- | --------------------- | ------ |
| value         | 绑定值                                  | string / number / boolean | —                     | —      |
| label         | Checkbox 的 value                       | string / number / boolean | —                     | —      |
| class         | 自定义 class 样式                       | string                    | -                     | -      |
| disabled      | 是否禁用                                | boolean                   | —                     | false  |
| border        | 是否显示边框                            | boolean                   | —                     | false  |
| size          | Checkbox 的尺寸，仅在 border 为真时有效 | string                    | medium / small / mini | —      |
| name          | 原生 name 属性                          | string                    | —                     | —      |
| indeterminate | 设置 indeterminate 状态，只负责样式控制 | boolean                   | —                     | —      |

### Checkbox Events

| 事件名称 | 说明                     | 回调参数   |
| -------- | ------------------------ | ---------- |
| change   | 选中状态变化时触发的事件 | 变换后的值 |

### Checkbox-button Attributes

| 参数     | 说明                                         | 类型                      | 可选值 | 默认值 |
| -------- | -------------------------------------------- | ------------------------- | ------ | ------ |
| value    | 绑定值                                       | string / number / boolean | —      | —      |
| label    | 选中状态的值（只有在 checkbox-group 时有效） | string / number / boolean | —      | —      |
| disabled | 是否禁用                                     | boolean                   | —      | false  |
| name     | 原生 name 属性                               | string                    | —      | —      |

### Checkbox-button Events

| 事件名称 | 说明                     | 回调参数   |
| -------- | ------------------------ | ---------- |
| change   | 选中状态变化时触发的事件 | 变换后的值 |

### Checkbox-group Attributes

| 参数     | 说明                                                             | 类型    | 可选值                | 默认值 |
| -------- | ---------------------------------------------------------------- | ------- | --------------------- | ------ |
| value    | 绑定值                                                           | array   | —                     | []     |
| size     | 多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效 | string  | medium / small / mini | —      |
| disabled | 是否禁用                                                         | boolean | —                     | false  |
| min      | 可被勾选的 checkbox 的最小数量                                   | number  | —                     | -      |
| max      | 可被勾选的 checkbox 的最大数量                                   | number  | —                     | -      |

### Checkbox-group Events

| 事件名称 | 说明                     | 回调参数   |
| -------- | ------------------------ | ---------- |
| change   | 选中状态变化时触发的事件 | 变换后的值 |
