## Image

An image container that retains the characteristics of the native `img`, supports lazy loading, and allows for custom placeholders, handling of load failures, etc.

### Basic Usage

!!!demo1!!!

### Placeholder Content

!!!demo2!!!

### Load Failure

!!!demo3!!!

### Lazy Loading

!!!demo4!!!

### Large Image Preview

!!!demo5!!!

### Attributes

| Parameter        | Description                                                                           | Type                 | Optional Values                            | Default Value                                                             |
| ---------------- | ------------------------------------------------------------------------------------- | -------------------- | ------------------------------------------ | ------------------------------------------------------------------------- |
| src              | Image source, same as the native one                                                  | string               | —                                          | —                                                                         |
| class            | Custom class style                                                                    | string               | -                                          | -                                                                         |
| fit              | Determines how the image fits into the container box, same as the native `object-fit` | string               | fill / contain / cover / none / scale-down | —                                                                         |
| lazy             | Whether to enable lazy loading                                                        | boolean              | —                                          | false                                                                     |
| scroll-container | After enabling lazy loading, the container that listens to the `scroll` event         | string / HTMLElement | —                                          | The nearest parent element with an `overflow` value of `auto` or `scroll` |
| preview-src-list | Enables the image preview function                                                    | Array                | —                                          | —                                                                         |
| z-index          | Sets the `z-index` of the image preview                                               | Number               | —                                          | 2000                                                                      |
| errMsg           | The prompt when loading fails                                                         | string               | —                                          | Loading failed                                                            |

### Events

| Event Name | Description                                     | Callback Parameters |
| ---------- | ----------------------------------------------- | ------------------- |
| load       | Triggered when the image is loaded successfully | (e: Event)          |
| error      | Triggered when the image fails to load          | (e: Error)          |

### Sections

| Event Name  | Description                                          |
| ----------- | ---------------------------------------------------- |
| placeholder | The placeholder content when the image is not loaded |
| error       | The content when loading fails                       |
