## Tabs

Separate data sets that are related in content but belong to different categories.

### Basic Usage

Basic and simple tab pages.

!!!demo1!!!

### Position

You can set the position of the tabs through `position`.

!!!demo2!!!

### Custom Tab Page Title

You can customize the tab title through the **label** section in `jk-tab-panel`.

!!!demo3!!!

### Card Style

You can enable the card style by configuring `card`.

!!!demo4!!!

### Attributes

| Parameter  | Description                                                                | Type    | Optional Values       | Default Value |
| ---------- | -------------------------------------------------------------------------- | ------- | --------------------- | ------------- |
| value      | The default selected tab value, corresponding to the `name` in `tab-panel` | string  | -                     | —             |
| card       | Card theme                                                                 | boolean | -                     | -             |
| position   | Tab position                                                               | string  | top/bottom/right/left | top           |
| fullHeight | When enabled, the height of the content area will be automatically filled  | boolean | -                     | -             |

### Events

| Event Name | Description                             | Parameters           |
| ---------- | --------------------------------------- | -------------------- |
| change     | Triggered when the selected tab changes | Tab item information |
| click      | Triggered when a tab is clicked         | Tab item information |
