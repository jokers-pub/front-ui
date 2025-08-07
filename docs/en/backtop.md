## Backtop 

A button component that returns to the top of the page.

### Basic Usage

Scroll down the page to see the button in the bottom-right corner.

!!! demo1 !!!

### Custom Content

The display area is fixed to a 40px × 40px region, and the content inside can be customized.

!!! demo2 !!!

### Attributes

| Parameter         | Description                          | Type   | Options | Default |
|-------------------|--------------------------------------|--------|---------|---------|
| target           | Target element that triggers scrolling | string | —       | —       |
| visibilityHeight | Scroll height threshold to make the button appear | number | —       | 200     |
| right            | Controls the display position, margin from the right edge of the page | string | -       | 40px    |
| bottom           | Controls the display position, margin from the bottom of the page | string | —       | 40px    |

### Events

| Event Name | Description               | Callback Parameters |
|------------|---------------------------|---------------------|
| click      | Triggers when clicked     | Click event         |