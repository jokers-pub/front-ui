## Progress 进度条

用于展示操作进度，告知用户当前状态和预期。

### 线形进度条

Progress 组件设置 percentage 属性即可，表示进度条对应的百分比，必填，必须在 0-100。通过 format 属性来指定进度条文字内容。

!!!demo1!!!

### 百分比内显

百分比不占用额外控件，适用于文件上传等场景。

Progress 组件可通过 stroke-width 属性更改进度条的高度，并可通过 text-inside 属性来将进度条描述置于进度条内部。

!!!demo2!!!

### 自定义颜色

可以通过 color 设置进度条的颜色，color 可以接受颜色字符串，函数和数组。

!!!demo3!!!

### 环形进度条

Progress 组件可通过 type 属性来指定使用环形进度条，在环形进度条中，还可以通过 width 属性来设置其大小。

!!!demo4!!!

### 仪表盘形进度条

通过 type 属性来指定使用仪表盘形进度条。

!!!demo5!!!

### Attributes

| 参数            | 说明                                                     | 类型                  | 可选值                    | 默认值 |
| --------------- | -------------------------------------------------------- | --------------------- | ------------------------- | ------ |
| percentage      | 百分比（必填）                                           | number                | 0-100                     | 0      |
| type            | 进度条类型                                               | string                | line/circle/dashboard     | line   |
| class           | 自定义 class 样式                                        | string                | -                         | -      |
| strokeWidth     | 进度条的宽度，单位 px                                    | number                | —                         | 6      |
| textInside      | 进度条显示文字内置在进度条内（仅 type=line 时可用）      | boolean               | —                         | false  |
| status          | 进度条当前状态                                           | string                | success/exception/warning | -      |
| color           | 进度条背景色（会覆盖 status 状态颜色）                   | string/function/array | —                         | ''     |
| width           | 环形进度条画布宽度（仅 type=circle 或 dashboard 时可用） | number                | —                         | 126    |
| showText        | 是否显示进度条文字内容                                   | boolean               | -                         | true   |
| strokeLinecap   | circle/dashboard 类型路径两端的形状                      | string                | butt/round/square         | round  |
| format          | 指定进度条文字内容                                       | function(percentage)  | -                         | -      |
| defineBackColor | 指定进度条底色（支持 hex 格式）                          | string                | -                         | -      |
| textColor       | 指定进度条字体颜色（支持 hex 格式）                      | string                | -                         | -      |
