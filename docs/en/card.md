## Card 

Displays grouped information within a container card.

### Basic Usage

Includes title, content, and actions.

The Card component consists of `header` and `body` sections. The `header` section requires a named slot for content distribution and is optional.

!!! demo1 !!!

### Simple Card

A card can contain only the content area.

!!! demo2 !!!

### With Images

Configure to display richer content.

Use the `body-style` property to customize the style of the body section. Layout components are also utilized here.

!!! demo3 !!!

### Card Shadow

Configure when to display the shadow.

Set the shadow display timing via the `shadow` property: `always`, `hover`, or `never`.

!!! demo4 !!!

### Attributes

| Attribute | Description | Type | Accepted Values | Default |
| --------- | ----------- | ---- | --------------- | ------- |
| header    | Sets the header, or pass DOM content via `slot#header` | string | — | — |
| bodyStyle | Customizes the body section's style | object | — | - |
| shadow    | Configures when shadow is displayed | string | always / hover / never | always |
| class     | Adds custom CSS class name | string | — | - |

### Slots

| Name | Description |
| ---- | ----------- |
| default | Content area slot |
| header  | Header area slot |