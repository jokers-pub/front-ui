## Slider 滑块

通过拖动滑块在一个固定区间内进行选择

### 基础用法

在拖动滑块时，显示当前值，通过设置绑定值自定义滑块的初始值

!!!demo1!!!

### 离散值

选项可以是离散的，改变`step`的值可以改变步长，通过设置`show-stops`属性可以显示间断点

!!!demo2!!!

### 带有输入框

通过输入框设置精确数值，设置`show-input`属性会在右侧显示一个输入框

> 当设置`range` 或者 `show-input`时，`show-input`属性将不生效

!!!demo3!!!

### 范围选择

支持选择某一数值范围，设置`range`即可开启范围选择，此时绑定值是一个数组，其元素分别为最小边界值和最大边界值

!!!demo4!!!

### 竖向模式

设置`vertical`可使 Slider 变成竖向模式，此时必须设置高度`height`属性

!!!demo5!!!

### 展示标记

设置 `marks` 属性可以展示标记

!!!demo6!!!

### Attributes

| 参数                | 说明                                                                                    | 类型                 | 可选值                        | 默认值 |
| ------------------- | --------------------------------------------------------------------------------------- | -------------------- | ----------------------------- | ------ |
| value               | 值                                                                                      | number 或者 number[] | —                             | 0      |
| class               | 自定义 class 样式                                                                       | string               | -                             | -      |
| min                 | 最小值                                                                                  | number               | —                             | 0      |
| max                 | 最大值                                                                                  | number               | —                             | 100    |
| disabled            | 是否禁用                                                                                | boolean              | —                             | false  |
| step                | 步长                                                                                    | number               | —                             | 1      |
| show-input          | 是否显示输入框，仅在非范围选择时有效                                                    | boolean              | —                             | false  |
| show-input-controls | 在显示输入框的情况下，是否显示输入框的控制按钮                                          | boolean              | —                             | true   |
| input-size          | 输入框的尺寸，具体请参考 input API                                                      | string               | large / medium / small / mini | small  |
| show-stops          | 是否显示间断点                                                                          | boolean              | —                             | false  |
| show-tooltip        | 是否显示 tooltip                                                                        | boolean              | —                             | true   |
| format-tooltip      | 格式化 tooltip message                                                                  | function(value)      | —                             | —      |
| range               | 是否为范围选择                                                                          | boolean              | —                             | false  |
| vertical            | 是否竖向模式                                                                            | boolean              | —                             | false  |
| height              | Slider 高度，竖向模式时必填                                                             | string               | —                             | —      |
| label               | 屏幕阅读器标签                                                                          | string               | —                             | —      |
| marks               | 标记， key 的类型必须为 number 且取值在闭区间 `[min, max]` 内，每个标记可以单独设置样式 | object               | —                             | —      |

### Events

| 事件名称 | 说明                                                   | 回调参数   |
| -------- | ------------------------------------------------------ | ---------- |
| change   | 值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）     | 改变后的值 |
| input    | 该事件覆盖 change 触发时机，当滑块拖拽时也会触发 input | 改变后的值 |
