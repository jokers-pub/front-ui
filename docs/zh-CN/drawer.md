## Drawer 抽屉

Drawer 组件提供了与 `Dialog` 几乎相同的 API，但在 UI 上带来了不同的体验。

### 基础用法

弹出一个侧边栏，可以从多个方向展示

!!!demo1!!!

### 多层嵌套

支持多层嵌套，组件内会自动控制`zindex`

!!!demo2!!!

### Attributes

| 参数          | 说明                    | 类型    | 可选值                | 默认值 |
| ------------- | ----------------------- | ------- | --------------------- | ------ |
| direction     | 展开方向                | string  | left/top/right/bottom | right  |
| size          | 展开尺寸                | string  | -                     | 30%    |
| title         | 标题                    | string  | -                     | -      |
| noBodyPadding | 是否取消body区域padding | boolean | -                     | -      |

### Sections

| 名称    | 说明     |
| ------- | -------- |
| default | 内容区域 |
| title   | 标题区域 |

### Methods

| 方法名 | 说明 | 参数 | 返回值 |
| ------ | ---- | ---- | ------ |
| open   | 打开 | -    | -      |
| close  | 关闭 | -    | -      |

### Events

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
| open   | 打开 | -    |
| close  | 关闭 | -    |
