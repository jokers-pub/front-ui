## Badge 标记

出现在按钮、图标旁的数字或状态标记。

### 基础用法

展示新消息数量。

定义 value 属性，它接受 Number 或者 String。

!!!demo1!!!

### 最大值

可自定义最大值。

由 max 属性定义，它接受一个 Number，需要注意的是，只有当 value 为 Number 时，它才会生效。

!!!demo2!!!

### 自定义内容

可以显示数字以外的文本内容。

定义 value 为 String 类型是时可以用于显示自定义文本。

!!!demo3!!!

### 小红点

以红点的形式标注需要关注的内容。

除了数字外，设置 is-dot 属性，它接受一个 Boolean。

!!!demo4!!!

### Attributes

| 参数   | 说明                                                         | 类型          | 可选值                                      | 默认值 |
| ------ | ------------------------------------------------------------ | ------------- | ------------------------------------------- | ------ |
| value  | 显示值                                                       | string/number | -                                           | -      |
| max    | 最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型 | number        | -                                           | -      |
| isDot  | 小圆点                                                       | boolean       | -                                           | false  |
| hidden | 隐藏 badge                                                   | boolean       | -                                           | false  |
| type   | 类型                                                         | string        | primary / success / warning / danger / info | -      |
