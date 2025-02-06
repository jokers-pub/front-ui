## ColorPicker 颜色选择器

用于颜色选择，支持多种格式。

### 基础用法

使用设置 value 变量进行进行默认值的展示，并通过过去 value 来实现取值

!!!demo1!!!

### 选择透明度

ColorPicker 支持普通颜色，也支持带 Alpha 通道的颜色，通过`show-alpha`属性即可控制是否支持透明度的选择。

!!!demo2!!!

### 不同尺寸

!!!demo3!!!

### 只读/禁用

!!!demo4!!!

### Attributes

| 参数       | 说明               | 类型    | 可选值                | 默认值 |
| ---------- | ------------------ | ------- | --------------------- | ------ |
| value      | 绑定值             | string  | —                     | —      |
| disabled   | 是否禁用           | boolean | —                     | false  |
| class      | 自定义 class 样式  | string  | -                     | -      |
| size       | 尺寸               | string  | medium / small / mini | —      |
| show-alpha | 是否支持透明度选择 | boolean | —                     | false  |
| format     | 写入颜色的格式     | string  | hex / rgba            | -      |

### Event

| 事件名称 | 说明               | 回调参数 |
| -------- | ------------------ | -------- |
| change   | 当绑定值变化时触发 | 当前值   |
