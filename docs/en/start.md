### Quick Start

This guide explains how to use Joker UI in your project.

You can either import the entire Joker UI or only import specific components as needed. First, we'll introduce how to import the complete Joker UI.

Joker UI is a PC-side UI framework developed using the [Joker Core](https://front.jokers.pub) front-end development framework. You can visit the [Joker official website](https://jokers.pub) to learn more.

### Installation and Usage

```ts
import App from "./app.joker";
import "@joker.front/ui";
import "@joker.front/ui/index.css";
```

The above code completes the import of Joker UI. Note that the style file needs to be imported separately.

### Theme Styles

Joker manages the theme of the UI library by using [CSS variables](https://www.w3school.com.cn/css/css3_variables.asp). We have defined a rich set of configurations related to colors, etc. internally. We can customize the UI style by modifying these variables.

For example:

```css
:root {
    --jk-color-primary: red;
    --jk-button-font-color: red;
}
```

### Visual Development Tools

Currently, `Joker UI` provides visual operation components in the Joker visual development tool. Using components in the visual development tool is more convenient. Through flexible dragging and visual component parameter descriptions, it can help you quickly complete the use of components.

![Joker Visual Development Tool](https://static.jokers.pub/home/component.png "Visual Development Tool")

[Component Library Address](https://viscode.jokers.pub/repository/fcaf7ad3-c7d5-45fb-9ec9-7ffd29fb44f4)
