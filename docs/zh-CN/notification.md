## Notification 通知

悬浮出现在页面角落，显示全局的通知提醒消息。

### 基本用法

适用性广泛的通知栏，Notification 组件提供通知功能，提供`Notification`方法，接收一个`options`字面量参数，在最简单的情况下，你可以设置`title`字段和`message`字段，用于设置通知的标题和正文。默认情况下，经过一段时间后 Notification 组件会自动关闭，但是通过设置`duration`，可以控制关闭的时间间隔，特别的是，如果设置为`0`，则不会自动关闭。注意：`duration`接收一个`Number`，单位为毫秒，默认为`4500`。

!!!demo1!!!

### 带有倾向性

带有 icon，常用来显示「成功、警告、消息、错误」类的系统消息

Notification 组件准备了四种通知类型：`success`, `warning`, `info`, `error`。通过`type`字段来设置，除此以外的值将被忽略。同时，我们也为 Notification 的各种 type 注册了方法，可以在不传入`type`字段的情况下像`open3`和`open4`那样直接调用。

!!!demo2!!!

### 自定义弹出位置

可以让 Notification 从屏幕四角中的任意一角弹出，使用`position`属性定义 Notification 的弹出位置，支持四个选项：`top-right`、`top-left`、`bottom-right`、`bottom-left`，默认为`top-right`。

!!!demo3!!!

### 带有偏移

让 Notification 偏移一些位置，Notification 提供设置偏移量的功能，通过设置 `offset` 字段，可以使弹出的消息距屏幕边缘偏移一段距离。注意在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量。

!!!demo4!!!

### 使用 HTML 片段

`message` 属性支持传入 HTML 片段，并将`useHtml`属性设置为 true，`message` 就会被当作 HTML 片段处理。

!!!demo5!!!

:::warning
`message` 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 [XSS 攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。因此在 `useHtml` 打开的情况下，请确保 `message` 的内容是可信的，**永远不要**将用户提交的内容赋值给 `message` 属性。
:::

> Message 提供`closeAll`方法，用于在特定业务时机去清除全部 message。

### Options

| 参数        | 说明                                                                     | 类型     | 可选值                                      | 默认值    |
| ----------- | ------------------------------------------------------------------------ | -------- | ------------------------------------------- | --------- |
| title       | 标题                                                                     | string   | —                                           | —         |
| message     | 说明文字                                                                 | string   | —                                           | —         |
| useHtml     | 是否将 message 属性作为 HTML 片段处理                                    | boolean  | —                                           | false     |
| type        | 主题样式，如果不在可选值内将被忽略                                       | string   | success/warning/info/error                  | —         |
| iconClass   | 自定义图标的类名。若设置了 `type`，则 `iconClass` 会被覆盖               | string   | —                                           | —         |
| customClass | 自定义类名                                                               | string   | —                                           | —         |
| duration    | 显示时间, 毫秒。设为 0 则不会自动关闭                                    | number   | —                                           | 4500      |
| position    | 自定义弹出位置                                                           | string   | top-right/top-left/bottom-right/bottom-left | top-right |
| closable    | 是否显示关闭按钮                                                         | boolean  | —                                           | true      |
| onClose     | 关闭时的回调函数                                                         | function | —                                           | —         |
| onClick     | 点击 Notification 时的回调函数                                           | function | —                                           | —         |
| offset      | 偏移的距离，在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量 | number   | —                                           | 0         |

### Methods

调用 `Notification` 会返回当前 Notification 的实例。如果需要手动关闭实例，可以调用它的 `close` 方法。
| 方法名 | 说明 |
| ---- | ---- |
| close | 关闭当前的 Notification |
