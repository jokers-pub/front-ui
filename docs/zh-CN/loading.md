## Loading 加载

加载数据时显示动效。

### 区域展示

可通过配置`target`属性来指定 loading 的展示宿主

!!!demo1!!!

### 全屏展示

通过设置`fullscreen`或者指定`target`为**body**，实现全屏 Loading

!!!demo2!!!

> 请注意，全屏 Loading，只会存在一个，如果重复触发，则返回上一个未完成的 Loading 操作组件

需要注意的是，以服务的方式调用的全屏 Loading 是单例的：若在前一个全屏 Loading 关闭前再次调用全屏 Loading，并不会创建一个新的 Loading 实例，而是返回现有全屏 Loading 的实例：

```js
let loading1 = Loading({ fullscreen: true });
let loading2 = Loading({ fullscreen: true });
console.log(loading1 === loading2); // true
```

此时调用它们中任意一个的 close 方法都能关闭这个全屏 Loading。

### 自定义

可自定义加载文案、图标和背景色。

!!!demo3!!!

### Options

| 参数        | 说明                                                                                                                                       | 类型                                               | 可选值 | 默认值        |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------- | ------ | ------------- |
| target      | Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入 `document.querySelector`以获取到对应 DOM 节点 | Element / string / VNode.Node；支持传入 VNode 节点 | —      | document.body |
| fullscreen  | 是否全屏                                                                                                                                   | boolean                                            | —      | true          |
| text        | 显示在加载图标下方的加载文案                                                                                                               | string                                             | —      | —             |
| spinner     | 自定义加载图标类名                                                                                                                         | string                                             | —      | —             |
| customClass | Loading 的自定义类名                                                                                                                       | string                                             | —      | —             |

### Methods

调用 `Loading` 会返回当前 Loading 的实例。如果需要手动关闭实例，可以调用它的 `close` 方法。
| 方法名 | 说明 |
| ---- | ---- |
| close | 关闭当前的 Loading |
