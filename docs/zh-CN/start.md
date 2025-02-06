### 快速上手

本指南讲解了如何在你的项目中使用 Joker UI。

你可以引入整个 Joker UI，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 Joker UI。

Joker UI 是使用[Joker Core](https://front.jokers.pub)前端开发框架进行开发的一套 PC 端 UI 框架，可前往[Joker 官网](https://jokers.pub)进行学习了解。

### 安装及使用

```ts
import App from "./app.joker";
import "@joker.front/ui";
import "@joker.front/ui/index.css";
```

以上代码便完成了 Joker UI 的引入。需要注意的是，样式文件需要单独引入。

### 主题样式

Joker 采用[CSS variable](https://www.w3school.com.cn/css/css3_variables.asp)的方式来管理 UI 库的主题，我们内部定义了丰富的色彩等相关的配置，我们可以通过修改这些变量来实现对 UI 风格的自定义。

例如：

```css
:root {
    --jk-color-primary: red;
    --jk-button-font-color: red;
}
```

### 可视化开发工具

目前 `Joker UI` 已在 Joker 可视化开发工具中提供可视化操作组件，在可视化开发工具中使用组件会更加方面，通过灵活的拖拽以及可视化的组件参数说明，可以帮助你快速完成组件的使用。

![Joker 可视化开发工具](https://static.jokers.pub/home/component.png "可视化开发工具")

[组件库地址](https://lowcode.jokers.pub/repository/fcaf7ad3-c7d5-45fb-9ec9-7ffd29fb44f4)
