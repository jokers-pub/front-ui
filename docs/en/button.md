## Button

Commonly used operation buttons.

### Basic Usage

Basic usage of buttons.
Use the `type`, `plain`, `round`, and `circle` attributes to define the style of the Button.
!!! demo1!!!

### Disabled State

The state where the button is unavailable.
You can use the `disabled` attribute to define whether the button is available, which accepts a `Boolean` value.
!!! demo2!!!

### Text Button

A button without borders and background color. Attribute: `link`
!!! demo3!!!

### Icon Button

Buttons with icons can enhance recognition (when there is text) or save space (when there is no text).
To set an icon, simply specify the `icon` attribute. The list of available icons can be referred to in the Joker-UI icon component. If you want to set an icon on the right side of the text, you can use the `<i>` tag to use a custom icon.
!!!demo4!!!

### Button Group

Appears in the form of a button group, often used for multiple similar operations.
Use the `<jk-button-group>` tag to nest your buttons.
!!!demo5!!!

### Loading State

Performs a data loading operation after clicking the button and displays the loading state on the button.
To set it to the loading state, just set the `loading` attribute to `true`.
!!!demo6!!!

### Different Sizes

The Button component provides three sizes in addition to the default value, allowing you to choose the appropriate button size for different scenarios.
The sizes are: `medium`, `small`, `mini`, which can be configured by setting the `size` attribute.
!!!demo7!!!

### Attributes

| Parameter   | Description                           | Type    | Optional Values                             | Default Value |
| ----------- | ------------------------------------- | ------- | ------------------------------------------- | ------------- |
| size        | Size                                  | string  | medium / small / mini                       | —             |
| type        | Type                                  | string  | primary / success / warning / danger / info | —             |
| plain       | Whether it is a plain button          | boolean | —                                           | false         |
| class       | Custom class style                    | string  | -                                           | -             |
| full-width  | Whether the width is 100%             | boolean | -                                           | -             |
| link        | Whether to use text display           | boolean | —                                           | false         |
| round       | Whether it is a rounded-corner button | boolean | —                                           | false         |
| circle      | Whether it is a circular button       | boolean | —                                           | false         |
| loading     | Whether it is in the loading state    | boolean | —                                           | false         |
| disabled    | Whether it is in the disabled state   | boolean | —                                           | false         |
| icon        | Icon class name                       | string  | —                                           | —             |
| autofocus   | Whether it is focused by default      | boolean | —                                           | false         |
| native-type | Native type attribute                 | string  | button / submit / reset                     | button        |

### Events

| Event Name | Description                                  | Parameter   |
| ---------- | -------------------------------------------- | ----------- |
| click      | The response event after clicking the button | VNode.Event |
