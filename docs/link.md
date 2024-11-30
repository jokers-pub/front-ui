## Link 文字链接

文字超链接

### 基础用法

基础的文字链接用法。

!!!demo1!!!

### 禁用状态

文字链接不可用状态。

!!!demo2!!!

### 下划线

文字链接下划线。

!!!demo3!!!

### 图标

带图标的文字链接可增强辨识度。

!!!demo4!!!

### Attributes

| 参数      | 说明              | 类型    | 可选值                                      | 默认值  |
| --------- | ----------------- | ------- | ------------------------------------------- | ------- |
| type      | 类型              | string  | primary / success / warning / danger / info | default |
| class     | 自定义 class 样式 | string  | -                                           | -       |
| underline | 是否下划线        | boolean | —                                           | true    |
| disabled  | 是否禁用状态      | boolean | —                                           | false   |
| target    | 打开方式          | string  | \_blank                                     | -       |
| href      | 原生 href 属性    | string  | —                                           | -       |
| icon      | 图标类名          | string  | —                                           | -       |
| size      | 尺寸              | string  | medium/small                                | -       |

### Event

| 事件名 | 说明           |
| ------ | -------------- |
| click  | 点击链接时触发 |
