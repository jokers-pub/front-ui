## Button 按钮

常用的操作按钮。

### 基础用法

基础的按钮用法。

使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

!!! demo1 !!!

### 禁用状态

按钮不可用状态。

你可以使用`disabled`属性来定义按钮是否可用，它接收一个`Boolean`值。

!!! demo2 !!!

### 文字按钮

没有边框和背景色的按钮。属性：`link`

!!! demo3 !!!

### 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

要设置图标，只需指定`icon`属性即可。可设置的 icon 列表可以参考 Joker-UI 的 icon 组件，如果想设置在文字右侧的 icon ，只需使用`i`标签即可使用自定义图标。

!!!demo4!!!

### 按钮组

以按钮组的方式出现，常用于多项类似操作。

使用`<jk-button-group>`标签来嵌套你的按钮。

!!!demo5!!!

### 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态。

要设置为 loading 状态，只要设置`loading`属性为`true`即可。

!!!demo6!!!

### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

尺寸有：`medium`、`small`、`mini`，通过设置`size`属性来配置它们。

!!!demo7!!!

### Attributes

| 参数        | 说明              | 类型    | 可选值                                      | 默认值 |
| ----------- | ----------------- | ------- | ------------------------------------------- | ------ |
| size        | 尺寸              | string  | medium / small / mini                       | —      |
| type        | 类型              | string  | primary / success / warning / danger / info | —      |
| plain       | 是否朴素按钮      | boolean | —                                           | false  |
| class       | 自定义 class 样式 | string  | -                                           | -      |
| full-width  | 是否宽度 100%     | boolean | -                                           | -      |
| link        | 是否使用文本展示  | boolean | —                                           | false  |
| round       | 是否圆角按钮      | boolean | —                                           | false  |
| circle      | 是否圆形按钮      | boolean | —                                           | false  |
| loading     | 是否加载中状态    | boolean | —                                           | false  |
| disabled    | 是否禁用状态      | boolean | —                                           | false  |
| icon        | 图标类名          | string  | —                                           | —      |
| autofocus   | 是否默认聚焦      | boolean | —                                           | false  |
| native-type | 原生 type 属性    | string  | button / submit / reset                     | button |

### Events

| 事件名 | 说明                 | 参数        |
| ------ | -------------------- | ----------- |
| click  | 点击按钮后的响应事件 | VNode.Event |
