## Alert 警告

用于页面中展示重要的提示信息。

### 基础用法

页面中的非浮层元素，不会自动消失。

Alert 组件提供四种主题，由 type 属性指定，默认值为 info。

!!! demo1 !!!

### 主题

Alert 组件提供了两个不同的主题：light 和 dark。

通过设置 effect 属性来改变主题，默认为 light。

!!! demo2 !!!

### 自定义关闭按钮

自定义关闭按钮为文字或其他符号。

在 Alert 组件中，你可以设置是否可关闭，关闭按钮的文本以及关闭时的回调函数。closable 属性决定是否可关闭，接受 boolean，默认为 true。你可以设置 closeText 属性来代替右侧的关闭图标，注意：closeText 必须为文本。设置 close 事件来设置关闭时的回调。

!!! demo3 !!!

### 带有 icon

表示某种状态时提升可读性。

通过设置 showIcon 属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。

!!!demo4!!!

### 文字居中

使用 center 属性让文字水平居中。

!!!demo5!!!

### 带有辅助性文字介绍

包含标题和内容，解释更详细的警告。

除了必填的 title 属性外，你可以设置 description 属性来帮助你更好地介绍，我们称之为辅助性文字。辅助性文字只能存放单行文本，会自动换行显示。

!!!demo6!!!

### 带有 icon 和辅助性文字介绍

最后，这是一个同时具有 icon 和辅助性文字的样例。

!!!demo7!!!

### Attributes

| 参数        | 说明                                  | 类型    | 可选值                     | 默认值 |
| ----------- | ------------------------------------- | ------- | -------------------------- | ------ |
| title       | 标题                                  | string  | -                          | —      |
| type        | 主题                                  | string  | success/warning/info/error | info   |
| description | 辅助性文字。也可通过默认 section 传入 | string  | —                          | -      |
| closable    | 是否可关闭                            | boolean | —                          | true   |
| center      | 文字是否居中                          | boolean | —                          | true   |
| closeText   | 关闭按钮自定义文本                    | string  | —                          | -      |
| showIcon    | 是否显示图标                          | boolean | —                          | false  |
| icon        | 更改显示图标                          | string  | —                          | -      |
| effect      | 选择提供的主题                        | string  | light/dark                 | light  |
| class       | 自定义 class 样式                     | string  | -                          | -      |

### Events

| 事件名 | 说明                    | 参数 |
| ------ | ----------------------- | ---- |
| close  | 关闭 alert 时触发的事件 | -    |

### Sections

| 名称  | 描述       |
| ----- | ---------- |
| -     | 描述       |
| title | 标题的内容 |
