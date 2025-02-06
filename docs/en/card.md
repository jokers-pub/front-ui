## Card

Displays information aggregated within a card container.

### Basic Usage

Contains a title, content, and actions.
The Card component consists of a header and a body section. The header section requires an explicit named section distribution and is optional.
!!! demo1!!!

### Simple Card

A card can have only a content area.
!!! demo2!!!

### With Image

Allows for configuring and defining a more diverse content display.
Configure the `body-style` property to customize the style of the body section. We also use the layout component.
!!! demo3!!!

### Card Shadow

Allows for configuring the display of the shadow.
Set the timing of the card shadow appearance through the `shadow` property: `always`, `hover`, or `never`.
!!! demo4!!!

### Attributes

| Parameter | Description                                                                | Type   | Optional Values        | Default Value |
| --------- | -------------------------------------------------------------------------- | ------ | ---------------------- | ------------- |
| header    | Set the header, and it can also be passed as DOM through `sections#header` | string | —                      | —             |
| bodyStyle | Set the style of the body                                                  | object | —                      | -             |
| shadow    | Set the timing of shadow display                                           | string | always / hover / never | always        |
| class     | Set the card class name                                                    | string | —                      | -             |

### Sections

| Name    | Description       |
| ------- | ----------------- |
| default | Content area slot |
| header  | Header area slot  |
