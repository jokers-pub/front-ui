## Notification

It floats in the corner of the page to display global notification reminder messages.

### Basic Usage

A widely applicable notification bar. The Notification component provides a notification function with the `Notification` method, which accepts an `options` literal parameter. In the simplest case, you can set the `title` and `message` fields to set the title and body of the notification. By default, the Notification component will automatically close after a certain period of time. However, by setting `duration`, you can control the time interval for closing. Notably, if set to `0`, it will not close automatically. Note: `duration` accepts a `Number` with the unit of milliseconds, and the default value is `4500`.

!!!demo1!!!

### With 倾向性

Comes with an icon, often used to display system messages of "success, warning, message, error" types.

The Notification component has prepared four notification types: `success`, `warning`, `info`, `error`. Set through the `type` field, and values other than these will be ignored. At the same time, we have also registered methods for various types of Notification, which can be called directly like `open3` and `open4` without passing in the `type` field.

!!!demo2!!!

### Custom Pop-up Position

You can make the Notification pop up from any of the four corners of the screen. Use the `position` property to define the pop-up position of the Notification. Four options are supported: `top-right`, `top-left`, `bottom-right`, `bottom-left`, with the default being `top-right`.

!!!demo3!!!

### With Offset

Make the Notification offset by some distance. The Notification provides the function of setting the offset. By setting the `offset` field, the popped-up message can be offset from the edge of the screen by a certain distance. Note that at the same moment, all Notification instances should have the same offset.

!!!demo4!!!

### Using HTML Fragments

The `message` property supports passing in HTML fragments. Set the `useHtml` property to `true`, and `message` will be treated as an HTML fragment.

!!!demo5!!!

:::warning
Although the `message` property supports passing in HTML fragments, dynamically rendering arbitrary HTML on a website is very dangerous because it is prone to [XSS attacks](https://en.wikipedia.org/wiki/Cross-site_scripting). Therefore, when `useHtml` is turned on, please ensure that the content of `message` is trustworthy. **Never** assign user-submitted content to the `message` property.
:::

> Message provides the `closeAll` method to clear all messages at specific business times.

### Options

| Parameter   | Description                                                                                 | Type     | Optional Values                             | Default Value |
| ----------- | ------------------------------------------------------------------------------------------- | -------- | ------------------------------------------- | ------------- |
| title       | Title                                                                                       | string   | —                                           | —             |
| message     | Explanation text                                                                            | string   | —                                           | —             |
| useHtml     | Whether to treat the `message` property as an HTML fragment                                 | boolean  | —                                           | false         |
| type        | Theme style, will be ignored if not in the optional values                                  | string   | success/warning/info/error                  | —             |
| iconClass   | Class name of the custom icon. If `type` is set, `iconClass` will be overridden             | string   | —                                           | —             |
| customClass | Custom class name                                                                           | string   | —                                           | —             |
| duration    | Display time in milliseconds. Set to 0 to prevent automatic closure                         | number   | —                                           | 4500          |
| position    | Custom pop-up position                                                                      | string   | top-right/top-left/bottom-right/bottom-left | top-right     |
| closable    | Whether to display the close button                                                         | boolean  | —                                           | true          |
| onClose     | Callback function when closing                                                              | function | —                                           | —             |
| onClick     | Callback function when clicking the Notification                                            | function | —                                           | —             |
| offset      | Offset distance. At the same moment, all Notification instances should have the same offset | number   | —                                           | 0             |

### Methods

Calling `Notification` will return the current Notification instance. If you need to manually close the instance, you can call its `close` method.

| Method Name | Description                    |
| ----------- | ------------------------------ |
| close       | Close the current Notification |
