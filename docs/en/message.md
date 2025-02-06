## Message

It is often used for feedback prompts after active operations. The difference from Notification is that the latter is more used for passive reminders of system-level notifications.

### Basic Usage

It appears from the top and disappears automatically after 3 seconds. In terms of configuration, it is very similar to Notification. Therefore, some options are not explained in detail here. There is a list of options at the end of the article. You can combine it with the documentation of Notification to understand them.

!!!demo1!!!

### Different States

Used to display operation feedback of "success, warning, message, error" types. When more properties need to be customized, Message can also accept an object as a parameter. For example, setting the `type` field can define different states, with the default being `info`. At this time, the body content is passed in as the value of `message`.

> Currently, Message provides 4 commonly used calling methods, including `info`, `success`, `warning`, and `error`.

!!!demo2!!!

### Closable

You can add a close button. By default, the Message cannot be manually closed. If you need a manually closable Message, you can use the `showClose` field. In addition, like Notification, Message has a controllable `duration`. Setting it to `0` means it will not be automatically closed, with the default being 3000 milliseconds.

!!!demo3!!!

### Text Centered

Use the `center` property to center the text horizontally.

!!!demo4!!!

### Using HTML Fragments

Set the `useHtml` property to `true`, and `message` will be treated as an HTML fragment.

!!!demo5!!!

:::warning
Although the `message` property supports passing in HTML fragments, dynamically rendering arbitrary HTML on a website is very dangerous because it is prone to [XSS attacks](https://en.wikipedia.org/wiki/Cross-site_scripting). Therefore, when `useHtml` is turned on, please ensure that the content of `message` is trustworthy. **Never** assign user-submitted content to the `message` property.
:::

> Message provides the `closeAll` method to clear all messages at specific business times.

### Options

| Parameter   | Description                                                         | Type    | Optional Values            | Default Value |
| ----------- | ------------------------------------------------------------------- | ------- | -------------------------- | ------------- |
| message     | Message text                                                        | string  | —                          | —             |
| type        | Theme                                                               | string  | success/warning/info/error | info          |
| iconClass   | Class name of the custom icon, which will override `type`           | string  | —                          | —             |
| useHtml     | Whether to treat the `message` property as an HTML fragment         | boolean | —                          | false         |
| customClass | Custom class name                                                   | string  | —                          | —             |
| duration    | Display time in milliseconds. Set to 0 to prevent automatic closure | number  | —                          | 3000          |
| closable    | Whether to display the close button                                 | boolean | —                          | false         |
| center      | Whether the text is centered                                        | boolean | —                          | false         |
| offset      | The offset of the Message from the top of the window                | number  | —                          | 20            |

### Methods

Calling `Message` will return the current Message instance. If you need to manually close the instance, you can call its `close` method.

| Method Name | Description               |
| ----------- | ------------------------- |
| close       | Close the current Message |

### Events

| Event Name | Description                          |
| ---------- | ------------------------------------ |
| close      | Triggered when the Message is closed |
