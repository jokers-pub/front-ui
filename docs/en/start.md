### Quick Start

This guide explains how to use Joker UI in your project.

You can either introduce the entire Joker UI or only import specific components as needed. First, we'll introduce how to import the complete Joker UI.

Joker UI is a PC-side UI framework developed using the [Joker Core](https://front.jokers.pub) front-end development framework. You can visit the [Joker official website](https://jokers.pub) to learn more.

### Installation and Usage

```ts
import App from "./app.joker";
import "@joker.front/ui";
import "@joker.front/ui/index.css";
```

The above code completes the import of Joker UI. Note that the style file needs to be imported separately.

### Theme Styles

Joker manages the theme of the UI library using [CSS variables](https://www.w3school.com.cn/css/css3_variables.asp). We have defined a rich set of configurations related to colors, etc. internally. We can customize the UI style by modifying these variables.

For example:

```css
:root {
    --jk-color-primary: red;
    --jk-button-font-color: red;
}
```
