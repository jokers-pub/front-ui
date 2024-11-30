## Select 选择器

当选项过多时，使用下拉菜单展示并选择内容。

### 基础用法

适用广泛的基础单选
`value`的值为当前被选中的`jk-option`的 value 属性值

!!!demo1!!!

### 有禁用选项

在`jk-option`中，设定`disabled`值为 true，即可禁用该选项

!!!demo2!!!

### 可清空单选

包含清空按钮，可将选择器清空为初始状态

为`jk-select`设置`clearable`属性，则可将选择器清空。需要注意的是，`clearable`属性仅适用于单选。

!!!demo3!!!

### 多选下拉

适用性较广的基础多选，用 Tag 展示已选项

!!!demo4!!!

### 自定义模板

可以自定义备选项

!!!demo5!!!

### 分组

备选项进行分组展示

!!!demo6!!!

### 可搜索

可以利用搜索功能快速查找选项

添加`filterable`属性即可启用搜索功能。默认情况下，Select 会找出所有`label`属性包含输入值的选项。如果希望使用其他的搜索逻辑，可以通过传入一个`filter-method`来实现。`filter-method`为一个`Function`，它会在输入值发生变化时调用，参数为当前输入值。

!!!demo7!!!

### 多选可搜索

!!!demo8!!!

### 尺寸

可通过 `size` 属性指定输入框的尺寸，除了默认的大小外，还提供了 medium、small 和 mini 三种尺寸。

!!!demo9!!!

### Select 属性

| 参数           | 说明                                                                                                          | 类型                      | 可选值            | 默认值     |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------- | ----------------- | ---------- |
| value          | 绑定值                                                                                                        | boolean / string / number | —                 | —          |
| class          | 自定义 class 样式                                                                                             | string                    | -                 | -          |
| multiple       | 是否多选                                                                                                      | boolean                   | —                 | false      |
| disabled       | 是否禁用                                                                                                      | boolean                   | —                 | false      |
| value-key      | 作为 value 唯一标识的键名，绑定值为对象类型时必填                                                             | string                    | —                 | value      |
| size           | 输入框尺寸                                                                                                    | string                    | medium/small/mini | —          |
| clearable      | 是否可以清空选项                                                                                              | boolean                   | —                 | false      |
| multiple-limit | 多选时用户最多可以选择的项目数，为 0 则不限制                                                                 | number                    | —                 | 0          |
| name           | 用于对接 form 中 name 属性                                                                                    | string                    | —                 | —          |
| placeholder    | 占位符                                                                                                        | string                    | —                 | 请选择     |
| filterable     | 是否可搜索                                                                                                    | boolean                   | —                 | false      |
| filter-method  | 自定义搜索方法，查询时会将关键字、选中 label、选项值传递到改方法内，该方法返回 true/false，来决定选项是否显示 | function                  | —                 | —          |
| remote         | 是否为远程搜索                                                                                                | boolean                   | —                 | false      |
| remote-method  | 远程搜索方法                                                                                                  | function                  | —                 | —          |
| loading        | 是否正在从远程获取数据                                                                                        | boolean                   | —                 | false      |
| loading-text   | 远程加载时显示的文字                                                                                          | string                    | —                 | 加载中     |
| no-match-text  | 搜索条件无匹配时显示的文字，也可以使用`section"empty"`设置                                                    | string                    | —                 | 无匹配数据 |
| no-data-text   | 选项为空时显示的文字，也可以使用`section"empty"`设置                                                          | string                    | —                 | 无数据     |
| fullWidth      | 是否宽度 100%                                                                                                 | boolean                   | —                 | -          |

### Select 事件

| 事件名称 | 说明                 | 回调参数     |
| -------- | -------------------- | ------------ |
| change   | 选中值发生变化时触发 | 目前的选中值 |

### Select section

|   name  | 说明            |
| ------- | --------------- |
| default | Option 组件列表 |
| empty   | 无选项时的列表  |

### Option Group 属性

| 参数     | 说明                           | 类型    | 可选值 | 默认值 |
| -------- | ------------------------------ | ------- | ------ | ------ |
| label    | 分组的组名                     | string  | —      | —      |
| disabled | 是否将该分组下所有选项置为禁用 | boolean | —      | false  |

### Option 属性

| 参数     | 说明                                      | 类型                 | 可选值 | 默认值 |
| -------- | ----------------------------------------- | -------------------- | ------ | ------ |
| value    | 选项的值                                  | string/number/object | —      | —      |
| label    | 选项的标签，若不设置则默认与 `value` 相同 | string/number        | —      | —      |
| disabled | 是否禁用该选项                            | boolean              | —      | false  |
