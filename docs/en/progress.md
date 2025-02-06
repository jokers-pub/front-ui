## Progress

Used to show the operation progress, informing users of the current status and expectations.

### Linear Progress Bar

For the Progress component, setting the `percentage` attribute, which is required and must be between 0-100, represents the percentage corresponding to the progress bar. The text content of the progress bar can be specified through the `format` attribute.

!!!demo1!!!

### Inner-displayed Percentage

The percentage does not take up additional controls, which is suitable for scenarios such as file uploads.

For the Progress component, the height of the progress bar can be changed through the `stroke-width` attribute, and the description of the progress bar can be placed inside the progress bar through the `text-inside` attribute.

!!!demo2!!!

### Custom Color

The color of the progress bar can be set through `color`. `color` can accept color strings, functions, and arrays.

!!!demo3!!!

### Circular Progress Bar

The Progress component can use the `type` attribute to specify the use of a circular progress bar. In the circular progress bar, the size can also be set through the `width` attribute.

!!!demo4!!!

### Gauge-shaped Progress Bar

Use the `type` attribute to specify the use of a gauge-shaped progress bar.

!!!demo5!!!

### Attributes

| Parameter       | Description                                                                                    | Type                  | Optional Values           | Default Value |
| --------------- | ---------------------------------------------------------------------------------------------- | --------------------- | ------------------------- | ------------- |
| percentage      | Percentage (required)                                                                          | number                | 0-100                     | 0             |
| type            | Progress bar type                                                                              | string                | line/circle/dashboard     | line          |
| class           | Custom class style                                                                             | string                | -                         | -             |
| strokeWidth     | The width of the progress bar, in px                                                           | number                | —                         | 6             |
| textInside      | The progress bar text is displayed inside the progress bar (only available when type = line)   | boolean               | —                         | false         |
| status          | The current status of the progress bar                                                         | string                | success/exception/warning | -             |
| color           | The background color of the progress bar (will override the status color)                      | string/function/array | —                         | ''            |
| width           | The width of the circular progress bar canvas (only available when type = circle or dashboard) | number                | —                         | 126           |
| showText        | Whether to display the text content of the progress bar                                        | boolean               | -                         | true          |
| strokeLinecap   | The shape of the two ends of the path for circle/dashboard types                               | string                | butt/round/square         | round         |
| format          | Specify the text content of the progress bar                                                   | function(percentage)  | -                         | -             |
| defineBackColor | Specify the base color of the progress bar (supports hex format)                               | string                | -                         | -             |
| textColor       | Specify the font color of the progress bar (supports hex format)                               | string                | -                         | -             |
