## Tooltip

Often used to display prompt information when the mouse hovers.

### Basic Usage

Here we provide 9 different display directions. You can understand them through the following complete examples and choose the effect you want.

Use the `content` attribute to determine the prompt information when hovering. The display effect is determined by the `placement` attribute. The value of the `placement` attribute is in the format of `direction-alignment position`. The four directions are `top`, `left`, `right`, `bottom`, and the three alignment positions are `start`, `end`, with the default being `bottom`. For example, if `placement = "left-end"`, the prompt information will appear on the left side of the target element, and the bottom of the prompt information will be aligned with the bottom of the target element.

!!!demo1!!!

### Themes

The Tooltip component offers two different themes: `dark` and `light`.

Change the theme by setting the `effect` attribute, with the default being `dark`.

!!!demo2!!!

### Manual Control

Control whether to activate manually through the `manual` attribute, and then freely operate through the `show` and `hide` methods of the component.

!!!demo3!!!

### More Content

Display multi-line text or set the format of the text content.

Use the named section to distribute the `content`, replacing the `content` attribute in the `tooltip`.

!!!demo4!!!

### Disabled

Set the disabled state of the tooltip through the `disabled` value.

!!!demo5!!!

### Size

Set the size of the tooltip through the `size` value.

!!!demo6!!!

### Maximum Width

If the content is too long, you can configure the `maxWidth` to set the maximum width, so that the content can be displayed in multiple lines.

!!!demo7!!!

### Attributes

| Parameter   | Description                                                                                              | Type    | Optional Values                                                                                           | Default Value |
| ----------- | -------------------------------------------------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------- | ------------- |
| effect      | The default provided theme                                                                               | String  | dark/light / error                                                                                        | dark          |
| content     | The content to be displayed. DOM can also be passed in through the section `content`                     | String  | —                                                                                                         | —             |
| placement   | The appearance position of the Tooltip                                                                   | String  | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom        |
| disabled    | Whether the Tooltip is available                                                                         | Boolean | —                                                                                                         | false         |
| offset      | The offset of the appearance position                                                                    | Number  | —                                                                                                         | 0             |
| transition  | Define the fade-in animation                                                                             | String  | —                                                                                                         | jk-fade-in    |
| open-delay  | Delay the appearance, in milliseconds                                                                    | Number  | —                                                                                                         | 0             |
| close-delay | Delay the hiding, in milliseconds (debounce)                                                             | Number  | —                                                                                                         | 200           |
| manual      | Manual control mode. After setting it to true, the mouseenter and mouseleave events will not take effect | Boolean | —                                                                                                         | false         |
| size        | Size configuration                                                                                       | string  | medium、small、mini                                                                                       |               |
| maxWidth    | Maximum width                                                                                            | string  | -                                                                                                         | 300px         |
