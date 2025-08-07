## Notification  

A notification bubble that appears floating in the corner of the page, displaying global notification messages.  

### Basic Usage  

A versatile notification bar, the Notification component provides notification functionality through the `Notification` method, which accepts an `options` literal parameter. At its simplest, you can set the `title` and `message` fields to configure the notification's heading and content. By default, the Notification component will automatically close after a certain period, but the `duration` parameter can be used to control the timeout interval. Notably, setting it to `0` will disable auto-closing. Note: `duration` accepts a `Number` in milliseconds, with a default value of `4500`.  

!!!demo1!!!  

### Contextual Notifications  

Notifications with icons, typically used to display system messages categorized as "success," "warning," "info," or "error."  

The Notification component provides four predefined types: `success`, `warning`, `info`, and `error`. These can be set via the `type` field—any other values will be ignored. Additionally, methods are registered for each type, allowing direct invocation (as in `open3` and `open4`) without explicitly setting the `type` field.  

!!!demo2!!!  

### Custom Position  

Notifications can appear from any of the four corners of the screen. Use the `position` attribute to define the popup location, supporting four options: `top-right`, `top-left`, `bottom-right`, and `bottom-left` (default: `top-right`).  

!!!demo3!!!  

### Offset  

Apply an offset to adjust the notification's position. The Notification component supports setting an offset distance via the `offset` field, shifting notifications away from the screen edge. Note: All active Notification instances should share the same offset value at any given time.  

!!!demo4!!!  

### HTML Fragments  

The `message` attribute supports HTML fragments when the `useHtml` property is set to `true`, treating the content as markup rather than plain text.  

!!!demo5!!!  

:::warning  
Although the `message` property supports HTML fragments, dynamically rendering arbitrary HTML on a website is highly dangerous due to the risk of [XSS attacks](https://en.wikipedia.org/wiki/Cross-site_scripting). When enabling `useHtml`, ensure the `message` content is trustworthy, and **never** assign user-submitted data to this attribute.  
:::  

> The Notification component provides a `closeAll` method to clear all active messages at specific business moments.  

### Options  

| Parameter     | Description                                                                 | Type      | Accepted Values                            | Default     |  
| ------------- | --------------------------------------------------------------------------- | --------- | ------------------------------------------ | ----------- |  
| title         | Notification title                                                          | string    | —                                          | —           |  
| message       | Notification text content                                                   | string    | —                                          | —           |  
| useHtml       | Whether to treat `message` as HTML markup                                   | boolean   | —                                          | false       |  
| type          | Notification type, ignored if not a predefined value                        | string    | success/warning/info/error                 | —           |  
| iconClass     | Custom icon class name (overridden if `type` is set)                        | string    | —                                          | —           |  
| customClass   | Custom CSS class for the notification                                       | string    | —                                          | —           |  
| duration      | Display duration in milliseconds. Set to `0` to disable auto-close          | number    | —                                          | 4500        |  
| position      | Notification popup position                                                 | string    | top-right/top-left/bottom-right/bottom-left | top-right   |  
| closable      | Whether to show the close button                                            | boolean   | —                                          | true        |  
| onClose       | Callback function when notification closes                                  | function  | —                                          | —           |  
| onClick       | Callback function when notification is clicked                              | function  | —                                          | —           |  
| offset        | Offset distance from the screen edge (consistent for all active instances)  | number    | —                                          | 0           |  

### Methods  

Invoking `Notification` returns the current notification instance. To manually close it, call the `close` method.  

| Method | Description |  
| ---- | ---- |  
| close | Closes the current Notification instance |