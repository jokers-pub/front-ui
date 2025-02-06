## Tag

Used for marking and selection.

### Basic Usage

The type of the tag is selected by the `type` attribute, and the background color can also be customized through the `color` attribute.

!!!demo1!!!

### Removable Tag

Setting the `closable` attribute can define whether a tag is removable.

!!!demo2!!!

### Different Sizes

The Tag component provides three sizes in addition to the default size, allowing you to choose the appropriate button size for different scenarios.

The additional sizes are: `medium`, `small`, and `mini`, which can be configured by setting the `size` attribute.

!!!demo3!!!

### Different Themes

The Tag component offers three different themes: `dark`, `light`, and `plain`.

The theme can be changed by setting the `effect` attribute, with the default being `light`.

!!!demo4!!!

### Attributes

| Parameter | Description            | Type    | Optional Values             | Default Value |
| --------- | ---------------------- | ------- | --------------------------- | ------------- |
| type      | Type                   | string  | success/info/warning/danger | —             |
| class     | Custom class style     | string  | -                           | -             |
| closable  | Whether it is closable | boolean | —                           | false         |
| color     | Background color       | string  | —                           | —             |
| size      | Size                   | string  | medium / small / mini       | —             |
| effect    | Theme                  | string  | dark / light / plain        | light         |

### Events

| Event Name | Description                                | Callback Parameters |
| ---------- | ------------------------------------------ | ------------------- |
| click      | The event triggered when a Tag is clicked  | —                   |
| close      | Triggered when the close button is clicked | —                   |
