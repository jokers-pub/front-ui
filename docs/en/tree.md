## Tree

Displays information in a clear hierarchical structure, which can be expanded or collapsed.

### Basic Usage

Displays a basic tree-shaped structure.

!!!demo1!!!

### Selectable

Suitable for scenarios where hierarchical selection is required. This demo also shows dynamic loading.

!!!demo2!!!

### Node Disabling and Selection

Setting `disabled` can disable nodes. This property is generally used in combination with `show-checkbox`.

This example also shows how to get and set selected nodes. If you want to get and set nodes by **key**, it is recommended to configure the corresponding `node-key`.

> If `node-key` is not configured or its value is `undefined`, an internal ID will be generated as the key by default.

!!!demo3!!!

### Custom Node Template

By using `section`, you can display a custom node template.

!!!demo4!!!

### Node Filtering

Filter nodes by keywords. When nodes need to be filtered, call the `filter` method of the Tree instance, with the keyword as the parameter. Note that at this time, `filter-method` needs to be set, with the value being the filtering function. By default, this method will perform character-based filtering queries according to the node's label.

!!!demo5!!!

### Draggable

Enable the drag-and-drop function of tree nodes by enabling the `draggable` field, and configure which nodes can be dragged and which nodes can accept dropped nodes.

!!!demo6!!!

### Attributes

| Parameter             | Description                                                                                                                                                                          | Type                    | Optional Values | Default Value |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- | --------------- | ------------- |
| data                  | Data to be displayed                                                                                                                                                                 | array                   | —               | —             |
| class                 | Custom class style                                                                                                                                                                   | string                  | -               | -             |
| empty-text            | Text to be displayed when the content is empty                                                                                                                                       | String                  | —               | —             |
| empty-size            | Size of the empty panel                                                                                                                                                              | String                  | —               | —             |
| node-key              | The property used as a unique identifier for each tree node, which should be unique throughout the tree                                                                              | String                  | —               | —             |
| load                  | Method for loading subtree data, only takes effect when the `lazy` property is `true`                                                                                                | function(node, resolve) | —               | —             |
| default-expand-all    | Whether to expand all nodes by default                                                                                                                                               | boolean                 | —               | false         |
| expand-on-click-node  | Whether to expand or collapse the node when clicking on the node. The default value is `true`. If it is `false`, the node will only expand or collapse when clicking the arrow icon. | boolean                 | —               | true          |
| check-on-click-node   | Whether to select the node when clicking on the node. The default value is `false`, meaning the node is only selected when clicking the checkbox.                                    | boolean                 | —               | false         |
| default-expanded-keys | Array of keys of nodes to be expanded by default                                                                                                                                     | array                   | —               | —             |
| show-checkbox         | Whether the node can be selected                                                                                                                                                     | boolean                 | —               | false         |
| default-checked-keys  | Array of keys of nodes to be checked by default                                                                                                                                      | array                   | —               | —             |
| current-node-key      | The currently selected node                                                                                                                                                          | string, number          | —               | —             |
| filter-method         | The method executed when filtering tree nodes. Return `true` to indicate that the node can be displayed, and `false` to indicate that the node will be hidden                        | Function(node,value)    | —               | —             |
| indent                | Horizontal indent between adjacent levels of nodes, in pixels                                                                                                                        | number                  | —               | 16            |
| icon-class            | Custom icon for tree nodes                                                                                                                                                           | string                  | -               | -             |
| lazy                  | Whether to lazy-load child nodes, needs to be used in combination with the `load` method                                                                                             | boolean                 | —               | false         |
| labelKey              | Specify the node label as a certain property value of the node object                                                                                                                | string                  | —               | label         |
| childrenKey           | Specify the subtree as a certain property value of the node object                                                                                                                   | string                  | —               | children      |
| disabledKey           | Specify whether the node checkbox is disabled as a certain property value of the node object                                                                                         | string                  | —               | disabled      |
| expandKey             | Specify whether the node is expanded by default as a certain property value of the object                                                                                            | string                  | —               | expand        |
| isLeafKey             | Specify whether the node is a leaf node, only takes effect when the `lazy` property is specified                                                                                     | string                  | —               | isLeaf        |
| virtualKey            | Advanced usage: Whether it is a virtual node. Virtual nodes do not participate in the entire checkbox selection process, generally takes effect when selection is enabled.           | string                  | —               | isVirtualNode |
| draggable             | Whether to enable the drag-and-drop function                                                                                                                                         | boolean                 | —               | —             |
| checkDraggabled       | Method to check whether a node is allowed to be dragged. It returns `true`/`false` to determine whether the current node can be dragged                                              | function                | —               | —             |
| checkCanDropIn        | Whether the current node allows dropping in. If dropping in is allowed, the `drapp` event `position` will return `in` to indicate dropping in                                        | function                | —               | —             |

### Methods

The `Tree` internally uses the `Node`-type object to wrap the data passed in by the user to save the current state of the node.
The `Tree` has the following methods:

| Method Name     | Description                                                                                                                                                                                      | Parameters                                                                                                                                                                                                           |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter          | Perform filtering operations on tree nodes                                                                                                                                                       |                                                                                                                                                                                                                      |
| getCheckedNodes | If the node can be selected (i.e., `show-checkbox` is `true`), return an array of currently selected nodes                                                                                       | (leafOnly, includeHalfChecked) Accepts two boolean-type parameters: 1. Whether it is only leaf nodes, with the default value of `false`; 2. Whether to include half-checked nodes, with the default value of `false` |
| getCheckedKeys  | If the node can be selected (i.e., `show-checkbox` is `true`), return an array of keys of currently selected nodes                                                                               | (leafOnly, includeHalfChecked) Accepts two boolean-type parameters: 1. Whether it is only leaf nodes, with the default value of `false`; 2. Whether to include half-checked nodes, with the default value of `false` |
| setCheckedKeys  | Set the currently checked nodes through keys. Using this method requires setting the `node-key` property                                                                                         | (keys, leafOnly) Accepts two parameters: 1. An array of keys of checked nodes; 2. A boolean-type parameter. If it is `true`, only the selection state of leaf nodes will be set, with the default value of `false`   |
| checkNode       | Set the selection state of a node. Two parameters: 1. The key or `TreeNode` of the checked node; 2. A boolean-type parameter indicating whether the node is selected                             |
| getCurrentNode  | Get the currently selected node                                                                                                                                                                  | —                                                                                                                                                                                                                    |
| setCurrentNode  | Set the current selection state of a certain node through `node`                                                                                                                                 | Can pass in `TreeNode` or the node key. If `undefined` is passed in, it means canceling the selection                                                                                                                |
| getNodeByKey    | Get a node according to the node key                                                                                                                                                             | key                                                                                                                                                                                                                  |
| removeNode      | Delete a node in the `Tree`                                                                                                                                                                      | Can pass in `TreeNode` or the node key                                                                                                                                                                               |
| appendNode      | Pass in node data to mount a new node in the `root`. If you need to add a node under a certain node, you can first get that node and then call the `insterChild` method of the node for addition | -                                                                                                                                                                                                                    |
| checkedAll      | Check all nodes                                                                                                                                                                                  | -                                                                                                                                                                                                                    |
| clearChecked    | Uncheck all nodes                                                                                                                                                                                | -                                                                                                                                                                                                                    |
| collapseNode    | Collapse a node                                                                                                                                                                                  | Needs to pass in the `TreeNode` to be operated on                                                                                                                                                                    |
| expandNode      | Expand a node                                                                                                                                                                                    | Needs to pass in the `TreeNode` to be operated on                                                                                                                                                                    |
| getAllNodeData  | Get all `NodeData` and organize them by `childrens` hierarchy                                                                                                                                    | -                                                                                                                                                                                                                    |
| getNode         | Get specified nodes according to conditions                                                                                                                                                      | (node:TreeNode)=>boolean/void                                                                                                                                                                                        |
| reload          | Re-render                                                                                                                                                                                        |                                                                                                                                                                                                                      |

### Events

| Event Name       | Description                                              | Callback Parameters                                                                                          |
| ---------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| node-contextmenu | Triggered when a node is right-clicked with the mouse    | Parameter is `TreeNode`                                                                                      |
| check            | Triggered when the checkbox is clicked                   | Parameter is `TreeNode`. You can determine the selection state by getting the `checked` property of the node |
| current-change   | Event triggered when the currently selected node changes | Parameter is `TreeNode`                                                                                      |
| node-expand      | Event triggered when a node is expanded                  | Parameter is `TreeNode`                                                                                      |
| node-collapse    | Event triggered when a node is closed                    | Parameter is `TreeNode`                                                                                      |
| drop             | Triggered after the node dragging is completed           | Parameter is {dragNode: dragged node, dropNode: dropped-into node, position: position (prev, next, in)}      |

### Scoped Sections

| Name | Description                                                          |
| ---- | -------------------------------------------------------------------- |
| —    | Custom content of the tree node, with the parameter being `TreeNode` |
