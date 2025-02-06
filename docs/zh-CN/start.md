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
