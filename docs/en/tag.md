## Tag  

Used for marking and selection.

### Basic Usage  

Use the `type` attribute to specify the tag style. Alternatively, you can customize the background color using the `color` attribute.  

!!!demo1!!!  

### Removable Tag  

Set the `closable` attribute to determine whether a tag can be removed.  

!!!demo2!!!  

### Different Sizes  

The Tag component offers three additional sizes besides the default one, suitable for different scenarios.  

Additional sizes: `medium`, `small`, and `mini`, configured via the `size` attribute.  

!!!demo3!!!  

### Different Themes  

The Tag component provides three themes: `dark`, `light`, and `plain`.  

Set the `effect` attribute to switch themes. Defaults to `light`.  

!!!demo4!!!  

### Attributes  

| Attribute | Description            | Type      | Accepted Values                   | Default |
| --------- | ---------------------- | --------- | --------------------------------- | ------- |
| type      | Tag type               | string    | success / info / warning / danger | —       |
| class     | Custom CSS class       | string    | —                                 | —       |
| closable  | Whether removable      | boolean   | —                                 | false   |
| color     | Background color       | string    | —                                 | —       |
| size      | Tag size               | string    | medium / small / mini              | —       |
| effect    | Theme                  | string    | dark / light / plain              | light   |

### Events  

| Event Name | Description                | Callback Parameters |
| ---------- | -------------------------- | ------------------- |
| click      | Triggered when tag is clicked | —                   |
| close      | Triggered when close button is clicked | —                   |