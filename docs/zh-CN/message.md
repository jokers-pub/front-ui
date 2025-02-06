## Message 消息提示

常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。

### 基础用法

从顶部出现，3 秒后自动消失。在配置上与 Notification 非常类似，所以部分 options 在此不做详尽解释，文末有 options 列表，可以结合 Notification 的文档理解它们。

!!!demo1!!!

### 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。当需要自定义更多属性时，Message 也可以接收一个对象为参数。比如，设置`type`字段可以定义不同的状态，默认为`info`。此时正文内容以`message`的值传入。

> 目前 Message，提供了常用的 4 种跳用方法，包括`info`,`success`,`warning`,`error`

!!!demo2!!!

### 可关闭

可以添加关闭按钮，默认的 Message 是不可以被人工关闭的，如果需要可手动关闭的 Message，可以使用`showClose`字段。此外，和 Notification 一样，Message 拥有可控的`duration`，设置`0`为不会被自动关闭，默认为 3000 毫秒。

!!!demo3!!!

### 文字居中

使用 `center` 属性让文字水平居中。

!!!demo4!!!

### 使用 HTML 片段

将`useHtml`属性设置为 true，`message` 就会被当作 HTML 片段处理。

!!!demo5!!!

:::warning
`message` 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 [XSS 攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。因此在 `useHtml` 打开的情况下，请确保 `message` 的内容是可信的，**永远不要**将用户提交的内容赋值给 `message` 属性。
:::

> Message 提供`closeAll`方法，用于在特定业务时机去清除全部 message。

### Options

| 参数        | 说明                                  | 类型    | 可选值                     | 默认值 |
| ----------- | ------------------------------------- | ------- | -------------------------- | ------ |
| message     | 消息文字                              | string  | —                          | —      |
| type        | 主题                                  | string  | success/warning/info/error | info   |
| iconClass   | 自定义图标的类名，会覆盖 `type`       | string  | —                          | —      |
| useHtml     | 是否将 message 属性作为 HTML 片段处理 | boolean | —                          | false  |
| customClass | 自定义类名                            | string  | —                          | —      |
| duration    | 显示时间, 毫秒。设为 0 则不会自动关闭 | number  | —                          | 3000   |
| closable    | 是否显示关闭按钮                      | boolean | —                          | false  |
| center      | 文字是否居中                          | boolean | —                          | false  |
| offset      | Message 距离窗口顶部的偏移量          | number  | —                          | 20     |

### Methods

调用 `Message` 会返回当前 Message 的实例。如果需要手动关闭实例，可以调用它的 `close` 方法。
| 方法名 | 说明 |
| ---- | ---- |
| close | 关闭当前的 Message |

### Events

| 事件名 | 说明                |
| ------ | ------------------- |
| close  | 关闭 Message 时触发 |
