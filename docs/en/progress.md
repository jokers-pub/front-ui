## Progress Bar

Used to display operation progress and inform users of current status and expectations.

### Linear Progress Bar  

The Progress component requires the `percentage` property, which represents the percentage of the progress bar. It must be a value between 0 and 100. The text content of the progress bar can be customized via the `format` property.

!!!demo1!!!

### Internal Percentage Display  

The percentage does not occupy additional space, making it suitable for scenarios like file uploads.  

The Progress component allows adjusting the height of the progress bar via the `stroke-width` property and placing the description text inside the bar using the `text-inside` property.  

!!!demo2!!!  

### Custom Color  

The progress bar color can be set via the `color` property, which accepts color strings, functions, or arrays.  

!!!demo3!!!  

### Circular Progress Bar  

The Progress component supports circular progress bars by setting the `type` property. For circular progress bars, the size can be adjusted using the `width` property.  

!!!demo4!!!  

### Dashboard-style Progress Bar  

A dashboard-style progress bar can be enabled via the `type` property.  

!!!demo5!!!  

### Attributes  

| Attribute       | Description                                                                 | Type                    | Accepted Values              | Default |
|----------------|---------------------------------------------------------------------------|------------------------|----------------------------|---------|
| percentage     | Percentage (required)                                                     | number                | 0-100                      | 0       |
| type           | Type of progress bar                                                      | string                | line/circle/dashboard      | line    |
| class          | Custom class name for styling                                             | string                | -                          | -       |
| strokeWidth    | Width of the progress bar in px                                           | number                | —                          | 6       |
| textInside     | Display text inside the progress bar (only for `type=line`)               | boolean               | —                          | false   |
| status         | Current status of the progress bar                                        | string                | success/exception/warning  | -       |
| color          | Background color of the progress bar (overrides `status` color)           | string/function/array | —                          | ''      |
| width          | Canvas width for circular/dashboard progress bars (`type=circle/dashboard`) | number                | —                          | 126     |
| showText       | Whether to display progress text                                          | boolean               | -                          | true    |
| strokeLinecap  | Shape of ends for circle/dashboard types                                  | string                | butt/round/square          | round   |
| format         | Custom text formatter function                                            | function(percentage)  | -                          | -       |
| defineBackColor | Background color of the progress track (supports HEX format)             | string                | -                          | -       |
| textColor      | Text color of the progress bar (supports HEX format)                     | string                | -                          | -       |