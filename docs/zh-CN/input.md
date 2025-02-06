## Input 输入框

通过鼠标或键盘输入字符

### 基础用法

!!!demo1!!!

### 禁用状态

通过 `disabled` 属性指定是否禁用 input 组件

!!!demo2!!!

### 可清空

使用`clearable`属性即可得到一个可清空的输入框

!!!demo3!!!

### 带 icon 的输入框

带有图标标记输入类型

可以通过 `prefix-icon` 和 `suffix-icon` 属性在 input 组件首部和尾部增加显示图标，也可以通过 `section` 来放置图标。

!!!demo4!!!

### 复合型输入框

可前置或后置元素，一般为标签或按钮

可通过 section 来指定在 input 中前置或者后置内容。

!!!demo5!!!

### 尺寸

可通过 `size` 属性指定输入框的尺寸，除了默认的大小外，还提供了 medium、small 和 mini 三种尺寸。

!!!demo6!!!

### 输入长度限制

`maxlength` 和 `minlength` 是原生属性，用来限制输入框的字符长度，其中字符长度是用 Javascript 的字符串长度统计的。对于类型为 `text` 或 `textarea` 的输入框，在使用 `maxlength` 属性限制最大输入长度的同时，可通过设置 `show-word-limit` 属性来展示字数统计。

!!!demo7!!!

### Input 属性

| 参数            | 说明                    | 类型            | 可选值                                                                                                                | 默认值 |
| --------------- | ----------------------- | --------------- | --------------------------------------------------------------------------------------------------------------------- | ------ |
| type            | 类型                    | string          | text，[原生 input 的 type 值](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | text   |
| value           | 绑定值                  | string / number | —                                                                                                                     | —      |
| class           | 自定义 class 样式       | string          | -                                                                                                                     | -      |
| maxlength       | 原生属性，最大输入长度  | number          | —                                                                                                                     | —      |
| minlength       | 原生属性，最小输入长度  | number          | —                                                                                                                     | —      |
| show-word-limit | 是否显示输入字数统计    | boolean         | —                                                                                                                     | false  |
| placeholder     | 输入框占位文本          | string          | —                                                                                                                     | —      |
| clearable       | 是否可清空              | boolean         | —                                                                                                                     | false  |
| disabled        | 禁用                    | boolean         | —                                                                                                                     | false  |
| size            | 输入框尺寸              | string          | medium / small / mini                                                                                                 | —      |
| prefix-icon     | 输入框头部图标          | string          | —                                                                                                                     | —      |
| suffix-icon     | 输入框尾部图标          | string          | —                                                                                                                     | —      |
| autocomplete    | 原生属性，自动补全      | string          | on, off                                                                                                               | off    |
| name            | 原生属性                | string          | —                                                                                                                     | —      |
| readonly        | 原生属性，是否只读      | boolean         | —                                                                                                                     | false  |
| autofocus       | 原生属性，自动获取焦点  | boolean         | true, false                                                                                                           | false  |
| label           | 输入框关联的 label 文字 | string          | —                                                                                                                     | —      |
| tabindex        | 输入框的 tabindex       | string          | -                                                                                                                     | -      |
| status-icon     | 是否展示验证状态        | boolean         | -                                                                                                                     | -      |

### Input section

| name    | 说明           |
| ------- | -------------- |
| prefix  | 输入框头部内容 |
| suffix  | 输入框尾部内容 |
| prepend | 输入框前置内容 |
| append  | 输入框后置内容 |

### Input 事件

| 事件名称 | 说明                                          | 回调参数    |
| -------- | --------------------------------------------- | ----------- |
| blur     | 在 Input 失去焦点时触发                       | VNode.Event |
| focus    | 在 Input 获得焦点时触发                       | VNode.Event |
| change   | 仅在输入框失去焦点或用户按下回车时触发        | VNode.Event |
| input    | 在 Input 值改变时触发                         | VNode.Event |
| clear    | 在点击由 `clearable` 属性生成的清空按钮时触发 | VNode.Event |

### Input 方法

| 方法名 | 说明                | 参数 |
| ------ | ------------------- | ---- |
| focus  | 使 input 获取焦点   | —    |
| blur   | 使 input 失去焦点   | —    |
| select | 选中 input 中的文字 | —    |
