## Upload Btn 上传按钮组件

提供文件选择交互按钮。

### 基础用法

!!!demo1!!!

### 多文件上传

通过配置`multiple`来启用多选文件选择。

!!!demo2!!!

### 限制选择类型

可通过配置`mimeType`属性来限制上传类型，该属性可以传入`string`、`string[]`类型的值。

!!!demo3!!!

### 限制传入文件大小

通过配置`maxFileSize`属性来限制每个文件的最大大小，单位为**kb**。

!!!demo4!!!

### 自定义上传展示

使用`hidden`隐藏上传按钮，通过方法调用实现自定义上传。

!!!demo5!!!

### Attributes

| 参数         | 说明                                              | 类型              | 可选值 | 默认值 |
| ------------ | ------------------------------------------------- | ----------------- | ------ | ------ |
| icon         | 按钮 icon 图标                                    | string            | —      | —      |
| btnType      | 按钮类型，对应 jk-button 的 type 类型             | string            | -      | -      |
| title        | 按钮文本，若有指定 default 区域，则设置该属性无效 | string            | —      | —      |
| btnSize      | 按钮大小，对应 jk-button 的 size 类型             | string            | —      | —      |
| disabled     | 是否禁用                                          | boolean           | —      | false  |
| multiple     | 是否启用多选                                      | boolean           | —      | false  |
| maxFileCount | 最大上传个数                                      | number            | —      |
| mimeType     | 限制文件类型，支持通配符例如：**(image/\*)**      | string / string[] | —      | —      |
| maxFileSize  | 单个文件最大大小限制，单位**kb**                  | number            | —      |
| hidden       | 隐藏按钮，仅提供方法调用                          | boolean           | —      |

### Events

| 事件名称 | 说明       | 回调参数 |
| -------- | ---------- | -------- |
| change   | 值变更通知 | —        |

### Methods

| 方法名称     | 说明                                             | 参数 |
| ------------ | ------------------------------------------------ | ---- |
| selectFile   | 打开选择文件窗口                                 | —    |
| reloadUpload | 重置文件上传数据（用于相同文件选择时的索引重置） | —    |
