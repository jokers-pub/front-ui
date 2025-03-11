## Dropdown

Displays a dropdown menu through clicking or hovering.

### Basic Usage

Use `Section` to set the element that triggers the display of the dropdown menu. By default, it is activated for display through `click`.
!!!demo1!!!

### Split-form

Configure the `split-button` attribute to make the element triggering the dropdown appear as a button group.
!!!demo2!!!

### Menu Style

You can configure attributes such as the menu item's icon and division to display a more diverse menu.
!!!demo3!!!
Of course, you can also fill the dropdown menu in a custom way instead of using the `jk-dropdown-item` component.
!!!demo4!!!

### Disabled

Achieve disabling by setting the `disabled` attribute. This attribute will automatically change the button state in the `split-button` type. If it is not in the split-button mode, please manage and set the disabled style of the content yourself.
!!!demo5!!!

### Size

By setting the `size` dimension, you can change the size of the button in the `split-button` mode.
The available size types include: `medium`, `small`, `mini`.
!!!demo6!!!
The `dropdown-menu` can also be configured with the `size` attribute to control the size of the dropdown menu.
!!!demo7!!!

### Dropdown Attributes

| Parameter    | Description                                                                             | Type    | Optional Values       | Default Value |
| ------------ | --------------------------------------------------------------------------------------- | ------- | --------------------- | ------------- |
| type         | Menu button type, same as the Button component (only valid when `split-button` is true) | string  | —                     | primary       |
| size         | Menu size, also takes effect on the trigger button when `split-button` is true          | string  | medium / small / mini | —             |
| split-button | The dropdown-triggering element appears as a button group                               | boolean | —                     | false         |
| trigger      | The behavior that triggers the dropdown                                                 | string  | hover, click          | click         |
| disabled     | Whether it is disabled                                                                  | boolean | —                     | false         |

### Dropdown Events

| Event Name | Description                                                                                                                                                                           | Callback Parameter |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| click      | Callback when clicking the left-hand button when `split-button` is true. If it is not `split-button`, it represents the click bubbling handling event of the current internal element | —                  |

### Dropdown Menu Attributes

| Parameter | Description   | Type   | Optional Values                                                                                           | Default Value |
| --------- | ------------- | ------ | --------------------------------------------------------------------------------------------------------- | ------------- |
| size      | Menu size     | string | medium / small / mini                                                                                     | -             |
| placement | Menu position | string | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom-start  |
| maxHeight | max height    | string | -                                                                                                         | -             |

### Dropdown Menu Item Attributes

| Parameter | Description             | Type    | Optional Values | Default Value |
| --------- | ----------------------- | ------- | --------------- | ------------- |
| disabled  | Disabled                | boolean | —               | false         |
| divided   | Display a dividing line | boolean | —               | false         |
| icon      | Icon class name         | string  | —               | —             |

### Dropdown Menu Events

| Event Name | Description | Callback Parameter |
| ---------- | ----------- | ------------------ |
| open       | Menu opened | —                  |
| close      | Menu closed | —                  |
