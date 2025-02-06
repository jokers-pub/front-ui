## Scrollbar

Used to replace the browser's native scrollbar.

### Basic Usage

Define the height of the scrollbar by setting the `height` attribute. If not set, it will adapt to the height of the parent container.

!!!demo1!!!

### Horizontal Scrolling

!!!demo2!!!

### Set Maximum Dimensions

You can control the triggering time of the scrollbar by setting the boundary values of the parent container, such as `max-width` and `max-height`.

!!!demo3!!!

### Manual Scrolling

By using the `scrollTo` method, you can manually control the scrolling position of the scrollbar.

!!!demo4!!!

### Attributes

| Parameter  | Description                                                                                                                          | Type    | Optional Values | Default Value |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------- | --------------- | ------------- |
| native     | Whether to use native interaction                                                                                                    | boolean | —               | false         |
| wrapClass  | Style extension of the `wrap` element                                                                                                | string  | —               | -             |
| viewClass  | Style extension of the `view` element                                                                                                | string  | —               | -             |
| class      | Root style extension                                                                                                                 | string  | —               | -             |
| noresize   | Do not respond to container size changes. If the container size will not change, it is best to set this for performance optimization | boolean | —               | false         |
| tag        | The output element tag                                                                                                               | string  | —               | div           |
| height     | Custom height. If not set, it defaults to the value of the parent container                                                          | string  | —               | -             |
| width      | Custom width. If not set, it defaults to the value of the parent container                                                           | string  | —               | -             |
| max-height | Custom maximum height. If not set, it defaults to the value of the parent container                                                  | string  | —               | -             |
| max-width  | Custom maximum width. If not set, it defaults to the value of the parent container                                                   | string  | —               | -             |

### Sections

| Section Name | Description     | Parameter |
| ------------ | --------------- | --------- |
| default      | Default content | -         |

### Methods

| Method Name | Description                                   | Parameter                             |
| ----------- | --------------------------------------------- | ------------------------------------- |
| scrollTo    | Scroll to a position                          | Parameters refer to `ScrollToOptions` |
| scrollToEl  | Scroll to the position of a specified element | HTMLElement                           |

### Events

| Event Name | Description                                          | Callback Parameters                                                                                                                  |
| ---------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| scroll     | Triggered when the scroll-triggered position changes | {top:number,left:number,x:number,y:number}, where `x` and `y` represent the progress of the scrollbar in the corresponding direction |
