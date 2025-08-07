## Popconfirm Bubble Confirmation Dialog

Click on an element to trigger a bubble confirmation dialog.

### Basic Usage

The properties of Popconfirm are very similar to those of Popover. Therefore, for duplicate properties, please refer to the Popover documentation. This document does not provide detailed explanations for them. In Popconfirm, only the `title` property is available.

!!!demo1!!!

### Customization

You can customize the content within Popconfirm.

!!!demo2!!!

### Attributes

| Attribute              | Description            | Type   | Optional Values | Default Value       |
|------------------------|------------------------|--------|-----------------|---------------------|
| title                  | Title                  | String | —               | —                   |
| confirm-button-text    | Confirm button text    | String | —               | —                   |
| cancel-button-text     | Cancel button text     | String | —               | —                   |
| confirm-button-type    | Confirm button type    | String | —               | Primary             |
| cancel-button-type     | Cancel button type     | String | —               | Text                |
| icon                   | Icon                   | String | —               | jk-icon-question    |
| icon-color             | Icon color             | String | —               | #f90                |

### Sections

| Slot     | Description                              |
|----------|------------------------------------------|
| default  | HTML element that triggers Popconfirm display |

### Events

| Event Name | Description              | Callback Parameters |
|------------|--------------------------|---------------------|
| confirm    | Triggered when the confirm button is clicked | —                   |
| cancel     | Triggered when the cancel button is clicked  | —                   |