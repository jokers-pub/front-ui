## Upload Button

Provides an interactive button for file selection.

### Basic Usage

!!!demo1!!!

### Multiple File Upload

Enable multi-file selection by configuring the `multiple` property.

!!!demo2!!!

### Limit Selection Types

You can limit the upload types by configuring the `mimeType` property. This property can accept values of type `string` or `string[]`.

!!!demo3!!!

### Limit File Size

Limit the maximum size of each file by configuring the `maxFileSize` property. The unit is **kb**.

!!!demo4!!!

### Attributes

| Parameter    | Description                                                                       | Type              | Optional Values | Default Value |
| ------------ | --------------------------------------------------------------------------------- | ----------------- | --------------- | ------------- |
| icon         | Button icon                                                                       | string            | —               | —             |
| btnType      | Button type, corresponding to the `type` of `jk-button`                           | string            | -               | -             |
| title        | Button text. If the `default` area is specified, setting this property is invalid | string            | —               | —             |
| btnSize      | Button size, corresponding to the `size` of `jk-button`                           | string            | —               | —             |
| disabled     | Whether to disable                                                                | boolean           | —               | false         |
| multiple     | Whether to enable multi-selection                                                 | boolean           | —               | false         |
| maxFileCount | Maximum number of uploads                                                         | number            | —               | -             |
| mimeType     | Limit file types, wildcards are supported, e.g., **(image/\*)**                   | string / string[] | —               | —             |
| maxFileSize  | Maximum size limit for a single file, unit is **kb**                              | number            | —               | -             |

### Events

| Event Name | Description                  | Callback Parameters |
| ---------- | ---------------------------- | ------------------- |
| change     | Notification of value change | —                   |
