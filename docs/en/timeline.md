## Timeline

Visually presents time-flow information.

### Basic Usage

The Timeline can be split into multiple activities arranged according to timestamps. The timestamp is an important feature that distinguishes it from other controls. When using it, pay attention to differentiating it from components like Steps.

!!!demo1!!!

### Custom Node Styles

You can customize the size and color of nodes according to the actual scenario, or directly use icons.

!!!demo2!!!

### Custom Timestamp

When the content is too tall in the vertical direction, the timestamp can be placed above the content.

!!!demo3!!!

### Timeline Attributes

| Parameter | Description        | Type   | Optional Values | Default Value |
| --------- | ------------------ | ------ | --------------- | ------------- |
| class     | Custom class style | string | -               | -             |

### Timeline-item Attributes

| Parameter     | Description                   | Type    | Optional Values                             | Default Value |
| ------------- | ----------------------------- | ------- | ------------------------------------------- | ------------- |
| timestamp     | Timestamp                     | string  | -                                           | -             |
| hideTimestamp | Whether to hide the timestamp | boolean | -                                           | false         |
| placement     | Timestamp position            | string  | top / bottom                                | bottom        |
| type          | Node type                     | string  | primary / success / warning / danger / info | -             |
| color         | Node color                    | string  | hsl / hsv / hex / rgb                       | -             |
| size          | Node size                     | string  | normal / large                              | normal        |
| icon          | Node icon                     | string  | -                                           | -             |

### Timeline-Item Sections

| Name    | Description              |
| ------- | ------------------------ |
| default | Content of Timeline-Item |
| dot     | Custom node              |
