## Steps 步骤条

引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。

### 基础用法

简单的步骤条。

设置 active 属性，接受一个 Number，表明步骤的 index，从 0 开始。需要定宽的步骤条时，设置 space 属性即可，它接受 Number，单位为 px，如果不设置，则为自适应。设置 finishStatus 属性可以改变已经完成的步骤的状态。

!!!demo1!!!

### 含状态步骤条

每一步骤显示出该步骤的状态。

也可以使用 title 具名分发，可以用 sections 的方式来取代属性的设置，在本文档最后的列表中有所有的 sections name 可供参考。

!!!demo2!!!

### 有描述的步骤条

每个步骤有其对应的步骤状态描述。

!!!demo3!!!

### 居中的步骤条

标题和描述都将居中。

设置 active 属性，接受一个 Number，表明步骤的 index，从 0 开始。需要定宽的步骤条时，设置 space 属性即可，它接受 Number，单位为 px，如果不设置，则为自适应。设置 finishStatus 属性可以改变已经完成的步骤的状态。

!!!demo4!!!

### 带图标的步骤条

步骤条内可以启用各种自定义的图标。

通过 icon 属性来设置图标，图标的类型可以参考 Icon 组件的文档，除此以外，还能通过具名 sections 来使用自定义的图标。

!!!demo5!!!

### 竖式步骤条

竖直方向的步骤条。

只需要在 jk-steps 元素中设置 direction 属性为 vertical 即可。

!!!demo6!!!

### 简洁风格的步骤条

设置 simple 可应用简洁风格，该条件下 alignCenter / description / direction / space 都将失效。

设置 active 属性，接受一个 Number，表明步骤的 index，从 0 开始。需要定宽的步骤条时，设置 space 属性即可，它接受 Number，单位为 px，如果不设置，则为自适应。设置 finishStatus 属性可以改变已经完成的步骤的状态。

!!!demo7!!!

### Steps 参数

| 参数        | 说明                                               | 类型            | 可选值              | 默认值     |
| ----------- | -------------------------------------------------- | --------------- | ------------------- | ---------- |
| class       | 自定义 class 样式                                  | string          | -                   | -          |
| space       | 每个 step 的间距，不填写将自适应间距。支持百分比。 | number / string | —                   | —          |
| direction   | 显示方向                                           | string          | vertical/horizontal | horizontal |
| active      | 设置当前激活步骤                                   | number          | —                   | 0          |
| alignCenter | 进行居中对齐                                       | boolean         | —                   | false      |
| simple      | 是否应用简洁风格                                   | boolean         | —                   | false      |

### Step 参数

| 参数        | 说明       | 类型                                                          | 可选值 | 默认值 |
| ----------- | ---------- | ------------------------------------------------------------- | ------ | ------ |
| title       | 标题       | string                                                        | —      | —      |
| description | 描述性文字 | string                                                        | -      | -      |
| icon        | 图标       | 传入 icon 的 class 全名来自定义 icon，也支持 Section 方式写入 | string | -      |

### Step section

| name        | 说明             |
| ----------- | ---------------- |
| icon        | 自定义图标       |
| title       | 自定义标题       |
| description | 自定义描述性文字 |
