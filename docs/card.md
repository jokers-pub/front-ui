## Card 卡片

将信息聚合在卡片容器中展示。

### 基础用法

包含标题，内容和操作。

Card 组件包括 header 和 body 部分，header 部分需要有显式具名 section 分发，同时也是可选的。

!!! demo1 !!!

### 简单卡片

卡片可以只有内容区域。

!!! demo2 !!!

### 带图片

可配置定义更丰富的内容展示。

配置 body-style 属性来自定义 body 部分的 style，我们还使用了布局组件。

!!! demo3 !!!

### 卡片阴影

可对阴影的显示进行配置。

通过 shadow 属性设置卡片阴影出现的时机：always、hover 或 never。

!!! demo4 !!!

### Card 参数

| 参数      | 说明                                             | 类型   | 可选值                 | 默认值 |
| --------- | ------------------------------------------------ | ------ | ---------------------- | ------ |
| header    | 设置 header，也可以通过 sections#header 传入 DOM | string | —                      | —      |
| bodyStyle | 设置 body 的样式                                 | object | —                      | -      |
| shadow    | 设置阴影显示时机                                 | string | always / hover / never | always |
| class     | 设置卡片类名                                     | string | —                      | -      |

### Card 区块

| 名称    | 说明         |
| ------- | ------------ |
| default | 内容区域插槽 |
| header  | 头部区域插槽 |
