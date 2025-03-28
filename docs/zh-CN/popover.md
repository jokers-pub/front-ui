## Popover 弹出框

### 基础用法

Popover 的属性与 Tooltip 很类似，因此对于重复属性，请参考 Tooltip 的文档，在此文档中不做详尽解释。

`trigger`属性用于设置何时触发 Popover，支持三种触发方式：`hover`，`click`， `manual`。

!!!demo1!!!

### 嵌套信息

可以在 Popover 中嵌套多种类型信息，以下为嵌套表格的例子。利用 section 取代`content`属性。

!!!demo2!!!

### Attributes

| 参数        | 说明                                      | 类型           | 可选值                                                                                                    | 默认值         |
| ----------- | ----------------------------------------- | -------------- | --------------------------------------------------------------------------------------------------------- | -------------- |
| trigger     | 触发方式                                  | String         | click/hover/manual                                                                                        | click          |
| title       | 标题                                      | String         | —                                                                                                         | —              |
| content     | 显示的内容，也可以通过 `section` 传入 DOM | String         | —                                                                                                         | —              |
| width       | 宽度                                      | String, Number | —                                                                                                         | 最小宽度 150px |
| placement   | 出现位置                                  | String         | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom         |
| disabled    | Popover 是否可用                          | Boolean        | —                                                                                                         | false          |
| offset      | 出现位置的偏移量                          | Number         | —                                                                                                         | 0              |
| open-delay  | 触发方式为 hover 时的显示延迟，单位为毫秒 | Number         | —                                                                                                         | —              |
| close-delay | 触发方式为 hover 时的隐藏延迟，单位为毫秒 | number         | —                                                                                                         | 200            |

### Sections

| 参数      | 说明                          |
| --------- | ----------------------------- |
| default   | Popover 内嵌 HTML 文本        |
| reference | 触发 Popover 显示的 HTML 元素 |

### Events

| 事件名称 | 说明       | 回调参数 |
| -------- | ---------- | -------- |
| show     | 显示时触发 | —        |
| hide     | 隐藏时触发 | —        |

### Methods

| 方法名         | 说明                                                                                 | 参数 |
| -------------- | ------------------------------------------------------------------------------------ | ---- |
| show           | 手动模式下可通过该方法进行展示                                                       | -    |
| hide           | 用于主动隐藏，调用该方法不会参与`closeDelay`防抖机制中                               | -    |
| updatePosition | 用于主动更新窗口的位置，一般用于当内部展示内容变化时，可以通过该方法实现位置重新计算 | -    |
