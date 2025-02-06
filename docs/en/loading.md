## Loading

Display animations while data is being loaded.

### Regional Display

You can specify the display host of the loading by configuring the `target` attribute.

!!!demo1!!!

### Full-screen Display

Set `fullscreen` or specify `target` as **body** to achieve full-screen loading.

!!!demo2!!!

> Please note that there can only be one full-screen loading. If triggered repeatedly, it will return the previous uncompleted loading operation component.

It should be noted that full-screen loading called as a service is a singleton: if you call full-screen loading again before the previous full-screen loading is closed, a new loading instance will not be created, but the existing full-screen loading instance will be returned:

```js
let loading1 = Loading({ fullscreen: true });
let loading2 = Loading({ fullscreen: true });
console.log(loading1 === loading2); // true
```

At this time, calling the `close` method of either of them can close this full-screen loading.

### Customization

You can customize the loading text, icon, and background color.

!!!demo3!!!

### Options

| Parameter   | Description                                                                                                                                                                                                        | Type                                                     | Optional Values | Default Value |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- | --------------- | ------------- |
| target      | The DOM node that the Loading needs to cover. You can pass in a DOM object or a string; if a string is passed in, it will be used as a parameter to `document.querySelector` to obtain the corresponding DOM node. | Element / string / VNode.Node; VNode nodes are supported | —               | document.body |
| fullscreen  | Whether it is full-screen                                                                                                                                                                                          | boolean                                                  | —               | true          |
| text        | The loading text displayed below the loading icon                                                                                                                                                                  | string                                                   | —               | —             |
| spinner     | Custom loading icon class name                                                                                                                                                                                     | string                                                   | —               | —             |
| customClass | Custom class name of the Loading                                                                                                                                                                                   | string                                                   | —               | —             |

### Methods

Calling `Loading` will return the current Loading instance. If you need to manually close the instance, you can call its `close` method.

| Method Name | Description               |
| ----------- | ------------------------- |
| close       | Close the current Loading |
