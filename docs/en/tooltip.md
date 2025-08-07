## Tooltip  

Commonly used to display hover-over tooltip information.  

### Basic Usage  

Here we provide 9 different directional display modes. You can understand and select the desired effect through the following complete examples.  

Use the `content` property to define the tooltip information shown on hover. The display effect is determined by the `placement` property:  
- The `placement` property value follows the format: `direction-alignment`.  
- Four directions: `top`, `left`, `right`, `bottom`.  
- Three alignment positions: `start`, `end` (default is aligned to `bottom`).  
For example, `placement="left-end"` means the tooltip appears to the left of the target element, with the tooltip's bottom aligned to the target element's bottom.  

!!!demo1!!!  

### Themes  

The Tooltip component provides two themes: `dark` and `light`.  

Change the theme by setting the `effect` property, which defaults to `dark`.  

!!!demo2!!!  

### Manual Control  

Control activation manually via the `manual` property, then freely operate the tooltip using the component's `show` and `hide` methods.  

!!!demo3!!!  

### Rich Content  

Display multiline text or formatted content.  

Use a named slot (`slot="content"`) to distribute content, replacing the `content` attribute in `tooltip`.  

!!!demo4!!!  

### Disabled  

Set the disabled state of the tooltip by configuring the `disabled` property.  

!!!demo5!!!  

### Sizing  

Configure the tooltip's size using the `size` property.  

!!!demo6!!!  

### Max Width  

If the content is too long, set the `maxWidth` property to define a maximum width for multiline display.  

!!!demo7!!!  

### Attributes  

| Parameter     | Description                                                                 | Type     | Accepted Values                                                                                           | Default     |  
| ------------- | -------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------- | ----------- |  
| `effect`      | Default theme                                                              | String   | `dark`/`light`/`error`                                                                                  | `dark`      |  
| `content`     | Displayed content (can also be passed via slot `content` as DOM)           | String   | —                                                                                                       | —           |  
| `placement`   | Tooltip's display position                                                 | String   | `top`,`top-start`,`top-end`,`bottom`,`bottom-start`,`bottom-end`,`left`,`left-start`,`left-end`,`right`,`right-start`,`right-end` | `bottom`    |  
| `disabled`    | Whether Tooltip is disabled                                                | Boolean  | —                                                                                                       | `false`     |  
| `offset`      | Offset for the display position                                            | Number   | —                                                                                                       | `0`         |  
| `transition`  | Transition animation                                                       | String   | —                                                                                                       | `jk-fade-in`|  
| `open-delay`  | Delay before appearance (milliseconds)                                     | Number   | —                                                                                                       | `0`         |  
| `close-delay` | Delay before hiding (debounce, milliseconds)                               | Number   | —                                                                                                       | `200`       |  
| `manual`      | Manual control mode. If `true`, `mouseenter` and `mouseleave` events are ignored | Boolean | — | `false` |  
| `size`        | Configuration for size                                                     | String   | `medium`, `small`, `mini`                                                                               | —           |  
| `maxWidth`    | Maximum width                                                              | String   | —                                                                                                       | `300px`     |