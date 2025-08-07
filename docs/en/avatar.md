## Avatar 

Display user or entity information using icons, images, or characters.

### Basic Usage 

Set the shape and size of the avatar using `shape` and `size`.

!!! demo1 !!!

### Display Types 

Supports three types: icon, image, and character.

!!! demo2 !!!

### Fallback Behavior for Failed Image Loading 

Fallback behavior when the image fails to load when the display type is set to image.

!!! demo3 !!!

### How Images Fit the Container 

When the display type is image, the `fit` property defines how the image fits the container, similar to the native `object-fit`.

!!! demo4 !!!

### Attributes 

| Attribute | Description                                                                 | Type          | Accepted Values                     | Default |
| --------- | -------------------------------------------------------------------------- | ------------- | ----------------------------------- | ------- |
| icon      | Set the icon type of the avatar; refer to the Icon component               | string        | -                                   | —       |
| size      | Set the size of the avatar                                                 | number/string | number / large / medium / small     | large   |
| shape     | Set the shape of the avatar                                                | string        | circle / square                     | circle  |
| src       | The resource address of the image avatar                                   | string        | —                                   | -       |
| srcSet    | A comma-separated list of strings indicating possible images for user agent | string        | —                                   | true    |
| alt       | Alternative text describing the image                                      | string        | —                                   | -       |
| fit       | When the display type is image, set how the image fits the container       | string        | fill / contain / cover / none / scale-down | cover   |
| class     | Custom class style                                                        | string        | -                                   | -       |
| error     | Callback when image loading fails; returning `false` disables the default fallback behavior | function      | -                                   | -       |

### Events 

| Event Name | Description               | Parameters |
| ---------- | ------------------------- | ---------- |
| click      | Triggered when clicked    | -          |

### Slots 

| Slot Name  | Description               |
| ---------- | ------------------------- |
| default    | Custom avatar content     |