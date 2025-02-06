## Password 密码

密码输入框

### 基础用法

!!!demo1!!!

### 带 icon 的输入框

带有图标标记输入类型

可以通过 `prefix-icon` 属性在 password 组件首部增加显示图标。

!!!demo2!!!

### 尺寸

可通过 `size` 属性指定输入框的尺寸，除了默认的大小外，还提供了 medium、small 和 mini 三种尺寸。

!!!demo3!!!

### 输入长度限制

`maxlength` 和 `minlength` 是原生属性，用来限制输入框的字符长度。

!!!demo4!!!

### Passoword 属性

| 参数         | 说明                   | 类型            | 可选值                | 默认值 |
| ------------ | ---------------------- | --------------- | --------------------- | ------ |
| value        | 绑定值                 | string / number | —                     | —      |
| class        | 自定义 class 样式      | string          | -                     | -      |
| name         | 原生属性               | string          | —                     | —      |
| size         | 输入框尺寸             | string          | medium / small / mini | —      |
| maxlength    | 原生属性，最大输入长度 | number          | —                     | —      |
| minlength    | 原生属性，最小输入长度 | number          | —                     | —      |
| placeholder  | 输入框占位文本         | string          | —                     | —      |
| prefix-icon1 | 输入框头部图标         | string          | —                     | —      |
| autofocus1   | 原生属性，自动获取焦点 | boolean         | true, false           | false  |
| tabindex     | 输入框的 tabindex      | string          | -                     | -      |
