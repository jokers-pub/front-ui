## Dropdown

A dropdown menu that appears upon clicking or hovering.

### Basic Usage  

Use the `Section` component to define the trigger element for showing the dropdown menu. By default, it is activated via a `click` event.  

!!!demo1!!!  

### Split Button Style  

Configure the `split-button` property to display the trigger element as a button group.  

!!!demo2!!!  

### Menu Styling  

Enhance the dropdown menu by configuring properties such as icons and dividers for menu items.  

!!!demo3!!!  

You may also choose not to use the `jk-dropdown-item` component to populate the dropdown menu and instead customize the content.  

!!!demo4!!!  

### Disabled State  

Set the `disabled` property to disable the dropdown. This property will automatically update the button state in `split-button` mode. For non-split-button configurations, manage the disabled styling manually.  

!!!demo5!!!  

### Sizing  

Adjust the button size in `split-button` mode using the `size` property.  

Available size options: `medium`, `small`, or `mini`.  

!!!demo6!!!  

The `dropdown-menu` can also be configured with the `size` property to control the dropdown menu dimensions.  

!!!demo7!!!  

### Dropdown Attributes  

| Parameter       | Description                                                                 | Type     | Accepted Values          | Default  |
| --------------- | --------------------------------------------------------------------------- | -------- | ------------------------ | -------- |
| type            | Button type, same as the Button component (effective only when `split-button` is true) | string   | —                        | primary |
| size            | Menu size, also affects the trigger button when `split-button` is true      | string   | medium / small / mini    | —        |
| split-button    | Displays the trigger element as a button group                              | boolean  | —                        | false   |
| trigger         | Trigger method for showing the dropdown                                     | string   | hover, click             | click    |
| disabled        | Whether to disable the dropdown                                             | boolean  | —                        | false   |

### Dropdown Events  

| Event Name   | Description                                                                                       | Callback Parameters |
| ------------ | ------------------------------------------------------------------------------------------------- | -------------------- |
| click        | Callback when clicking the left button in `split-button` mode (if not in `split-button` mode, it represents bubble event handling for internal element clicks) | — |

### Dropdown Menu Attributes  

| Parameter   | Description           | Type   | Accepted Values                                                                                                           | Default        |
| ----------- | --------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------ | -------------- |
| size        | Menu size            | string | medium / small / mini                                                                                                    | -              |
| placement   | Menu position        | string | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom-start |
| maxHeight   | Maximum height       | string | -                                                                                                                       | -              |

### Dropdown Menu Item Attributes  

| Parameter   | Description            | Type     | Accepted Values | Default |
| ----------- | ----------------------- | -------- | --------------- | ------- |
| disabled    | Disabled state          | boolean  | —               | false   |
| divided     | Displays a divider      | boolean  | —               | false   |
| icon        | Icon class name        | string   | —               | —       |

### Dropdown Menu Events  

| Event Name   | Description       | Callback Parameters |
| ------------ | ----------------- | -------------------- |
| open         | Fires when menu opens | —                   |
| close        | Fires when menu closes | —                   |