## Textarea 输入框

用于输入多行文本信息

### 基础用法

文本域高度可通过 `rows` 属性控制

!!!demo1!!!

### 可自适应文本高度的文本域

通过设置 `autosize` 属性可以使得文本域的高度能够根据文本内容自动进行调整，并且 `autosize` 还可以设定为一个对象，指定最小行数和最大行数。

!!!demo2!!!

### 输入长度限制

`maxlength` 和 `minlength` 是原生属性，用来限制输入框的字符长度，其中字符长度是用 Javascript 的字符串长度统计的。在使用 `maxlength` 属性限制最大输入长度的同时，可通过设置 `show-word-limit` 属性来展示字数统计。

!!!demo3!!!

### Attributes

| 参数            | 说明                                                       | 类型             | 可选值                                                                                                                | 默认值 |
| --------------- | ---------------------------------------------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------- | ------ |
| type            | 类型                                                       | string           | text，[原生 input 的 type 值](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | text   |
| value           | 绑定值                                                     | string / number  | —                                                                                                                     | —      |
| class           | 自定义 class 样式                                          | string           | -                                                                                                                     | -      |
| maxlength       | 原生属性，最大输入长度                                     | number           | —                                                                                                                     | —      |
| minlength       | 原生属性，最小输入长度                                     | number           | —                                                                                                                     | —      |
| show-word-limit | 是否显示输入字数统计                                       | boolean          | —                                                                                                                     | false  |
| placeholder     | 输入框占位文本                                             | string           | —                                                                                                                     | —      |
| disabled        | 禁用                                                       | boolean          | —                                                                                                                     | false  |
| size            | 输入框尺寸                                                 | string           | medium / small / mini                                                                                                 | —      |
| rows            | 输入框行数                                                 | number           | —                                                                                                                     | 1      |
| autosize        | 自适应内容高度，可传入对象，如，{ minRows: 2, maxRows: 6 } | boolean / object | —                                                                                                                     | false  |
| resize          | 控制是否能被用户缩放                                       | string           | none, both, horizontal, vertical                                                                                      | —      |
| autocomplete    | 原生属性，自动补全                                         | string           | on, off                                                                                                               | off    |
| name            | 原生属性                                                   | string           | —                                                                                                                     | —      |
| readonly        | 原生属性，是否只读                                         | boolean          | —                                                                                                                     | false  |
| autofocus       | 原生属性，自动获取焦点                                     | boolean          | true, false                                                                                                           | false  |
| label           | 输入框关联的 label 文字                                    | string           | —                                                                                                                     | —      |
| tabindex        | 输入框的 tabindex                                          | string           | -                                                                                                                     | -      |

### Events

| 事件名称 | 说明                                   | 回调参数    |
| -------- | -------------------------------------- | ----------- |
| blur     | 在 Input 失去焦点时触发                | VNode.Event |
| focus    | 在 Input 获得焦点时触发                | VNode.Event |
| change   | 仅在输入框失去焦点或用户按下回车时触发 | VNode.Event |
| input    | 在 Input 值改变时触发                  | VNode.Event |

### Methods

| 方法名 | 说明                | 参数 |
| ------ | ------------------- | ---- |
| focus  | 使 input 获取焦点   | —    |
| blur   | 使 input 失去焦点   | —    |
| select | 选中 input 中的文字 | —    |
