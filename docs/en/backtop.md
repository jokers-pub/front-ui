## Backtop

An operation button to return to the top of the page.

### Basic Usage

Scroll the page and you can see the button at the bottom-right corner.
!!! demo1!!!

### Custom Display Content

The display area is fixed to a 40px × 40px area, and the content within it can be customized.
!!! demo2!!!

### Attributes

| Parameter        | Description                                                                   | Type   | Optional Values | Default Value |
| ---------------- | ----------------------------------------------------------------------------- | ------ | --------------- | ------------- |
| target           | The object that triggers the scrolling                                        | string | —               | —             |
| visibilityHeight | The button appears when the scrolling height reaches this parameter value     | number | —               | 200           |
| right            | Controls its display position, the distance from the right margin of the page | number | -               | 40            |
| bottom           | Controls its display position, the distance from the bottom of the page       | number | —               | 40            |

### Events

| Event Name | Description                                    | Callback Parameter |
| ---------- | ---------------------------------------------- | ------------------ |
| click      | The event triggered when the button is clicked | Click event        |
