## Popover 

### Basic Usage

The properties of Popover are very similar to those of Tooltip. Therefore, for repeated properties, please refer to the Tooltip documentation, which will not be explained in detail here.

The `trigger` property is used to set when the Popover is triggered, supporting three trigger methods: `hover`, `click`, and `manual`.

!!!demo1!!!

### Nested Content

Various types of information can be nested within a Popover. Below is an example of nesting a table. Use the `section` tag to replace the `content` property.

!!!demo2!!!

### Attributes

| Parameter    | Description                                    | Type            | Options                                                                                                  | Default        |
|-------------|----------------------------------------------|----------------|--------------------------------------------------------------------------------------------------------|---------------|
| trigger     | Trigger method                               | String         | click/hover/manual                                                                                     | click         |
| title       | Title                                        | String         | —                                                                                                      | —             |
| content     | Content to display, or DOM can be passed via `section` | String         | —                                                                                                      | —             |
| width       | Width                                        | String, Number | —                                                                                                      | Min-width: 150px |
| placement   | Placement position                           | String         | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom        |
| disabled    | Whether the Popover is enabled               | Boolean        | —                                                                                                      | false         |
| offset      | Offset of the placement position             | Number         | —                                                                                                      | 0             |
| open-delay  | Display delay when trigger method is hover, in milliseconds | Number         | —                                                                                                      | —             |
| close-delay | Hide delay when trigger method is hover, in milliseconds | number         | —                                                                                                      | 200           |
| appendTo    | Output container for the element             | string         | —                                                                                                      | body          |

### Sections

| Parameter  | Description                           |
|-----------|--------------------------------------|
| default   | HTML text embedded in the Popover    |
| reference | HTML element that triggers the Popover display |

### Events

| Event Name | Description      | Callback Parameters |
|-----------|------------------|---------------------|
| show      | Triggered when shown | —                   |
| hide      | Triggered when hidden | —                   |

### Methods

| Method Name       | Description                                                                               | Parameters |
|------------------|------------------------------------------------------------------------------------------|------------|
| show             | Can be used to manually display the Popover in manual mode                                | -          |
| hide             | Used to actively hide the Popover; calling this method won't trigger the `closeDelay` debounce mechanism | -          |
| updatePosition   | Used to actively update the position of the window, typically when the internal content changes and the position needs to be recalculated | -          |