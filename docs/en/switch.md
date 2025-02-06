## Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

### 基础用法

绑定 value 到一个 Boolean 类型的变量。可以使用 activeColor 属性与 inactiveColor 属性来设置开关的背景色。

!!!demo1!!!

### 禁用状态

设置 disabled 属性，接受一个 Boolean，设置 true 即可禁用。

!!!demo2!!!

### 文字描述

使用 activeText 属性与 inactiveText 属性来设置开关的文字描述。

!!!demo3!!!

### 扩展的 value 类型

设置 activeValue 和 inactiveValue 属性，接受 Boolean, String 或 Number 类型的值。

!!!demo4!!!

### Switch 参数

| 参数              | 说明                                                       | 类型                      | 可选值 | 默认值 |
| ----------------- | ---------------------------------------------------------- | ------------------------- | ------ | ------ |
| value             | 绑定值                                                     | string / number / boolean | —      | —      |
| disabled          | 是否禁用                                                   | boolean                   | —      | false  |
| class             | 自定义 class 样式                                          | string                    | -      | -      |
| width             | switch 的宽度（像素）                                      | number                    | —      | 40     |
| activeIconClass   | switch 打开时所显示图标的类名，设置此项会忽略 activeText   | string                    |        | —      |
| inactiveIconClass | switch 关闭时所显示图标的类名，设置此项会忽略 inactiveText | string                    | —      | —      |
| activeText        | switch 打开时的文字描述                                    | string                    | —      | —      |
| inactiveText      | switch 关闭时的文字描述                                    | string                    | —      | —      |
| activeValue       | switch 打开时的值                                          | boolean / string / number | —      | true   |
| inactiveValue     | switch 关闭时的值                                          | boolean / string / number | —      | false  |
| activeColor       | switch 打开时的背景色                                      | string                    | —      | —      |
| inactiveColor     | switch 关闭时的背景色                                      | string                    | —      | —      |
| name              | switch 对应的 name 属性                                    | string                    | —      | —      |

### Switch 事件

| 事件名称 | 说明                            | 回调参数   |
| -------- | ------------------------------- | ---------- |
| change   | switch 状态发生变化时的回调函数 | 变换后的值 |

### Switch 方法

| 方法名 | 说明               | 参数 |
| ------ | ------------------ | ---- |
| focus  | 使 Switch 获取焦点 | -    |
