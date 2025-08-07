## Upload Btn Component  

Provides file selection interaction via button.  

### Basic Usage  

!!!demo1!!!  

### Multiple File Upload  

Enable multi-file selection by configuring the `multiple` property.  

!!!demo2!!!  

### File Type Restriction  

Restrict uploadable file types via the `mimeType` property, which accepts values of type `string` or `string[]`.  

!!!demo3!!!  

### File Size Limitation  

Configure the `maxFileSize` property to set the maximum file size per upload (unit: **kb**).  

!!!demo4!!!  

### Attributes  

| Parameter    | Description | Type | Optional Values | Default |  
| ----------- | ----------- | ---- | -------------- | ------- |  
| icon        | Button icon | string | — | — |  
| btnType     | Button type (corresponds to `jk-button`'s type) | string | - | - |  
| title       | Button text (invalid if slot default is specified) | string | — | — |  
| btnSize     | Button size (corresponds to `jk-button`'s size) | string | — | — |  
| disabled    | Disabled state | boolean | — | false |  
| multiple    | Enable multi-select | boolean | — | false |  
| maxFileCount | Maximum number of uploads | number | — |  
| mimeType    | Restrict file types (supports wildcards, e.g., `image/*`) | string / string[] | — | — |  
| maxFileSize | Maximum file size per upload (unit: **kb**) | number | — |  

### Events  

| Event Name | Description | Callback Parameters |  
| --------- | ----------- | ------------------ |  
| change    | Triggers on value change | — |