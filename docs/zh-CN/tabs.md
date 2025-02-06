## Tabs 标签页

分隔内容上有关联但属于不同类别的数据集合。

### 基本用法

基础的、简洁的标签页。

!!!demo1!!!

### 位置

可通过`position`设置标签的位置。

!!!demo2!!!

### 自定义标签页标题

可通过`jk-tab-panel`中的**label**区块自定义标签标题。

!!!demo3!!!

### 卡片风格

可通过配置`card`启用卡片风格。

!!!demo4!!!

### Attributes

| 参数       | 说明                                      | 类型    | 可选值                | 默认值 |
| ---------- | ----------------------------------------- | ------- | --------------------- | ------ |
| value      | 默认选中 tab 值，对应 tab-panel 中的 name | string  | -                     | —      |
| card       | 卡片主题                                  | boolean | -                     | -      |
| position   | tab 位置                                  | string  | top/bottom/right/left | top    |
| fullHeight | 启用后内容区域高度会自动撑满              | boolean | -                     | -      |

### Events

| 事件名 | 说明                  | 参数       |
| ------ | --------------------- | ---------- |
| change | 当选中 tab 变更时触发 | tab 项信息 |
| click  | 当 tab 点击时触发     | tab 项信息 |
