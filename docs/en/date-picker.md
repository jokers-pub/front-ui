## DatePicker 日期选择器

用于选择或输入日期

### 选择日

以「日」为基本单位，基础的日期选择控件

基本单位由`type`属性指定。快捷选项需配置`shortcuts`，禁用日期通过 `disabledDate` 设置，该属性为函数类型，通过返回`boolean`来判断是否可选。

!!!demo1!!!

### 其他日期单位

通过扩展基础的日期选择，可以选择周、月、年。

!!!demo2!!!

### 选择日期范围

可在一个选择器中便捷地选择一个时间范围

!!!demo3!!!

### 日期格式

使用`format`指定输入框的格式；使用`value-format`指定绑定值的格式。

默认情况下，组件接受并返回`Date`对象。以下为可用的格式化字符串，以 UTC 2017 年 1 月 2 日 03:04:05 为例：

:::warning
请注意大小写，内部采用`dayjs`进行时间运算及格式化，详细格式值，请参考[dayjs](https://dayjs.fenxianglu.cn/)
:::

### Attributes

| 参数              | 说明                                           | 类型                                                | 可选值                                                              | 默认值       |
| ----------------- | ---------------------------------------------- | --------------------------------------------------- | ------------------------------------------------------------------- | ------------ |
| value             | 绑定值                                         | string(DatePicker) / Array<string>(DateRangePicker) | —                                                                   | —            |
| class             | 自定义 class 样式                              | string                                              | -                                                                   | -            |
| readonly          | 完全只读                                       | boolean                                             | —                                                                   | false        |
| disabled          | 禁用                                           | boolean                                             | —                                                                   | false        |
| editable          | 文本框可输入                                   | boolean                                             | —                                                                   | true         |
| clearable         | 是否显示清除按钮                               | boolean                                             | —                                                                   | true         |
| size              | 输入框尺寸                                     | string                                              | large, small, mini                                                  | —            |
| placeholder       | 非范围选择时的占位内容                         | string                                              | —                                                                   | —            |
| start-placeholder | 范围选择时开始日期的占位内容                   | string                                              | —                                                                   | —            |
| end-placeholder   | 范围选择时结束日期的占位内容                   | string                                              | —                                                                   | —            |
| type              | 显示类型                                       | string                                              | `year`/`month`/`date`/`week`/`datetime`/`daterange`/`datetimerange` | date         |
| format            | 显示在输入框中的格式                           | string                                              | 见[日期格式](https://dayjs.fenxianglu.cn/)                          | yyyy-MM-dd   |
| range-separator   | 选择范围时的分隔符                             | string                                              | —                                                                   | '-'          |
| default-value     | 可选，选择器打开时默认显示的时间               | string                                              | 遵循 value-format                                                   | —            |
| value-format      | 可选，绑定值的格式。不指定则绑定值为 Date 对象 | string                                              | 见[日期格式](https://dayjs.fenxianglu.cn/)                          | —            |
| unlink-panels     | 在范围选择器里取消两个日期面板之间的联动       | boolean                                             | —                                                                   | false        |
| prefix-icon       | 自定义头部图标的类名                           | string                                              | —                                                                   | jk-icon-date |

### Picker Options

| 参数          | 说明                                                              | 类型           | 可选值 | 默认值 |
| ------------- | ----------------------------------------------------------------- | -------------- | ------ | ------ |
| shortcuts     | 设置快捷选项，需要传入 { text, onClick } 对象用法参考 demo 或下表 | Object[]       | —      | —      |
| disabledDate  | 设置禁用状态，参数为当前日期，要求返回 Boolean                    | Function       | —      | —      |
| cellClassName | 设置日期的 className                                              | Function(Date) | —      | —      |

### Shortcuts

| 参数    | 说明                                                                | 类型     | 可选值 | 默认值 |
| ------- | ------------------------------------------------------------------- | -------- | ------ | ------ |
| text    | 标题文本                                                            | string   | —      | —      |
| onClick | 该方法会传入一个 callback，执行 callback 并传入新的值会进行设置操作 | function | —      | —      |

### Events

| 事件名称 | 说明                    | 回调参数                                               |
| -------- | ----------------------- | ------------------------------------------------------ |
| change   | 用户确认选定的值时触发  | 组件绑定值。格式与绑定值一致，可受 `value-format` 控制 |
| blur     | 当 input 失去焦点时触发 | 组件实例                                               |
| focus    | 当 input 获得焦点时触发 | 组件实例                                               |

### Methods

| 方法名 | 说明              | 参数 |
| ------ | ----------------- | ---- |
| focus  | 使 input 获取焦点 | —    |
