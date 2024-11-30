## Cascader 级联选择器

当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。

### 基础用法

有两种触发子菜单的方式，只需为 Cascader 的`options`属性指定选项数组即可渲染出一个级联选择器。通过`props.expandTrigger`可以定义展开子级菜单的触发方式。

!!!demo1!!!

### 禁用选项

通过在数据源中设置 `disabled` 字段来声明该选项是禁用的，本例中，`options`指定的数组中的第一个元素含有`disabled: true`键值对，因此是禁用的。在默认情况下，Cascader 会检查数据中每一项的`disabled`字段是否为`true`，如果你的数据中表示禁用含义的字段名不为`disabled`，可以通过`props.disabled`属性来指定（详见下方 API 表格）。当然，`value`、`label`和`children`这三个字段名也可以通过同样的方式指定。

!!!demo2!!!

### 可清空

通过 `clearable` 设置输入框可清空

!!!demo3!!!

### 仅显示最后一级

可以仅在输入框中显示选中项最后一级的标签，而不是选中项所在的完整路径。属性`show-all-levels`定义了是否显示完整的路径，将其赋值为`false`则仅显示最后一级

!!!demo4!!!

### 多选

可通过 `multiple = true` 来开启多选模式。

!!!demo5!!!

### 动态加载

当选中某一级时，动态加载该级下的选项。
通过`lazy`开启动态加载，并通过`lazyload`来设置加载数据源的方法。`lazyload`方法有两个参数，第一个参数`node`为当前点击的节点，第二个`resolve`为数据加载完成的回调(必须调用)。为了更准确的显示节点的状态，还可以对节点数据添加是否为叶子节点的标志位 (默认字段为`leaf`，可通过`props.leaf`修改)，否则会简单的以有无子节点来判断是否为叶子节点。

!!!demo6!!!

### 可搜索

可以快捷地搜索选项并选择。
将`filterable`赋值为`true`即可打开搜索功能，默认会匹配节点的`label`或所有父节点的`label`(由`show-all-levels`决定)中包含输入值的选项。你也可以用`filter-method`自定义搜索逻辑，接受一个函数，第一个参数是节点`node`，第二个参数是搜索关键词`keyword`，通过返回布尔值表示是否命中。

!!!demo7!!!

### 自定义节点内容

可以自定义备选项的节点内容，可以通过`section`对级联选择器的备选项的节点内容进行自定义，具名区域（section） 会传入两个字段 `node` 和 `data`，分别表示当前节点的 Node 对象和数据。

!!!demo8!!!

### Cascader Attributes

| 参数           | 说明                                                                                                | 类型                    | 可选值                | 默认值    |
| -------------- | --------------------------------------------------------------------------------------------------- | ----------------------- | --------------------- | --------- |
| value          | 选中项绑定值                                                                                        | -                       | —                     | —         |
| options        | 可选项数据源，键名可通过 `Props` 属性配置                                                           | array                   | —                     | —         |
| props          | 配置选项，具体见下表                                                                                | object                  | —                     | —         |
| class          | 自定义 class 样式                                                                                   | string                  | -                     | -         |
| size           | 尺寸                                                                                                | string                  | medium / small / mini | —         |
| placeholder    | 输入框占位文本                                                                                      | string                  | —                     | 请选择    |
| disabled       | 是否禁用                                                                                            | boolean                 | —                     | false     |
| clearable      | 是否支持清空选项                                                                                    | boolean                 | —                     | false     |
| show-all-leves | 输入框中是否显示选中值的完整路径                                                                    | boolean                 | —                     | true      |
| separator      | 选项分隔符                                                                                          | string                  | —                     | 斜杠' / ' |
| filterable     | 是否可搜索选项                                                                                      | boolean                 | —                     | —         |
| filter-method  | 自定义搜索逻辑，第一个参数是节点`node`，第二个参数是搜索关键词`keyword`，通过返回布尔值表示是否命中 | function(node, keyword) | -                     | -         |

### Cascader Events

| 事件名称 | 说明                 | 回调参数     |
| -------- | -------------------- | ------------ |
| change   | 当选中节点变化时触发 | 选中节点的值 |

### Cascader Section

| 名称    | 说明                                      |
| ------- | ----------------------------------------- |
| default | 自定义备选项的节点内容，参数为 { node }， |

### Props

| 参数          | 说明                                                                                               | 类型                                                                                     | 可选值        | 默认值     |
| ------------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------- | ---------- |
| expandTrigger | 次级菜单的展开方式                                                                                 | string                                                                                   | click / hover | 'click'    |
| multiple      | 是否多选                                                                                           | boolean                                                                                  | -             | false      |
| emitPath      | 在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值 | boolean                                                                                  | -             | true       |
| lazy          | 是否动态加载子节点，需与 lazyLoad 方法结合使用                                                     | boolean                                                                                  | -             | false      |
| lazyLoad      | 加载动态数据的方法，仅在 lazy 为 true 时有效                                                       | function(node, resolve)，`node`为当前点击的节点，`resolve`为数据加载完成的回调(必须调用) | -             | -          |
| value         | 指定选项的值为选项对象的某个属性值                                                                 | string                                                                                   | —             | 'value'    |
| label         | 指定选项标签为选项对象的某个属性值                                                                 | string                                                                                   | —             | 'label'    |
| children      | 指定选项的子选项为选项对象的某个属性值                                                             | string                                                                                   | —             | 'children' |
| disabled      | 指定选项的禁用为选项对象的某个属性值                                                               | string                                                                                   | —             | 'disabled' |
| leaf          | 指定选项的叶子节点的标志位为选项对象的某个属性值                                                   | string                                                                                   | —             | 'leaf'     |
