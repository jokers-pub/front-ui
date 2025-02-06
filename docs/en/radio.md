## Radio 单选框

在一组备选项中进行单选

### 基础用法

由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。

要使用 Radio 组件 Radio `value`属性的值，`value`可以是`String`、`Number`或`Boolean`。

!!!demo1!!!

### 禁用状态

单选框不可用的状态

只需在`jk-radio`元素中设置`disabled`属性即可，它接收一个`Boolean`，`true`为禁用。

!!!demo2!!!

### 单选框组

适用于在多个互斥的选项中选择的场景

结合父元素`jk-radio-group`和子元素`jk-radio`可以实现单选组，在`jk-radio-group`上绑定`value`，在`jk-radio`上设置好`label`即可，无需再给每一个`jk-radio`绑定变量，另外，还提供了`change`事件来响应选择的变化，它会传入一个参数`value`。

!!!demo3!!!

### 带有边框

设置`border`属性可以渲染为带有边框的单选框。`jk-raido`只有在设置 `border` 时，`size`属性才会生效

!!!demo4!!!

### 按钮样式

按钮样式的单选组合。

只需要把`jk-radio`元素换成`jk-radio-button`元素即可，此外，Joker-UI 还提供了`size`属性。

!!!demo5!!!

### Radio 参数

| 参数       | 说明                                 | 类型                      | 可选值                | 默认值 |
| ---------- | ------------------------------------ | ------------------------- | --------------------- | ------ |
| value      | 绑定值                               | string / number / boolean | —                     | —      |
| class      | 自定义 class 样式                    | string                    | -                     | -      |
| label      | Radio 的 value                       | string / number / boolean | —                     | —      |
| hide-label | 是否隐藏 label                       | boolean                   | —                     | —      |
| disabled   | 是否禁用                             | boolean                   | —                     | false  |
| border     | 是否显示边框                         | boolean                   | —                     | false  |
| size       | Radio 的尺寸，仅在 border 为真时有效 | string                    | medium / small / mini | —      |
| name       | 原生 name 属性                       | string                    | —                     | —      |

### Radio 事件

| 事件名称 | 说明                     | 回调参数   |
| -------- | ------------------------ | ---------- |
| change   | 选中状态变化时触发的事件 | 变换后的值 |

### Radio-button 属性

| 参数     | 说明                                 | 类型                      | 可选值                | 默认值 |
| -------- | ------------------------------------ | ------------------------- | --------------------- | ------ |
| value    | 绑定值                               | string / number / boolean | —                     | —      |
| label    | Radio 的 value                       | string / number / boolean | —                     | —      |
| disabled | 是否禁用                             | boolean                   | —                     | false  |
| size     | Radio 的尺寸，仅在 border 为真时有效 | string                    | medium / small / mini | —      |
| name     | 原生 name 属性                       | string                    | —                     | —      |

### Radio-button 事件

| 事件名称 | 说明                     | 回调参数   |
| -------- | ------------------------ | ---------- |
| change   | 选中状态变化时触发的事件 | 变换后的值 |

### Radio-group 属性

| 参数     | 说明                                                       | 类型                      | 可选值                | 默认值 |
| -------- | ---------------------------------------------------------- | ------------------------- | --------------------- | ------ |
| value    | 绑定值                                                     | string / number / boolean | —                     | —      |
| size     | 单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效 | string                    | medium / small / mini | —      |
| disabled | 是否禁用                                                   | boolean                   | —                     | false  |

### Radio-group 事件

| 事件名称 | 说明                     | 回调参数   |
| -------- | ------------------------ | ---------- |
| change   | 选中状态变化时触发的事件 | 变换后的值 |
