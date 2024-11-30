## Image 图片

图片容器，保留原生 img 的特性，支持懒加载，自定义占位、加载失败等

### 基础用法

!!!demo1!!!

### 占位内容

!!!demo2!!!

### 加载失败

!!!demo3!!!

### 懒加载

!!!demo4!!!

### 大图预览

!!!demo5!!!

### Attributes

| 参数             | 说明                                      | 类型                 | 可选值                                     | 默认值                                         |
| ---------------- | ----------------------------------------- | -------------------- | ------------------------------------------ | ---------------------------------------------- |
| src              | 图片源，同原生                            | string               | —                                          | —                                              |
| class            | 自定义 class 样式                         | string               | -                                          | -                                              |
| fit              | 确定图片如何适应容器框，同原生 object-fit | string               | fill / contain / cover / none / scale-down | —                                              |
| lazy             | 是否开启懒加载                            | boolean              | —                                          | false                                          |
| scroll-container | 开启懒加载后，监听 scroll 事件的容器      | string / HTMLElement | —                                          | 最近一个 overflow 值为 auto 或 scroll 的父元素 |
| preview-src-list | 开启图片预览功能                          | Array                | —                                          | —                                              |
| z-index          | 设置图片预览的 z-index                    | Number               | —                                          | 2000                                           |
| errMsg           | 加载错误时的提示                          | string               | —                                          | 加载失败                                       |

### Events

| 事件名称 | 说明             | 回调参数   |
| -------- | ---------------- | ---------- |
| load     | 图片加载成功触发 | (e: Event) |
| error    | 图片加载失败触发 | (e: Error) |

### Section

| 事件名称    | 说明                 |
| ----------- | -------------------- |
| placeholder | 图片未加载的占位内容 |
| error       | 加载失败的内容       |
