## Drawer

The Drawer component provides almost the same API as the `Dialog`, but offers a different UI experience.

### Basic Usage

Pops up a sidebar that can be displayed from multiple directions.
!!!demo1!!!

### Multi-layer Nesting

Supports multi-layer nesting, and the `z-index` is automatically controlled within the component.
!!!demo2!!!

### Attributes

| Parameter | Description         | Type   | Optional Values       | Default Value |
| --------- | ------------------- | ------ | --------------------- | ------------- |
| direction | Expansion direction | string | left/top/right/bottom | right         |
| size      | Expansion size      | string | -                     | 30%           |
| title     | Title               | string | -                     | -             |

### Sections

| Name    | Description  |
| ------- | ------------ |
| default | Content area |
| title   | Title area   |

### Methods

| Method Name | Description | Parameter | Return Value |
| ----------- | ----------- | --------- | ------------ |
| open        | Open        | -         | -            |
| close       | Close       | -         | -            |

### Events

| Event Name | Description | Parameter |
| ---------- | ----------- | --------- |
| open       | Opening     | -         |
| close      | Closing     | -         |
