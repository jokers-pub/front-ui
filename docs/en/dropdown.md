## Dropdown 下拉菜单

通过点击或着 hover 来展示下拉菜单。

### 基础用法

通过`Section`来设置触发下拉菜单展示的元素，默认情况下通过`click`来激活展示。

!!!demo1!!!

### 分割形式

配置`split-button`属性来让那个触发下拉元素呈现为按钮组。

!!!demo2!!!

### 菜单样式

可以通过配置菜单项的图表、分割等属性来展示更丰富的菜单

!!!demo3!!!

当然，你也可以不使用`jk-dropdown-item`组件去填充下拉菜单，而是采用自定义的形式。

!!!demo4!!!

### 禁用

通过设置`disabled`属性实现禁用，该属性会自定更改`split-button`类型下的按钮状态，若不是分割按钮模式，请自行管理设置内容禁用样式

!!!demo5!!!

### 尺寸

通过设置`size`尺寸可以更改`split-button`模式下的按钮尺寸。

尺寸类型可选值包括：`medium`、`small`、`mini`。

!!!demo6!!!

`dropdown-menu`也可以配置`size`属性，用于控制下拉菜单的尺寸。

!!!demo7!!!

### Dropdown Attributes

| 参数         | 说明                                                                 | 类型    | 可选值                | 默认值  |
| ------------ | -------------------------------------------------------------------- | ------- | --------------------- | ------- |
| type         | 菜单按钮类型，同 Button 组件(只在`split-button`为 true 的情况下有效) | string  | —                     | primary |
| size         | 菜单尺寸，在`split-button`为 true 的情况下也对触发按钮生效           | string  | medium / small / mini | —       |
| split-button | 下拉触发元素呈现为按钮组                                             | boolean | —                     | false   |
| trigger      | 触发下拉的行为                                                       | string  | hover, click          | click   |
| disabled     | 是否禁用                                                             | boolean | —                     | false   |

### Dropdown Events

| 事件名称 | 说明                                                                                                  | 回调参数 |
| -------- | ----------------------------------------------------------------------------------------------------- | -------- |
| click    | `split-button` 为 true 时，点击左侧按钮的回调，若不是`split-button`则代表当前内部元素点击冒泡处理事件 | —        |

### Dropdown Menu Attributes

| 参数      | 说明     | 类型   | 可选值                                                                                                    | 默认值       |
| --------- | -------- | ------ | --------------------------------------------------------------------------------------------------------- | ------------ |
| size      | 菜单尺寸 | string | medium / small / mini                                                                                     | -            |
| placement | 菜单位置 | string | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom-start |

### Dropdown Menu Item Attributes

| 参数     | 说明       | 类型    | 可选值 | 默认值 |
| -------- | ---------- | ------- | ------ | ------ |
| disabled | 禁用       | boolean | —      | false  |
| divided  | 显示分割线 | boolean | —      | false  |
| icon     | 图标类名   | string  | —      | —      |

### Dropdown Menu Events

| 事件名称 | 说明     | 回调参数 |
| -------- | -------- | -------- |
| open     | 菜单打开 | —        |
| close    | 菜单关闭 | —        |
