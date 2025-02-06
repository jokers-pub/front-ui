## Link

Text hyperlinks.

### Basic Usage

The basic usage of text links.

!!!demo1!!!

### Disabled State

The state where the text link is unavailable.

!!!demo2!!!

### Underline

Underline of the text link.

!!!demo3!!!

### Icons

Text links with icons can enhance recognition.

!!!demo4!!!

### Attributes

| Parameter | Description                       | Type    | Optional Values                             | Default Value |
| --------- | --------------------------------- | ------- | ------------------------------------------- | ------------- |
| type      | Type                              | string  | primary / success / warning / danger / info | default       |
| class     | Custom class style                | string  | -                                           | -             |
| underline | Whether to have an underline      | boolean | —                                           | true          |
| disabled  | Whether it is in a disabled state | boolean | —                                           | false         |
| target    | Opening method                    | string  | \_blank                                     | -             |
| href      | Native href attribute             | string  | —                                           | -             |
| icon      | Icon class name                   | string  | —                                           | -             |
| size      | Size                              | string  | medium/small                                | -             |

### Events

| Event Name | Description                        |
| ---------- | ---------------------------------- |
| click      | Triggered when the link is clicked |
