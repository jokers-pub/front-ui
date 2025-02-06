## Avatar 头像

用图标、图片或者字符的形式展示用户或事物信息。

### 基础用法

通过 shape 和 size 设置头像的形状和大小。

!!! demo1 !!!

### 展示类型

支持三种类型：图标、图片和字符

!!! demo2 !!!

### 图片加载失败的 fallback 行为

当展示类型为图片的时候，图片加载失败的 fallback 行为

!!! demo3 !!!

### 图片如何适应容器框

当展示类型为图片的时候，使用 fit 属性定义图片如何适应容器框，同原生 object-fit。

!!! demo4 !!!

### Attributes

| 参数   | 说明                                                                 | 类型          | 可选值                             | 默认值 |
| ------ | -------------------------------------------------------------------- | ------------- | ---------------------------------- | ------ |
| icon   | 设置头像的图标类型，参考 Icon 组件                                   | string        | -                                  | —      |
| size   | 设置头像的大小                                                       | number/string | number/large/medium/small          | large  |
| shape  | 设置头像的形状                                                       | string        | circle/square                      | circle |
| src    | 图片头像的资源地址                                                   | string        | —                                  | -      |
| srcSet | 以逗号分隔的一个或多个字符串列表表明一系列用户代理使用的可能的图像   | string        | —                                  | true   |
| alt    | 描述图像的替换文本                                                   | string        | —                                  | -      |
| fit    | 当展示类型为图片的时候，设置图片如何适应容器框                       | string        | fill/contain/cover/none/scale-down | cover  |
| class  | 自定义 class 样式                                                    | string        | -                                  | -      |
| error  | 图片类头像加载失败的回调， 返回 false 会关闭组件默认的 fallback 行为 | function      | -                                  | -      |

### Event

| 事件名 | 说明         | 参数 |
| ------ | ------------ | ---- |
| click  | 头像点击触发 | -    |

### Section

| 名称    | 描述               |
| ------- | ------------------ |
| default | 自定义头像展示内容 |
