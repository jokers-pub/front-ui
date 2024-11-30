## InputNumber 计数器

仅允许输入标准的数字值，可定义范围

### 基础用法

要使用它，只需要在`jk-number`元素中使用`value`绑定变量即可，变量的初始值即为默认值。

!!!demo1!!!

### 禁用状态

`disabled`属性接受一个`Boolean`，设置为`true`即可禁用整个组件，如果你只需要控制数值在某一范围内，可以设置`min`属性和`max`属性，不设置`min`和`max`时，最小值为 0。

!!!demo2!!!

### 步数

允许定义递增递减的步数控制

设置`step`属性可以控制步长，接受一个`Number`。

!!!demo3!!!

### 严格步数

`step-strictly`属性接受一个`Boolean`。如果这个属性被设置为`true`，则只能输入步数的倍数。

!!!demo4!!!

### 精度

设置 `precision` 属性可以控制数值精度，接收一个 `Number`。

!!!demo5!!!

> `precision` 的值必须是一个非负整数，并且不能小于 `step` 的小数位数。

### 尺寸

额外提供了 `medium`、`small`、`mini` 三种尺寸的数字输入框

!!!demo6!!!

### 按钮位置

设置 `controls-position` 属性可以控制按钮位置。

!!!demo7!!!

### 无控制按钮

设置 `hidden-controls` 属性可以控制按钮位置。

!!!demo8!!!

### Attributes

| 参数              | 说明                     | 类型    | 可选值       | 默认值    |
| ----------------- | ------------------------ | ------- | ------------ | --------- |
| value             | 绑定值                   | number  | —            | —         |
| class             | 自定义 class 样式        | string  | -            | -         |
| min               | 设置计数器允许的最小值   | number  | —            | -Infinity |
| max               | 设置计数器允许的最大值   | number  | —            | Infinity  |
| step              | 计数器步长               | number  | —            | 1         |
| step-strictly     | 是否只能输入 step 的倍数 | boolean | —            | false     |
| precision         | 数值精度                 | number  | —            | —         |
| size              | 计数器尺寸               | string  | large, small | —         |
| disabled          | 是否禁用计数器           | boolean | —            | false     |
| hidden-controls   | 是否隐藏控制按钮         | boolean | —            | false     |
| controls-position | 控制按钮位置             | string  | right        | -         |
| name              | 原生属性                 | string  | —            | —         |
| label             | 输入框关联的 label 文字  | string  | —            | —         |
| placeholder       | 输入框默认 placeholder   | string  | -            | -         |
| fullWidth         | 是否宽度 100%            | boolean | -            | -         |

### Event

| 事件名称 | 说明                        | 回调参数               |
| -------- | --------------------------- | ---------------------- |
| change   | 绑定值被改变时触发          | currentValue, oldValue |
| blur     | 在组件 Input 失去焦点时触发 | VNode.Event            |
| focus    | 在组件 Input 获得焦点时触发 | VNode.Event            |

### 方法

| 方法名 | 说明                | 参数 |
| ------ | ------------------- | ---- |
| blur   | 使 input 失去焦点   | -    |
| focus  | 使 input 获取焦点   | -    |
| select | 选中 input 中的文字 | —    |
