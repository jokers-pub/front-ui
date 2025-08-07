## Button

Commonly used action buttons.

### Basic Usage

Basic button functionality.

Use the `type`, `plain`, `round`, and `circle` attributes to define the Button's style.

!!! demo1 !!!

### Disabled State

Disabled state of the button.

You can use the `disabled` attribute to define whether the button is available. It accepts a `Boolean` value.

!!! demo2 !!!

### Text Button

A button without borders and background color. Attribute: `link`

!!! demo3 !!!

### Icon Button

Buttons with icons can enhance recognition (with text) or save space (without text).

To set an icon, simply specify the `icon` attribute. For the list of available icons, refer to Joker-UI's icon component. To place the icon on the right of the text, use the `i` tag for custom icons.

!!!demo4!!!

### Button Group

Appears as a group of buttons, commonly used for multiple similar actions.

Use the `<jk-button-group>` tag to nest your buttons.

!!!demo5!!!

### Loading

Perform data loading after clicking the button and display the loading state on the button.

To set the loading state, simply set the `loading` attribute to `true`.

!!!demo6!!!

### Different Sizes

The Button component provides three sizes in addition to the default value, allowing you to choose the appropriate button size for different scenarios.

Sizes include: `medium`, `small`, and `mini`. Configure them by setting the `size` attribute.

!!!demo7!!!

### Attributes

| Attribute     | Description                     | Type      | Valid Values                          | Default |
| ------------- | ------------------------------- | --------- | ------------------------------------- | ------- |
| size          | Size                            | string    | medium / small / mini                 | —       |
| type          | Type                            | string    | primary / success / warning / danger / info | —       |
| plain         | Whether to use plain style      | boolean   | —                                     | false   |
| class         | Custom class name               | string    | -                                     | -       |
| full-width    | Whether to set width to 100%    | boolean   | -                                     | -       |
| link          | Whether to display as text      | boolean   | —                                     | false   |
| round         | Whether to use round corners    | boolean   | —                                     | false   |
| circle        | Whether to use circular shape   | boolean   | —                                     | false   |
| loading       | Whether to show loading state   | boolean   | —                                     | false   |
| disabled      | Whether to disable the button   | boolean   | —                                     | false   |
| icon          | Icon class name                 | string    | —                                     | —       |
| autofocus     | Whether to focus by default     | boolean   | —                                     | false   |
| native-type   | Native type attribute           | string    | button / submit / reset               | button  |

### Events

| Event Name | Description                   | Parameters       |
| ---------- | ----------------------------- | ---------------- |
| click      | Triggered on button click     | VNode.Event      |