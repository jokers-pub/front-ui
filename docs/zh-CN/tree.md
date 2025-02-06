## Tree 树形控件

用清晰的层级结构展示信息，可展开或折叠。

### 基础用法

基础的树形结构展示。

!!!demo1!!!

### 可选择

适用于需要选择层级时使用，该 Demo 还展示了动态加载。

!!!demo2!!!

### 节点禁用以及选择

通过设置`disabled`可以实现节点的禁用，该属性一般配合`show-checkbox`进行使用。

本示例还展示了如何获取和设置选中的节点，如果想通过**key**进行获取和设置，建议配置对应的`node-key`

> 若不配置 node-key 或取值为 undefind 时，则会默认生成一个内部 id 作为 key

!!!demo3!!!

### 自定义节点模板

通过使用`section`可以实现自定义节点模板的展示。

!!!demo4!!!

### 节点过滤

通过关键字过滤节点，在需要对节点进行过滤时，调用 Tree 实例的`filter`方法，参数为关键字。需要注意的是，此时需要设置`filter-method`，值为过滤函数，默认该方法会根据节点的 label 进行字符过滤查询。

!!!demo5!!!

### 可拖拽

通过开启`draggable`字段来启动树节点的拖拽功能，并可以配置哪些节点可拖动，哪些节点可拖入节点。

!!!demo6!!!

### Attributes

| 参数                  | 说明                                                                                                             | 类型                    | 可选值 | 默认值        |
| --------------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------- | ------ | ------------- |
| data                  | 展示数据                                                                                                         | array                   | —      | —             |
| class                 | 自定义 class 样式                                                                                                | string                  | -      | -             |
| empty-text            | 内容为空的时候展示的文本                                                                                         | String                  | —      | —             |
| empty-size            | 空面板尺寸本                                                                                                     | String                  | —      | —             |
| node-key              | 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的                                                             | String                  | —      | —             |
| load                  | 加载子树数据的方法，仅当 lazy 属性为 true 时生效                                                                 | function(node, resolve) | —      | —             |
| default-expand-all    | 是否默认展开所有节点                                                                                             | boolean                 | —      | false         |
| expand-on-click-node  | 是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。 | boolean                 | —      | true          |
| check-on-click-node   | 是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点。                                 | boolean                 | —      | false         |
| default-expanded-keys | 默认展开的节点的 key 的数组                                                                                      | array                   | —      | —             |
| show-checkbox         | 节点是否可被选择                                                                                                 | boolean                 | —      | false         |
| default-checked-keys  | 默认勾选的节点的 key 的数组                                                                                      | array                   | —      | —             |
| current-node-key      | 当前选中的节点                                                                                                   | string, number          | —      | —             |
| filter-method         | 对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏                  | Function(node,value)    | —      | —             |
| indent                | 相邻级节点间的水平缩进，单位为像素                                                                               | number                  | —      | 16            |
| icon-class            | 自定义树节点的图标                                                                                               | string                  | -      | -             |
| lazy                  | 是否懒加载子节点，需与 load 方法结合使用                                                                         | boolean                 | —      | false         |
| labelKey              | 指定节点标签为节点对象的某个属性值                                                                               | string                  | —      | label         |
| childrenKey           | 指定子树为节点对象的某个属性值                                                                                   | string                  | —      | children      |
| disabledKey           | 指定节点选择框是否禁用为节点对象的某个属性值                                                                     | string                  | —      | disabled      |
| expandKey             | 指定节点是否默认展开对象的某个属性值                                                                             | string                  | —      | expand        |
| isLeafKey             | 指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效                                                         | string                  | —      | isLeaf        |
| virtualKey            | 高级用法：是否是虚拟节点，虚拟节点不参与到整个 checkbox 的选中过程，一般在开启选中时生效。                       | string                  | —      | isVirtualNode |
| draggable             | 是否开启拖拽功能                                                                                                 | boolean                 | —      | —             |
| checkDraggabled       | 节点是否允许拖动检查方法，该返回 true/false 来决定当前节点是否可拖动                                             | function                | —      | —             |
| checkCanDropIn        | 当前节点是否允许拖入，如果允许拖入，则 drapp 事件 position 位置会返回 in 来决定是否是拖入                        | function                | —      | —             |

### Methods

`Tree` 内部使用了 Node 类型的对象来包装用户传入的数据，用来保存目前节点的状态。
`Tree` 拥有如下方法：

| 方法名          | 说明                                                                                                                          | 参数                                                                                                                                    |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| filter          | 对树节点进行筛选操作                                                                                                          |                                                                                                                                         |
| getCheckedNodes | 若节点可被选择（即 `show-checkbox` 为 `true`），则返回目前被选中的节点所组成的数组                                            | (leafOnly, includeHalfChecked) 接收两个 boolean 类型的参数，1. 是否只是叶子节点，默认值为 `false` 2. 是否包含半选节点，默认值为 `false` |
| getCheckedKeys  | 若节点可被选择（即 `show-checkbox` 为 `true`），则返回目前被选中的节点的 key 所组成的数组                                     | (leafOnly, includeHalfChecked) 接收两个 boolean 类型的参数，1. 是否只是叶子节点，默认值为 `false` 2. 是否包含半选节点，默认值为 `false` |
| setCheckedKeys  | 通过 keys 设置目前勾选的节点，使用此方法必须设置 node-key 属性                                                                | (keys, leafOnly) 接收两个参数，1. 勾选节点的 key 的数组 2. boolean 类型的参数，若为 `true` 则仅设置叶子节点的选中状态，默认值为 `false` |
| checkNode       | 设置节点选中状态｜ 两个参数，1. 勾选节点的 key 或者 TreeNode 2. boolean 类型，节点是否选中                                    |
| getCurrentNode  | 获取当前被选中节点，                                                                                                          | —                                                                                                                                       |
| setCurrentNode  | 通过 node 设置某个节点的当前选中状态                                                                                          | 可传入 TreeNode 或者节点 key , 若传入 undefined，则代表取消选中                                                                         |
| getNodeByKey    | 根据节点 key 获取节点                                                                                                         | key                                                                                                                                     |
| removeNode      | 删除 Tree 中的一个节点                                                                                                        | 可传入 TreeNode 或者节点 Key                                                                                                            |
| appendNode      | 传入节点数据，在 root 中挂载一个新的节点，如果需要在某一个节点下新增可先获取到该节点，然后调用节点的 insterChild 方法进行添加 | -                                                                                                                                       |
| checkedAll      | 勾选所有节点                                                                                                                  | -                                                                                                                                       |
| clearChecked    | 取消勾选所有节点                                                                                                              | -                                                                                                                                       |
| collapseNode    | 折叠节点                                                                                                                      | 需要传入要操作的 TreeNode                                                                                                               |
| expandNode      | 展开节点                                                                                                                      | 需要传入要操作的 TreeNode                                                                                                               |
| getAllNodeData  | 获取所有 NodeData，并以`childrens`做层级                                                                                      | -                                                                                                                                       |
| getNode         | 根据条件获取指定节点                                                                                                          | (node:TreeNode)=>boolean/void                                                                                                           |
| reload          | 重新渲染                                                                                                                      |                                                                                                                                         |

### Events

| 事件名称         | 说明                                   | 回调参数                                                                         |
| ---------------- | -------------------------------------- | -------------------------------------------------------------------------------- |
| node-contextmenu | 当某一节点被鼠标右键点击时会触发该事件 | 参数为 TreeNod                                                                   |
| check            | 当复选框被点击的时候触发               | 参数为 TreeNod，可通过获取节点的 checked 来判断选中状态                          |
| current-change   | 当前选中节点变化时触发的事件           | 参数为 TreeNod                                                                   |
| node-expand      | 节点被展开时触发的事件                 | 参数为 TreeNode                                                                  |
| node-collapse    | 节点被关闭时触发的事件                 | 参数为 TreeNod                                                                   |
| drop             | 节点拖动完成后触发                     | 参数为 {dragNode:拖动节点, dropNode: 拖入节点, position: 位置（prev、next、in）} |

### Scoped Sections

| name | 说明                                |
| ---- | ----------------------------------- |
| —    | 自定义树节点的内容，参数为 TreeNode |
