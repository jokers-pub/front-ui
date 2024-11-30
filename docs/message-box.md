## MessageBox 弹框

模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。

> 从场景上说，MessageBox 的作用是美化系统自带的 `alert`、`confirm` 和 `prompt`，因此适合展示较为简单的内容。如果需要弹出较为复杂的内容，请使用 Dialog。

### 消息提示

当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。

调用`MessageBox.alert`方法即可打开消息提示，它模拟了系统的 `alert`，无法通过按下 ESC 或点击框外关闭。此例中接收了两个参数，`message`和`title`。

!!!demo1!!!

### 确认消息

提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。

调用`MessageBox.confirm`方法即可打开消息提示，它模拟了系统的 `confirm`。Message Box 组件也拥有极高的定制性，我们可以传入`options`作为第三个参数，它是一个字面量对象。`type`字段表明消息类型，可以为`success`，`error`，`info`和`warning`，无效的设置将会被忽略。注意，第二个参数`title`必须定义为`String`类型，如果是`Object`，会被理解为`options`。

!!!demo2!!!

### 提交内容

当用户进行操作时会被触发，中断用户操作，提示用户进行输入的对话框。

调用`MessageBox.prompt`方法即可打开消息提示，它模拟了系统的 `prompt`。可以用`validate`规定校验函数，可以返回`String`|`Boolean`，返回的字符串相当于定义了`错误提示`字段，返回`false`则提示默认错误信息，为了精准化交互，建议返回`String`错误提示文本。此外，可以用`inputPlaceholder`字段来定义输入框的占位符。

通过`beforeClose`可以自定义操作，例如：数据提交等，然后交由调用者决定是否要`close`窗口。

!!!demo3!!!

### 使用 HTML 片段

`message` 属性支持传入 HTML 片段。将`useHtml`属性设置为 true，`message` 就会被当作 HTML 片段处理。

:::warning
`message` 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 [XSS 攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。因此在 `useHtml` 打开的情况下，请确保 `message` 的内容是可信的，**永远不要**将用户提交的内容赋值给 `message` 属性。
:::

!!!demo4!!!

### 队列显示

`MessageBox`的展现形式和浏览的消息提示框逻辑一致，也是采用了队列展示，`先进先出`的模式。如果有场景需要我们提供`MessageBox.closeAll`方法来关闭当前弹窗，并清空列队。

!!!demo5!!!

### 区分取消与关闭

有些场景下，点击取消按钮与点击关闭按钮有着不同的含义。默认情况下，当用户触发取消（点击取消按钮）和触发关闭（点击关闭按钮或遮罩层、按下 ESC 键）时，Promise 的 reject 回调和`callback`回调的参数均为 'cancel'。如果将`distinguishCancelAndClose`属性设置为 true，则上述两种行为的参数分别为 'cancel' 和 'close'。

!!!demo6!!!

### 居中布局

内容支持居中布局，将 `center` 设置为 `true` 即可开启居中布局

!!!demo7!!!

### 引用方式

引入 `MessageBox`：

```javascript
import { MessageBox } from "@joker.front/ui";
```

那么对应于上述四个全局方法的调用方法依次为：MessageBox, MessageBox.alert, MessageBox.confirm 和 MessageBox.prompt，调用参数与全局方法相同。

### Options

| 参数                      | 说明                                                                                                                                 | 类型                                                                                                                                                                                                                         | 可选值                           | 默认值                                          |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------- |
| title                     | MessageBox 标题                                                                                                                      | string                                                                                                                                                                                                                       | —                                | 温馨提示                                        |
| message                   | MessageBox 消息正文内容                                                                                                              | string                                                                                                                                                                                                                       | —                                | —                                               |
| useHtml                   | 是否将 message 属性作为 HTML 片段处理                                                                                                | boolean                                                                                                                                                                                                                      | —                                | false                                           |
| type                      | 消息类型，用于显示图标                                                                                                               | string                                                                                                                                                                                                                       | success / info / warning / error | —                                               |
| iconClass                 | 自定义图标的类名，会覆盖 `type`                                                                                                      | string                                                                                                                                                                                                                       | —                                | —                                               |
| customClass               | MessageBox 的自定义类名                                                                                                              | string                                                                                                                                                                                                                       | —                                | —                                               |
| callback                  | 若不使用 Promise，可以使用此参数指定 MessageBox 关闭后的回调                                                                         | function(action, instance)，action 的值为'confirm', 'cancel'或'close', instance 为 MessageBox 实例，可以通过它访问实例上的属性和方法                                                                                         | —                                | —                                               |
| closable                  | MessageBox 是否显示右上角关闭按钮                                                                                                    | boolean                                                                                                                                                                                                                      | —                                | true                                            |
| beforeClose               | MessageBox 关闭前的回调，会暂停实例的关闭                                                                                            | function(action, instance, close)，action 的值为'confirm', 'cancel'或'close'；instance 为 MessageBox 实例，可以通过它访问实例上的属性和方法；close 用于关闭 MessageBox 实例 ；可通过读取 instance 中 inputValue 进行值的读取 | —                                | —                                               |
| distinguishCancelAndClose | 是否将取消（点击取消按钮）与关闭（点击关闭按钮或遮罩层、按下 ESC 键）进行区分                                                        | boolean                                                                                                                                                                                                                      | —                                | false                                           |
| showCancelButton          | 是否显示取消按钮                                                                                                                     | boolean                                                                                                                                                                                                                      | —                                | false（以 confirm 和 prompt 方式调用时为 true） |
| showConfirmButton         | 是否显示确定按钮                                                                                                                     | boolean                                                                                                                                                                                                                      | —                                | true                                            |
| cancelButtonText          | 取消按钮的文本内容                                                                                                                   | string                                                                                                                                                                                                                       | —                                | 取消                                            |
| confirmButtonText         | 确定按钮的文本内容                                                                                                                   | string                                                                                                                                                                                                                       | —                                | 确定                                            |
| closeOnClickModal         | 是否可通过点击遮罩关闭 MessageBox                                                                                                    | boolean                                                                                                                                                                                                                      | —                                | true（以 alert 方式调用时为 false）             |
| closeOnPressEscape        | 是否可通过按下 ESC 键关闭 MessageBox                                                                                                 | boolean                                                                                                                                                                                                                      | —                                | true（以 alert 方式调用时为 false）             |
| showInput                 | 是否显示输入框                                                                                                                       | boolean                                                                                                                                                                                                                      | —                                | false（以 prompt 方式调用时为 true）            |
| inputPlaceholder          | 输入框的占位符                                                                                                                       | string                                                                                                                                                                                                                       | —                                | —                                               |
| validate                  | 输入框的校验函数。可以返回布尔值或字符串，若返回一个字符串, 则返回结果会被赋值给错误信息，其中 validate 中参数为当前文本框的输入值。 | function                                                                                                                                                                                                                     | —                                | —                                               |
| center                    | 是否居中布局                                                                                                                         | boolean                                                                                                                                                                                                                      | —                                | false                                           |
| roundButton               | 是否使用圆角按钮                                                                                                                     | boolean                                                                                                                                                                                                                      | —                                | false                                           |
| id                        | 若配置 id，则在同一时刻同一个序列中只会弹出一次                                                                                      | string                                                                                                                                                                                                                       | —                                | -                                               |

### 方法

| 方法名      | 说明             | 参数          |
| ----------- | ---------------- | ------------- |
| close       | 关闭当前消息弹窗 | —             |
| setErrorMsg | 手动配置错误信息 | errMsg:string |
