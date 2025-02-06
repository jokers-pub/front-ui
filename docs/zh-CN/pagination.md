## Pagination 分页

当数据量过多时，使用分页分解数据。

### 基础用法

设置`layout`，表示需要显示的内容，用逗号分隔，布局元素会依次显示。

-   `prev`表示上一页
-   `next`为下一页
-   `pager`表示页码列表，
-   `jumper`跳转指定页码
-   `total`表示总条目数
-   `sizes`用于设置每页显示的页码数量

> 除此以外还提供了特殊的布局符号`->`，`->`后的元素会靠右显示。

!!!demo1!!!

### 设置最大页码按钮数

默认情况下，当总页数超过 7 页时，Pagination 会折叠多余的页码按钮。通过`pager-count`属性可以设置最大页码按钮数。

!!!demo2!!!

### 显示总条目数

通过配置 layout，新增`total`来展示总条目数。

!!!demo3!!!

### 设置每页条数

通过配置 layout，新增`sizes`来展示每页条数配置。

!!!demo4!!!

### 显示直接前往

通过配置 layout，新增`jumper`来展示直接前往功能。

!!!demo5!!!

### 当只有一页时隐藏分页

通过配置`hide-on-single-page`配置不足一页时是否隐藏分页

!!!demo6!!!

### 小尺寸分页

通过配置`small`来设置展示小尺寸分页

!!!demo7!!!

### 带有背景色的分页

可通过配置`backgournd`展示带有背景色的分页，背景色遵循主色规则

!!!demo8!!!

### Attributes

| 参数                | 说明                                                                                                                  | 类型     | 可选值                                                               | 默认值                                 |
| ------------------- | --------------------------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------- | -------------------------------------- |
| small               | 是否使用小型分页样式                                                                                                  | boolean  | —                                                                    | false                                  |
| class               | 自定义 class 样式                                                                                                     | string   | -                                                                    | -                                      |
| background          | 是否为分页按钮添加背景色                                                                                              | boolean  | —                                                                    | false                                  |
| page-size           | 每页显示条目个数                                                                                                      | number   | —                                                                    | 10                                     |
| total               | 总条目数                                                                                                              | number   | —                                                                    | —                                      |
| page-count          | 总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性 | Number   | —                                                                    | —                                      |
| pager-count         | 页码按钮的数量，当总页数超过该值时会折叠                                                                              | number   | 大于等于 5 且小于等于 21 的奇数                                      | 7                                      |
| current-page        | 当前页数，支持 .sync 修饰符                                                                                           | number   | —                                                                    | 1                                      |
| layout              | 组件布局，子组件名用逗号分隔                                                                                          | string[] | `sizes`, `prev`, `pager`, `next`, `jumper`, `->`, `total`, `section` | 'prev, pager, next, jumper, ->, total' |
| page-sizes          | 每页显示个数选择器的选项设置                                                                                          | number[] | —                                                                    | [10, 20, 30, 40, 50, 100]              |
| prev-text           | 替代图标显示的上一页文字                                                                                              | string   | —                                                                    | —                                      |
| next-text           | 替代图标显示的下一页文字                                                                                              | string   | —                                                                    | —                                      |
| disabled            | 是否禁用                                                                                                              | boolean  | —                                                                    | false                                  |
| hide-on-single-page | 只有一页时是否隐藏                                                                                                    | boolean  | —                                                                    | -                                      |

### Events

| 事件名称    | 说明                     | 回调参数 |
| ----------- | ------------------------ | -------- |
| size-change | pageSize 改变时会触发    | 每页条数 |
| change      | currentPage 改变时会触发 | 当前页   |
