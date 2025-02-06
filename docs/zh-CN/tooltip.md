## Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。

### 基础用法

在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。

使用`content`属性来决定`hover`时的提示信息。由`placement`属性决定展示效果：`placement`属性值为：`方向-对齐位置`；四个方向：`top`、`left`、`right`、`bottom`；三种对齐位置：`start`, `end`，默认为`bottom`。如`placement="left-end"`，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。

!!!demo1!!!

### 主题

Tooltip 组件提供了两个不同的主题：`dark`和`light`。

通过设置`effect`属性来改变主题，默认为`dark`。

!!!demo2!!!

### 手动控制

通过`manual`属性来控制是否手动激活，然后通过组件的`show`和`hide`方法来自由操作

!!!demo3!!!

### 更多 Content

展示多行文本或者是设置文本内容的格式

用具名 section 分发`content`，替代`tooltip`中的`content`属性。

!!!demo4!!!

### 禁用

通过`disabled`值，来设置 tooltip 的禁用状态

!!!demo5!!!

### 尺寸

通过`size`值，来设置 tooltip 的尺寸

!!!demo6!!!

### 最大宽度

若内容过长时，可通过配置`maxWidth`来配置最大宽度，这样可以使内容多行展示

!!!demo7!!!

### Attributes

| 参数        | 说明                                                                  | 类型    | 可选值                                                                                                    | 默认值     |
| ----------- | --------------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------- | ---------- |
| effect      | 默认提供的主题                                                        | String  | dark/light / error                                                                                        | dark       |
| content     | 显示的内容，也可以通过 section`content` 传入 DOM                      | String  | —                                                                                                         | —          |
| placement   | Tooltip 的出现位置                                                    | String  | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom     |
| disabled    | Tooltip 是否可用                                                      | Boolean | —                                                                                                         | false      |
| offset      | 出现位置的偏移量                                                      | Number  | —                                                                                                         | 0          |
| transition  | 定义渐变动画                                                          | String  | —                                                                                                         | jk-fade-in |
| open-delay  | 延迟出现，单位毫秒                                                    | Number  | —                                                                                                         | 0          |
| close-delay | 延迟隐藏，单位毫秒（防抖）                                            | Number  | —                                                                                                         | 200        |
| manual      | 手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效 | Boolean | —                                                                                                         | false      |
| size        | 尺寸配置                                                              | string  | medium、small、mini                                                                                       |            |
| maxWidth    | 最大宽度                                                              | string  | -                                                                                                         | 300px      |
