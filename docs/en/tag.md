## Tag 标签

用于标记和选择。

### 基础用法

由`type`属性来选择 tag 的类型，也可以通过`color`属性来自定义背景色。

!!!demo1!!!

### 可移除标签

设置`closable`属性可以定义一个标签是否可移除。

!!!demo2!!!

### 不同尺寸

Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

额外的尺寸：`medium`、`small`、`mini`，通过设置`size`属性来配置它们。

!!!demo3!!!

### 不同主题

Tag 组件提供了三个不同的主题：`dark`、`light` 和 `plain`

通过设置`effect`属性来改变主题，默认为 `light`

!!!demo4!!!

### Attributes

| 参数     | 说明              | 类型    | 可选值                      | 默认值 |
| -------- | ----------------- | ------- | --------------------------- | ------ |
| type     | 类型              | string  | success/info/warning/danger | —      |
| class    | 自定义 class 样式 | string  | -                           | -      |
| closable | 是否可关闭        | boolean | —                           | false  |
| color    | 背景色            | string  | —                           | —      |
| size     | 尺寸              | string  | medium / small / mini       | —      |
| effect   | 主题              | string  | dark / light / plain        | light  |

### Events

| 事件名称 | 说明                  | 回调参数 |
| -------- | --------------------- | -------- |
| click    | 点击 Tag 时触发的事件 | —        |
| close    | 点击关闭按钮时触发    | —        |
