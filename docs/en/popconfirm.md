## Popconfirm

A pop-up bubble confirmation box appears when you click an element.

### Basic Usage

The attributes of Popconfirm are quite similar to those of Popover. Therefore, for duplicate attributes, please refer to the Popover documentation and they will not be elaborated in this document. In Popconfirm, only the `title` attribute is available.

!!!demo1!!!

### Customization

You can customize the content in Popconfirm.

!!!demo2!!!

### Attributes

| Parameter           | Description                     | Type   | Optional Values | Default Value    |
| ------------------- | ------------------------------- | ------ | --------------- | ---------------- |
| title               | Title                           | String | —               | —                |
| confirm-button-text | Text of the confirmation button | String | —               | —                |
| cancel-button-text  | Text of the cancel button       | String | —               | —                |
| confirm-button-type | Type of the confirmation button | String | —               | Primary          |
| cancel-button-type  | Type of the cancel button       | String | —               | Text             |
| icon                | Icon                            | String | —               | jk-icon-question |
| icon-color          | Color of the Icon               | String | —               | #f90             |

### Sections

| Parameter | Description                                              |
| --------- | -------------------------------------------------------- |
| default   | The HTML element that triggers the display of Popconfirm |

### Events

| Event Name | Description                                       | Callback Parameters |
| ---------- | ------------------------------------------------- | ------------------- |
| confirm    | Triggered when the confirmation button is clicked | —                   |
| cancel     | Triggered when the cancel button is clicked       | —                   |
