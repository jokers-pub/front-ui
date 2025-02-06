## AutoComplete 自动完成

根据输入内容提供对应的输入建议。

### 基础用法

autocomplete 是一个可带输入建议的输入框组件，`search-load` 是一个返回输入建议的方法属性，在该方法中你可以在你的输入建议数据准备好时通过 callback(data) 返回到 autocomplete 组件中。

!!!demo1!!!

### 自定义模板

可自定义输入建议的显示

使用`section`自定义输入建议的模板。参数为`item`，表示当前输入建议对象。

!!!demo2!!!

### Autocomplete Attributes

| 参数             | 说明                                                                                     | 类型                            | 可选值 | 默认值 |
| ---------------- | ---------------------------------------------------------------------------------------- | ------------------------------- | ------ | ------ |
| placeholder      | 输入框占位文本                                                                           | string                          | —      | —      |
| disabled         | 禁用                                                                                     | boolean                         | —      | false  |
| value-key        | 输入建议对象中用于显示的键名                                                             | string                          | —      | value  |
| search-load      | 返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它 | Function(queryString, callback) | —      | —      |
| trigger-on-focus | 是否在输入框 focus 时显示建议列表                                                        | boolean                         | —      | true   |
| class            | 自定义 class 样式                                                                        | string                          | -      | -      |

### Autocomplete Section

| name    | 说明                            |
| ------- | ------------------------------- |
| default | 自定义输入建议，参数为 { item } |
| prefix  | 输入框头部内容                  |
| suffix  | 输入框尾部内容                  |
| prepend | 输入框前置内容                  |
| append  | 输入框后置内容                  |

### Events

| 事件名称 | 说明                  | 回调参数                  |
| -------- | --------------------- | ------------------------- |
| select   | 点击选中建议项时触发  | 选中建议项                |
| change   | 在 Input 值改变时触发 | (value: string \| number) |

### Methods

| 方法名 | 说明              | 参数 |
| ------ | ----------------- | ---- |
| focus  | 使 input 获取焦点 | -    |
