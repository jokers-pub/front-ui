## Timeline 时间线

可视化地呈现时间流信息。

### 基础用法

Timeline 可拆分成多个按照时间戳排列的 activity，时间戳是其区分于其他控件的重要特征，使⽤时注意与 Steps 步骤条等区分。

!!!demo1!!!

### ⾃定义节点样式

可根据实际场景⾃定义节点尺⼨、颜⾊，或直接使⽤图标。

!!!demo2!!!

### ⾃定义时间戳

当内容在垂直⽅向上过⾼时，可将时间戳置于内容之上。

!!!demo3!!!

### Timeline Attributes

| 参数  | 说明              | 类型   | 可选值 | 默认值 |
| ----- | ----------------- | ------ | ------ | ------ |
| class | 自定义 class 样式 | string | -      | -      |

### Timeline-item Attributes

| 参数          | 说明           | 类型    | 可选值                                      | 默认值 |
| ------------- | -------------- | ------- | ------------------------------------------- | ------ |
| timestamp     | 时间戳         | string  | -                                           | -      |
| hideTimestamp | 是否隐藏时间戳 | boolean | -                                           | false  |
| placement     | 时间戳位置     | string  | top / bottom                                | bottom |
| type          | 节点类型       | string  | primary / success / warning / danger / info | -      |
| color         | 节点颜色       | string  | hsl / hsv / hex / rgb                       | -      |
| size          | 节点尺寸       | string  | normal / large                              | normal |
| icon          | 节点图标       | string  | -                                           | -      |

### Timeline-Item section

|   name  | 说明                 |
| ------- | -------------------- |
| default | Timeline-Item 的内容 |
| dot     | 自定义节点           |
