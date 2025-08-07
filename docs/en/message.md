## Message Prompt

Commonly used for feedback prompts after active operations. The key difference from Notification is that the latter is more often used for passive system-level alerts.

### Basic Usage

Appears from the top and automatically disappears after 3 seconds. The configuration is very similar to Notification, so some options won't be explained in detail here. A list of options is provided at the end, which can be understood by referring to Notification's documentation.

!!!demo1!!!

### Different States

Used to display feedback for operations with "success, warning, message, error" classifications. When more custom properties are needed, Message can also accept an object as a parameter. For example, setting the `type` field can define different states, with the default being `info`. In this case, the main content is passed via the `message` value.  

> Currently, Message provides 4 commonly used invocation methods, including `info`, `success`, `warning`, and `error`.

!!!demo2!!!

### Closable  

A close button can be added. By default, Message cannot be manually closed. If a manually closable Message is needed, use the `showClose` field. Additionally, like Notification, Message has a controllable `duration`. Setting it to `0` means it won't close automatically; the default is 3000 milliseconds.  

!!!demo3!!!

### Centered Text  

Use the `center` property to horizontally center the text.  

!!!demo4!!!  

### Using HTML Fragments  

Set the `useHtml` property to `true`, and `message` will be treated as an HTML fragment.  

!!!demo5!!!  

:::warning  
Although the `message` property supports passing HTML fragments, dynamically rendering arbitrary HTML on a website is highly dangerous as it can easily lead to [XSS attacks](https://en.wikipedia.org/wiki/Cross-site_scripting). Therefore, when `useHtml` is enabled, ensure the content of `message` is trusted. **Never** assign user-submitted content to the `message` property.  
:::

> Message provides the `closeAll` method, which can be used to clear all messages during specific business scenarios.  

### Options  

| Parameter     | Description                                  | Type     | Accepted Values               | Default |  
| ------------- | -------------------------------------------- | -------- | ----------------------------- | ------- |  
| message       | Message text                                 | string   | —                             | —       |  
| type          | Theme                                        | string   | success/warning/info/error    | info    |  
| iconClass     | Custom icon class name, overrides `type`     | string   | —                             | —       |  
| useHtml       | Whether to treat `message` as HTML fragment  | boolean  | —                             | false   |  
| customClass   | Custom class name                            | string   | —                             | —       |  
| duration      | Display duration in ms. 0 means no auto-close | number   | —                             | 3000    |  
| closable      | Whether to show a close button               | boolean  | —                             | false   |  
| center        | Whether to center the text                   | boolean  | —                             | false   |  
| offset        | Offset from the top of the window            | number   | —                             | 20      |  

### Methods  

Calling `Message` returns the current Message instance. To manually close it, call its `close` method.  
| Method | Description |  
| ------ | ----------- |  
| close  | Closes the current Message |  

### Events  

| Event  | Description                |  
| ------ | -------------------------- |  
| close  | Triggered when Message is closed |