## Collapse

Opens or collapses to display content.

### Basic Usage

Basic usage of the collapse panel.
!!!demo1!!!

### Accordion Mode

!!!demo2!!!

### Custom Title

!!!demo3!!!

### Attributes

| Parameter | Description                                                            | Type           | Optional Values | Default Value |
| --------- | ---------------------------------------------------------------------- | -------------- | --------------- | ------------- |
| value     | The currently active panel (string in accordion mode, otherwise Array) | string / Array | -               | -             |
| accordion | Whether to enable accordion mode                                       | boolean        | -               | false         |

### Events

| Event Name | Description                                                                                                                              | Callback Parameter                           |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| change     | Triggered when the currently active panel changes (if in accordion mode, the parameter `activeNames` is of type string, otherwise Array) | Returns the `name` value of the active panel |

### Item Attributes

| Parameter | Description            | Type    | Optional Values | Default Value |
| --------- | ---------------------- | ------- | --------------- | ------------- |
| name      | Unique identifier      | string  | -               | -             |
| title     | Title                  | string  | -               | -             |
| disabled  | Whether it is disabled | boolean | -               | false         |
