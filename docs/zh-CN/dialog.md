## Dialog 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。

### 基本用法

Dialog 弹出一个对话框，适合需要定制性更大的场景。

需要通过组件的`open`/`close`方法来设置弹窗是否展示。Dialog 分为两个部分：`body`和`footer`，`footer`需要具名为`footer`的`section`。`title`属性用于定义标题，它是可选的，默认值为空。最后，本例还展示了`before-close`的用法。

!!!demo1!!!

> `before-close` 仅当用户通过点击关闭图标或遮罩关闭 Dialog 时起效。

### 嵌套的 Dialog

如果需要在一个 Dialog 内部嵌套另一个 Dialog，需要设置 `append-to` 属性为`body`。

正常情况下，我们不建议使用嵌套的 Dialog，如果需要在页面上同时显示多个 Dialog，可以将它们平级放置。对于确实需要嵌套 Dialog 的场景，我们提供了`append-to`属性，**可参考核心对 append-to 的说明**。将内层 Dialog 的该属性设置为 body，它就会插入至 body 元素上，从而保证内外层 Dialog 和遮罩层级关系的正确。

!!!demo2!!!

> append-to 只会影响 DOM 的输出接口，并不会影响 VNode 的数据结构，它仍按开发时的数据结构进行创建，也遵循父子组件销毁机制，无需过度干预。

### 居中布局

标题和底部可水平居中，将`center`设置为`true`即可使标题和底部居中。`center`仅影响标题和底部区域。Dialog 的内容是任意的，在一些情况下，内容并不适合居中布局。如果需要内容也水平居中，请自行为其添加 CSS。

!!!demo3!!!

> Dialog 的内容是懒渲染的，即在第一次被打开之前，传入的默认 section 不会被渲染到 DOM 上。因此，如果需要执行 DOM 操作，或通过 `ref` 获取相应组件，请在 `open` 事件回调中进行。

### 可移动窗口

我们可以启用窗口组件的`draggable`属性，来开启窗口自由移动功能。

!!!demo4!!!

### Attributes

| 参数                  | 说明                                               | 类型                                 | 可选值 | 默认值 |
| --------------------- | -------------------------------------------------- | ------------------------------------ | ------ | ------ |
| title                 | Dialog 的标题，也可通过具名 section （见下表）传入 | string                               | —      | —      |
| width                 | Dialog 的宽度                                      | string                               | —      | 50%    |
| fullscreen            | 是否为全屏 Dialog                                  | boolean                              | —      | false  |
| modal                 | 是否需要遮罩层                                     | boolean                              | —      | true   |
| custom-class          | Dialog 的自定义类名                                | string                               | —      | —      |
| close-on-click-modal  | 是否可以通过点击 modal 关闭 Dialog                 | boolean                              | —      | false  |
| close-on-press-escape | 是否可以通过按下 ESC 关闭 Dialog                   | boolean                              | —      | true   |
| closable              | 是否显示关闭按钮                                   | boolean                              | —      | true   |
| before-close          | 关闭前的回调，会暂停 Dialog 的关闭                 | function(done)，done 用于关闭 Dialog | —      | —      |
| center                | 是否对头部和底部采用居中布局                       | boolean                              | —      | false  |
| destroyOnClose        | 是否在关闭时销毁内部                               | boolean                              | —      | true   |
| draggable             | 是否开启拖拽移动                                   | boolean                              | —      | false  |
| allowOutOfBounds      | 是否允许拖拽移动超出边界范围                       | boolean                              | —      | false  |

### Section

| name    | 说明                    |
| ------- | ----------------------- |
| default | Dialog 的内容           |
| title   | Dialog 标题区的内容     |
| footer  | Dialog 按钮操作区的内容 |

### 方法

| 方法名称 | 说明     | 方法参数 |
| -------- | -------- | -------- |
| open     | 打开窗口 | —        |
| close    | 关闭窗口 | —        |

### Events

| 事件名称 | 说明                        | 回调参数 |
| -------- | --------------------------- | -------- |
| open     | Dialog 打开的回调           | —        |
| opened   | Dialog 打开动画结束时的回调 | —        |
| close    | Dialog 关闭的回调           | —        |
| closed   | Dialog 关闭动画结束时的回调 | —        |
