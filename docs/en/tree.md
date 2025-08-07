## Tree Control  

Displays information in a clear hierarchical structure that can be expanded or collapsed.  

### Basic Usage  

Basic tree structure display.  

!!!demo1!!!  

### Selectable  

Suitable for scenarios requiring hierarchical selection. This demo also demonstrates dynamic loading.  

!!!demo2!!!  

### Node Disabling and Selection  

Nodes can be disabled by setting the `disabled` property, which is typically used in conjunction with `show-checkbox`.  

This example also demonstrates how to retrieve and set selected nodes. If you want to retrieve or set nodes by their **key**, it is recommended to configure the corresponding `node-key`.  

> If `node-key` is not configured or its value is `undefined`, a default internal ID will be generated as the key.  

!!!demo3!!!  

### Custom Node Template  

Custom node templates can be rendered using `section`.  

!!!demo4!!!  

### Node Filtering  

Nodes can be filtered by keywords. To filter nodes, call the `filter` method of the Tree instance with the keyword as the parameter. Note that `filter-method` must be set, with its value being the filtering function. By default, this method filters nodes based on their `label` property.  

!!!demo5!!!  

### Drag and Drop  

Enable dragging of tree nodes by setting the `draggable` property. You can also configure which nodes are draggable and which nodes can receive dragged nodes.  

!!!demo6!!!  

### Non-Relational Mode  

Enable non-relational mode by setting `check-strictly`. In this mode, when checkboxes are displayed, the parent-child relationship is strictly non-associative.  

!!!demo7!!!  

### Attributes  

| Attribute             | Description                                                                                                                                                     | Type                      | Options | Default        |  
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ------- | -------------- |  
| data                  | Display data                                                                                                                                                    | array                     | —       | —              |  
| class                 | Custom class style                                                                                                                                              | string                    | —       | —              |  
| empty-text            | Text displayed when content is empty                                                                                                                            | string                    | —       | —              |  
| empty-size            | Size for empty panel                                                                                                                                            | string                    | —       | —              |  
| node-key              | Unique identifier for each tree node, must be unique across the entire tree                                                                                     | string                    | —       | —              |  
| load                  | Method for loading subtree data, only takes effect when `lazy` is set to `true`                                                                                 | function(node, resolve)   | —       | —              |  
| default-expand-all    | Whether to expand all nodes by default                                                                                                                          | boolean                   | —       | false          |  
| expand-on-click-node  | Whether to expand or collapse nodes when clicking on a node. Default is `true`. If set to `false`, nodes will only expand or collapse when clicking the arrow icon. | boolean                   | —       | true           |  
| check-on-click-node   | Whether to select a node when clicking on it. Default is `false`, meaning nodes are only selected when clicking the checkbox.                                   | boolean                   | —       | false          |  
| default-expanded-keys | Array of keys for nodes expanded by default                                                                                                                     | array                     | —       | —              |  
| show-checkbox         | Whether nodes are selectable                                                                                                                                    | boolean                   | —       | false          |  
| default-checked-keys  | Array of keys for nodes checked by default                                                                                                                      | array                     | —       | —              |  
| current-node-key      | Currently selected node                                                                                                                                         | string, number            | —       | —              |  
| filter-method         | Function executed when filtering tree nodes. Returns `true` if the node should be displayed, `false` if it should be hidden.                                    | Function(node, value)     | —       | —              |  
| indent                | Horizontal indentation between adjacent nodes in pixels                                                                                                         | number                    | —       | 16             |  
| icon-class            | Custom icon for tree nodes                                                                                                                                      | string                    | —       | —              |  
| lazy                  | Whether to lazily load child nodes. Must be used with the `load` method.                                                                                        | boolean                   | —       | false          |  
| labelKey              | Specifies which property of the node object serves as the node label                                                                                            | string                    | —       | label          |  
| childrenKey           | Specifies which property of the node object contains the subtree                                                                                                | string                    | —       | children       |  
| disabledKey           | Specifies which property of the node object determines if the checkbox is disabled                                                                              | string                    | —       | disabled       |  
| expandKey             | Specifies which property of the node object determines if the node is expanded by default                                                                       | string                    | —       | expand         |  
| isLeafKey             | Specifies which property of the node object determines if it is a leaf node. Only takes effect when `lazy` is specified.                                        | string                    | —       | isLeaf         |  
| virtualKey            | Advanced usage: Whether the node is virtual. Virtual nodes do not participate in the checkbox selection process. Typically used when selection is enabled.       | string                    | —       | isVirtualNode  |  
| draggable             | Whether to enable drag-and-drop functionality                                                                                                                   | boolean                   | —       | —              |  
| checkDraggabled       | Method to check if a node can be dragged. Returns `true`/`false` to determine whether the current node is draggable.                                            | function                  | —       | —              |  
| checkCanDropIn        | Method to check if a node can receive a dragged node. If allowed, the `drop` event's `position` will return `in` to indicate an inner drop.                     | function                  | —       | —              |  
| check-strictly        | Whether to strictly enforce non-associative parent-child relationships when checkboxes are displayed.                                                           | boolean                   | —       | false          |  

### Methods  

The `Tree` internally uses `Node`-type objects to wrap user-provided data, maintaining the state of each node.  
The `Tree` has the following methods:  

| Method Name         | Description                                                                                                                                                                                                                  | Parameters                                                                                                                                                                |  
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| filter              | Filters tree nodes                                                                                                                                                                                                           | —                                                                                                                                                                         |  
| getCheckedNodes     | If nodes are selectable (i.e., `show-checkbox` is `true`), returns an array of currently selected nodes.                                                                                                                      | (leafOnly, includeHalfChecked) Accepts two `boolean` parameters: 1. Whether to include only leaf nodes (default: `false`). 2. Whether to include half-checked nodes (default: `false`). |  
| getCheckedKeys      | If nodes are selectable (i.e., `show-checkbox` is `true`), returns an array of keys of currently selected nodes.                                                                                                              | (leafOnly, includeHalfChecked) Accepts two `boolean` parameters: 1. Whether to include only leaf nodes (default: `false`). 2. Whether to include half-checked nodes (default: `false`). |  
| setCheckedKeys      | Sets the currently checked nodes by their keys. Requires `node-key` to be configured.                                                                                                                                        | (keys, leafOnly) Accepts two parameters: 1. Array of keys for checked nodes. 2. `boolean` parameter (`true` to check only leaf nodes, default: `false`).                  |  
| checkNode           | Sets the checked state of a node. Accepts two parameters: 1. The node key or `TreeNode`. 2. `boolean` indicating whether the node is checked.                                                                                  | —                                                                                                                                                                         |  
| getCurrentNode      | Gets the currently selected node.                                                                                                                                                                                            | —                                                                                                                                                                         |  
| setCurrentNode      | Sets the current selected state of a node by its `TreeNode` or key. Pass `undefined` to cancel selection.                                                                                                                    | Accepts either a `TreeNode` or node key. Pass `undefined` to deselect.                                                                                                    |  
| getNodeByKey        | Retrieves a node by its key.                                                                                                                                                                                                 | key                                                                                                                                                                       |  
| removeNode          | Removes a node from the tree.                                                                                                                                                                                                | Accepts either a `TreeNode` or node key.                                                                                                                                  |  
| appendNode          | Appends a new node to the root by providing node data. To add under a specific node, first retrieve that node, then call its `insertChild` method.                                                                           | —                                                                                                                                                                         |  
| checkedAll          | Checks all nodes.                                                                                                                                                                                                            | —                                                                                                                                                                         |  
| clearChecked        | Unchecks all nodes.                                                                                                                                                                                                          | —                                                                                                                                                                         |  
| collapseNode        | Collapses a node.                                                                                                                                                                                                            | Requires the target `TreeNode` as input.                                                                                                                                  |  
| expandNode          | Expands a node.                                                                                                                                                                                                              | Requires the target `TreeNode` as input.                                                                                                                                  |  
| getAllNodeData      | Retrieves all node data, organized hierarchically with `children`.                                                                                                                                                           | —                                                                                                                                                                         |  
| getNode             | Retrieves a specific node based on conditions.                                                                                                                                                                               | (node: TreeNode) => boolean/void                                                                                                                                          |  
| reload              | Re-renders the tree.                                                                                                                                                                                                         | —                                                                                                                                                                         |  

### Events  

| Event Name         | Description                                                                                           | Callback Parameters                                                                                              |  
| ------------------ | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |  
| node-contextmenu   | Triggered when a node is right-clicked.                                                              | Parameter is `TreeNode`.                                                                                       |  
| check              | Triggered when a checkbox is clicked.                                                                | Parameter is `TreeNode`. The node's `checked` property indicates its selection state.                           |  
| current-change     | Triggered when the current selected node changes.                                                    | Parameter is `TreeNode`.                                                                                       |  
| node-expand        | Triggered when a node is expanded.                                                                   | Parameter is `TreeNode`.                                                                                       |  
| node-collapse      | Triggered when a node is collapsed.                                                                  | Parameter is `TreeNode`.                                                                                       |  
| drop               | Triggered after a node is dragged and dropped.                                                       | Parameter is `{dragNode: dragged node, dropNode: target node, position: position (prev, next, in)}`.           |  

### Scoped Sections  

| Name  | Description                                   |  
| ----- | -------------------------------------------- |  
| —     | Custom content for tree nodes. Parameter is `TreeNode`. |