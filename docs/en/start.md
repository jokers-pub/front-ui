### Quick Start  

This guide explains how to use Joker UI in your project.  

You can import the entire Joker UI or selectively import specific components based on your needs. First, we’ll cover how to import the complete Joker UI.  

Joker UI is a PC-side UI framework developed using the [Joker Core](https://front.jokers.pub) frontend development framework. For more details, visit the [Joker Official Website](https://jokers.pub).  

### Installation and Usage  

```ts
import App from "./app.joker";  
import "@joker.front/ui";  
import "@joker.front/ui/index.css";  
```  

The above code completes the import of Joker UI. Note that the style file needs to be imported separately.  

### Theme Styling  

Joker employs [CSS variables](https://www.w3school.com.cn/css/css3_variables.asp) to manage the UI library’s theme. Internally, we define a rich set of configurations related to colors and more. You can customize the UI style by modifying these CSS variables.  

For example:  

```css
:root {  
    --jk-color-primary: red;  
    --jk-button-font-color: red;  
}  
```  

### Visual Development Tools  

Currently, `Joker UI` is available in the Joker visual development tool, which provides an intuitive way to operate components. Using components in the visual development tool is more convenient—flexible drag-and-drop functionality and visual parameter descriptions help you quickly master component usage.  

![Joker Visual Development Tool](https://static.jokers.pub/home/component.png "Visual Development Tool")  

[Component Library Link](https://viscode.jokers.pub/repository/fcaf7ad3-c7d5-45fb-9ec9-7ffd29fb44f4)