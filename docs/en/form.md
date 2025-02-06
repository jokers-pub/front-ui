## Form 表单

用于提供表单数据收集、校验、提交等交互功能的组件。

### 典型表单

包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。

!!!demo1!!!

### 行内表单

设置为`inline`属性可以让表单变成行内表单，当垂直空间受限且表单较简单时，可以使用行内表单。

!!!demo2!!!

### 文本对齐方式

可以通过`label-position`属性来设置标题对齐方式，目前支持：`top`、`left`，当设置为`top`时标题会置于表单项顶部。

!!!demo3!!!

### 表单验证

Form 组件提供了表单验证的功能，内部提供了基础的验证方法，可通过添加`validate`来配置验证规则。

!!!demo4!!!

> 在`form-item`中配置`required`只作为是否添加**星号**展示用途，本身不做任何验证操作。

### 内置规则

内部提供了常用的校验规则，使用`validate`来进行配置。

| 规则                                  | 说明           | 值说明                                                                                |
| ------------------------------------- | -------------- | ------------------------------------------------------------------------------------- |
| `Global.isRequired(msg)`              | 非空校验       | 可通过该属性配置错误信息，若未设置则按照`placeholder`进行错误提示                     |
| `Global.isInt(msg)`                   | 正整数校验     | 错误提示                                                                              |
| `Global.isNumber(msg)`                | 数值校验       | 错误提示                                                                              |
| `Global.isPhone(msg)`                 | 手机号格式校验 | 错误提示                                                                              |
| `Global.isEmail(msg)`                 | 邮箱格式校验   | 错误提示                                                                              |
| `Global.isMatched(regex,msg)`         | 自定义正则校验 | {pattern:string,msg:string}，其中`pattern`为必填项，用于配置正则规则，`msg`为错误提示 |
| `Global.isLengthInRange(min,max,msg)` | 长度校验       | `（最小值,最大值,错误信息）`：可通过数组的方式来设置最大值和最小值                    |

!!!demo5!!!

可通过通过`全局方法注册`来自定义校验规则。下面是一个内置的检查方法代码，可以参考

```ts
registerGlobalFunction({
    isPhone: (message?: string) => {
        return (value: any) => {
            if (!value) return;
            if (value.length !== 11) {
                return message || "请输入11位手机号";
            }

            if (/^1[3456789]\d{9}$/.test(value) === false) {
                return message || "手机号码格式错误，请重新输入";
            }
        };
    }
});
```

```html
<input validate="@Global.isPhone()" />
```

校验的规则是有顺序的：

1. `控件.beforeValidate()`
2. `控件.ctrlValidate`
3. `控件.props.validate(自定义校验)` 支持数组 多项组合校验

### 自定义验证

可通过配置组件的`validate`参数来自定义验证规则，若验证失败返回提示信息即可，若返回值为空则代表验证成功。该方法支持异步校验。

!!!demo6!!!

> 可通过`status-icon`属性在`input`组件中展示检验过程状态。

### 尺寸

可通过在`form`中配置`size`属性来对整体表单控件做尺寸设置，若组件已经配置了私有`size`，则无法进行覆盖。

!!!demo7!!!

### 提交

可以通过调用 form 中的`submit`事件实现表单的提交，值得注意的是，提交过程只包括表单的验证和表单的值获取，若校验成功后，则会通过`submit`事件来通知到调用者，并把表单数据一同返回。

!!!demo8!!!

> 在 submit 事件内部处理时，表单会在异步校验过程中，将发起按钮（需是 jk-button）设置为 loading，异步验证成功后解除 loading，转交到 submit 事件自行处理，所以需要调用者自行控制`提交`过程中的 loading，验证中 loading 则无需关心。

### 表单控件的扩展

若想添加可被`Form`表单识别的表单控件，需满足以下几个条件：

1. 在 create 时，需要调用`registerFormCtrl(this)`方法注册表单控件。
2. 需要在 model 中配置 value 属性
3. 需要传入 props.name （根据使用场景区分）
4. 当前控件渲染在 jk-form 组件中（根据使用场景区分）

以下是功能性扩展（非强制约束）

1. 在合适的时机触发`this.$trigger("validate")`表单校验事件，一般在内容值变更时触发（不强制）。
2. `ctrlValidate`若组件内存在此方法， 则在表单执行该项校验时，执行自身内置校验。
3. `beforeValidate`若组件内存在此方法，则在表单执行该项校验前执行一些前置的数据准备工作。

### Form Attributes

| 参数              | 说明                                                                       | 类型     | 可选值                | 默认值 |
| ----------------- | -------------------------------------------------------------------------- | -------- | --------------------- | ------ |
| class             | 自定义 class 样式                                                          | string   | -                     | -      |
| inline            | 行内表单模式                                                               | boolean  | —                     | false  |
| label-position    | 表单标签的位置，如果值为 left 或者 right 时，则需要设置 `label-width`      | string   | right/left/top        | right  |
| label-width       | 表单标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。 | string   | —                     | 80px   |
| size              | 用于控制该表单内组件的尺寸                                                 | string   | medium / small / mini | —      |
| showErrorMessage  | 自定义错误提示展示                                                         | Function | -                     | -      |
| clearErrorMessage | 自定义清空错误提示                                                         | Function | -                     | -      |

### Form Methods

| 方法名   | 说明                                                                                           | 参数                                                                                                                  |
| -------- | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| validate | 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，返回一个 promise | Function(string /string[]) 若不传递参数则执行整个表单控件校验，可以传入 name（string / string[]）实现校验指定控件的值 |
| reset    | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果                                     | —                                                                                                                     |
| getData  | 获取当前表单数据，注意**获取数据未经过表单校验**                                               | Function(string / string[])若不传递参数则获取整个表单控件值，可以传入 name（string / string[]）实现获取指定控件的值   |
| submit   | 触发表单提交操作                                                                               | -                                                                                                                     |

### Form Event

| 事件名        | 说明             | 参数     |
| ------------- | ---------------- | -------- |
| before-submit | 触发表单提交前   | -        |
| submit        | 触发表单提交操作 | 表单数据 |

### Form-Item Attributes

| 参数        | 说明                                                         | 类型    | 可选值 | 默认值 |
| ----------- | ------------------------------------------------------------ | ------- | ------ | ------ |
| class       | 自定义 class 样式                                            | string  | -      | -      |
| label       | 标签文本                                                     | string  | —      | —      |
| label-width | 表单域标签的的宽度，例如 '50px'。                            | string  | —      | 80px   |
| required    | 是否必填（用于控制是否显示**星号**，不会参与校验规则的制定） | boolean | —      | false  |
| inline      | 是否采用 inline 布局                                         | boolean | —      | false  |

### Form-Item Section

| name  | 说明             |
| ----- | ---------------- |
| —     | Form Item 的内容 |
| label | 标签文本的内容   |
| error | 校验失败内容     |
