## Tabs

Separates content into distinct yet related data categories.

### Basic Usage

Basic and concise tabs configuration.

!!!demo1!!!

### Placement

Tab position can be configured via the `position` property.

!!!demo2!!!

### Custom Tab Title

Use the **label** slot in `jk-tab-panel` to customize tab headers.

!!!demo3!!!

### Card Style

Enable card-style appearance by configuring the `card` property.

!!!demo4!!!

### Attributes

| Parameter   | Description                                      | Type      | Accepted Values          | Default |
| ----------- | ------------------------------------------------ | --------- | ------------------------ | ------- |
| value       | Default active tab value (matches tab-panel name) | string    | -                        | —       |
| card        | Card styling theme                               | boolean   | -                        | false   |
| position    | Tab positioning                                  | string    | top/bottom/right/left    | top     |
| fullHeight  | Enables automatic full-height content expansion  | boolean   | -                        | false   |

### Events

| Event Name | Description                     | Parameters     |
| ---------- | ------------------------------- | -------------- |
| change     | Triggered when active tab changes | Tab item info  |
| click      | Triggered when tab is clicked   | Tab item info  |