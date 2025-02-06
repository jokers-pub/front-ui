## TimePicker 时间选择器

用于选择或输入时间

### 固定时间点

提供几个固定的时间点供用户选择

使用 jk-time-select 标签，分别通过`start`、`end`和`step`指定可选的起始时间、结束时间和步长

!!!demo1!!!

### 固定时间范围

若先选择开始时间，则结束时间内备选项的状态会随之改变

!!!demo2!!!

### 任意时间点

可以选择任意时间，使用 jk-time-picker 标签，通过`minTime`/`maxTime`限制可选时间范围。
可通过配置 format，来控制是否显示秒。

!!!demo3!!!

### 任意时间范围

可选择任意的时间范围

!!!demo4!!!

### 禁用

!!!demo5!!!

### 尺寸

参考`input` size 属性

!!!demo6!!!

### Attributes

| 参数              | 说明                                           | 类型    | 可选值                | 默认值       |
| ----------------- | ---------------------------------------------- | ------- | --------------------- | ------------ |
| value             | 绑定值                                         | string  | —                     | —            |
| class             | 自定义 class 样式                              | string  | -                     | -            |
| readonly          | 完全只读                                       | boolean | —                     | false        |
| disabled          | 禁用                                           | boolean | —                     | false        |
| editable          | 文本框可输入                                   | boolean | —                     | true         |
| clearable         | 是否显示清除按钮                               | boolean | —                     | true         |
| size              | 输入框尺寸                                     | string  | medium / small / mini | —            |
| placeholder       | 非范围选择时的占位内容                         | string  | —                     | —            |
| start-placeholder | 范围选择时开始日期的占位内容                   | string  | —                     | —            |
| end-placeholder   | 范围选择时结束日期的占位内容                   | string  | —                     | —            |
| range             | 是否为时间范围选择，仅对`<jk-time-picker>`有效 | boolean | —                     | false        |
| range-separator   | 选择范围时的分隔符                             | string  | -                     | '-'          |
| value-format      | 可选，绑定值的格式                             | string  | -                     | —            |
| default-value     | 可选，选择器打开时默认显示的时间               | string  | 符合 format 格式      | —            |
| prefix-icon       | 自定义头部图标的类名                           | string  | —                     | el-icon-time |

### Time Select Options

| 参数    | 说明                                 | 类型   | 可选值 | 默认值 |
| ------- | ------------------------------------ | ------ | ------ | ------ |
| start   | 开始时间                             | string | —      | 09:00  |
| end     | 结束时间                             | string | —      | 18:00  |
| step    | 间隔时间                             | string | —      | 00:30  |
| minTime | 最小时间，小于该时间的时间段将被禁用 | string | —      | 00:00  |
| maxTime | 最大时间，大于该时间的时间段将被禁用 | string | —      | —      |

### Time Picker Options

| 参数            | 说明                                                                                                | 类型           | 可选值                         | 默认值     |
| --------------- | --------------------------------------------------------------------------------------------------- | -------------- | ------------------------------ | ---------- |
| selectableRange | 可选时间段，例如`'18:30:00 - 20:30:00'`或者传入数组`['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']` | string / array | —                              | —          |
| format          | 时间格式化                                                                                          | string         | 小时：`HH`，分：`mm`，秒：`ss` | 'HH:mm:ss' |

### Events

| 事件名 | 说明                    | 参数       |
| ------ | ----------------------- | ---------- |
| change | 用户确认选定的值时触发  | 组件绑定值 |
| blur   | 当 input 失去焦点时触发 | 组件实例   |
| focus  | 当 input 获得焦点时触发 | 组件实例   |

### Methods

| 方法名 | 说明              | 参数 |
| ------ | ----------------- | ---- |
| focus  | 使 input 获取焦点 | -    |
