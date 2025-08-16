## Upload Button Component  

Provides a file selection interaction button.  

### Basic Usage  

!!!demo1!!!  

### Multiple File Upload  

Enable multi-file selection by configuring the `multiple` property.  

!!!demo2!!!  

### Restrict File Types  

Use the `mimeType` property to restrict upload file types. This property accepts values of type `string` or `string[]`.  

!!!demo3!!!  

### Limit File Size  

Configure the `maxFileSize` property to set the maximum allowed size per file (unit: **KB**).  

!!!demo4!!!  

### Custom Upload Display  

Hide the default upload button using the `hidden` property and implement custom uploads via method calls.  

!!!demo5!!!  

### Attributes  

| Parameter    | Description                                                  | Type               | Optional Values | Default |  
| ------------ | ------------------------------------------------------------ | ------------------ | --------------- | ------- |  
| icon         | Button icon                                                  | string             | —               | —       |  
| btnType      | Button type (corresponds to `jk-button`'s type property)     | string             | -               | -       |  
| title        | Button text (ignored if the `default` slot is specified)     | string             | —               | —       |  
| btnSize      | Button size (corresponds to `jk-button`'s size property)     | string             | —               | —       |  
| disabled     | Whether to disable the button                                | boolean            | —               | false   |  
| multiple     | Whether multiple selection is enabled                        | boolean            | —               | false   |  
| maxFileCount | Maximum number of files to upload                            | number             | —               | —       |  
| mimeType     | Allowed file types (supports wildcards, e.g., `image/*`)     | string / string[]  | —               | —       |  
| maxFileSize  | Maximum file size per upload (unit: **KB**)                  | number             | —               | —       |  
| hidden       | Hide the button (only available for programmatic calls)      | boolean            | —               | —       |  

### Events  

| Event Name | Description             | Callback Parameters |  
| ---------- | ----------------------- | ------------------- |  
| change     | Triggered on value change | —                  |  

### Methods  

| Method Name    | Description                                           | Parameters |  
| -------------- | ----------------------------------------------------- | ---------- |  
| selectFile     | Opens the file selection dialog                      | —          |  
| reloadUpload   | Resets upload data (for re-selecting the same files) | —          |