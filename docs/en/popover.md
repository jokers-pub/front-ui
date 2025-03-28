## Popover

### Basic Usage

The attributes of Popover are quite similar to those of Tooltip. Therefore, for the repeated attributes, please refer to the Tooltip documentation and they will not be elaborated in this document.

The `trigger` attribute is used to set when to trigger the Popover. It supports three triggering methods: `hover`, `click`, and `manual`.

!!!demo1!!!

### Nested Information

You can nest various types of information in the Popover. The following is an example of nesting a table. Use `section` instead of the `content` attribute.

!!!demo2!!!

### Attributes

| Parameter   | Description                                                              | Type           | Optional Values                                                                                           | Default Value       |
| ----------- | ------------------------------------------------------------------------ | -------------- | --------------------------------------------------------------------------------------------------------- | ------------------- |
| trigger     | Trigger method                                                           | String         | click/hover/manual                                                                                        | click               |
| title       | Title                                                                    | String         | —                                                                                                         | —                   |
| content     | The content to be displayed. DOM can also be passed in through `section` | String         | —                                                                                                         | —                   |
| width       | Width                                                                    | String, Number | —                                                                                                         | Minimum width 150px |
| placement   | Appearance position                                                      | String         | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom              |
| disabled    | Whether the Popover is available                                         | Boolean        | —                                                                                                         | false               |
| offset      | Offset of the appearance position                                        | Number         | —                                                                                                         | 0                   |
| open-delay  | Display delay in milliseconds when the trigger method is hover           | Number         | —                                                                                                         | —                   |
| close-delay | Hidden delay in milliseconds when the trigger method is hover            | number         | —                                                                                                         | 200                 |

### Sections

| Parameter | Description                                               |
| --------- | --------------------------------------------------------- |
| default   | The embedded HTML text of the Popover                     |
| reference | The HTML element that triggers the display of the Popover |

### Events

| Event Name | Description            | Callback Parameters |
| ---------- | ---------------------- | ------------------- |
| show       | Triggered when showing | —                   |
| hide       | Triggered when hiding  | —                   |

### Methods

| Method Name    | Description                                                                                                                                                          | Parameter |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| show           | Can be used to display in manual mode                                                                                                                                | -         |
| hide           | Used to actively hide. Calling this method will not be involved in the `closeDelay` debounce mechanism                                                               | -         |
| updatePosition | It is used to actively update the position of the window. Generally, when the content displayed inside changes, this method can be used to recalculate the position. | -         |
