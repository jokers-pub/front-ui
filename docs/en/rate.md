## Rate

Rating component

### Basic Usage

By default, the rating is divided into three levels. You can use an array of colors to classify scores and emotional tendencies (by default, no color distinction is made). The colors corresponding to the three levels are set through the `colors` attribute, and the two thresholds corresponding to them are set through `low-threshold` and `high-threshold`. You can also customize the segments by passing in a color object, where the key is the boundary value of the segment and the value is the corresponding color.

!!!demo1!!!

### Auxiliary Text

Use auxiliary text to directly express the corresponding score. Setting the `show-text` attribute for the component will display auxiliary text on the right. You can specify the corresponding auxiliary text for each score value by setting `texts`. `texts` is an array with a length equal to the maximum value `max`.

!!!demo2!!!

### Custom Icon

When there are multiple levels of evaluation, different types of icons can be used to distinguish rating levels. Setting the `icon-classes` attribute can customize the icons for different segments. If an array is passed in, it has 3 elements, which are the class names corresponding to the 3 segments; if an object is passed in, the segments can be customized, with the key being the boundary value of the segment and the value being the corresponding class name. This example also uses `void-icon-class` to specify the class name of the unselected icon.

!!!demo3!!!

### Half-star

You can set the `allowHalf` attribute to enable the half-star function.

!!!demo4!!!

### Read-only

Read-only ratings are used to display scores. Half-stars are allowed. Setting the `disabled` attribute for the component means the component is read-only and supports decimal scores. At this time, if `show-score` is set, the current score will be displayed on the right.

!!!demo5!!!

### Attributes

| Parameter                | Description                                                                                                                                                                                                                                                                                           | Type         | Optional Values | Default Value                                                     |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------- | ----------------------------------------------------------------- |
| value                    | Value                                                                                                                                                                                                                                                                                                 | number       | —               | 0                                                                 |
| class                    | Custom class style                                                                                                                                                                                                                                                                                    | string       | -               | -                                                                 |
| max                      | Maximum score                                                                                                                                                                                                                                                                                         | number       | —               | 5                                                                 |
| disabled                 | Whether it is read-only                                                                                                                                                                                                                                                                               | boolean      | —               | false                                                             |
| allow-half               | Whether half-selection is allowed                                                                                                                                                                                                                                                                     | boolean      | —               | false                                                             |
| low-threshold            | The boundary value between low and medium scores. The value itself is classified as low                                                                                                                                                                                                               | number       | —               | 2                                                                 |
| high-threshold           | The boundary value between high and medium scores. The value itself is classified as high                                                                                                                                                                                                             | number       | —               | 4                                                                 |
| colors                   | The colors of the icon. If an array is passed in, it has 3 elements, which are the colors corresponding to the 3 segments; if an object is passed in, the segments can be customized, with the key being the boundary value of the segment and the value being the corresponding color                | array/object | —               | ['#F7BA2A', '#F7BA2A', '#F7BA2A']                                 |
| void-color               | The color of the unselected icon                                                                                                                                                                                                                                                                      | string       | —               | #C6D1DE                                                           |
| disabled-void-color      | The color of the unselected icon in read-only mode                                                                                                                                                                                                                                                    | string       | —               | #EFF2F7                                                           |
| icon-classes             | The class names of the icon. If an array is passed in, it has 3 elements, which are the class names corresponding to the 3 segments; if an object is passed in, the segments can be customized, with the key being the boundary value of the segment and the value being the corresponding class name | array/object | —               | ['jk-icon-star-on', 'jk-icon-star-on', 'jk-icon-star-on']         |
| void-icon-class          | The class name of the unselected icon                                                                                                                                                                                                                                                                 | string       | —               | jk-icon-star-off                                                  |
| disabled-void-icon-class | The class name of the unselected icon in read-only mode                                                                                                                                                                                                                                               | string       | —               | jk-icon-star-on                                                   |
| show-text                | Whether to display auxiliary text. If true, the text corresponding to the current score will be selected from the `texts` array                                                                                                                                                                       | boolean      | —               | false                                                             |
| show-score               | Whether to display the current score. `show-score` and `show-text` cannot be true at the same time                                                                                                                                                                                                    | boolean      | —               | false                                                             |
| text-color               | The color of the auxiliary text                                                                                                                                                                                                                                                                       | string       | —               | #1F2D3D                                                           |
| texts                    | The array of auxiliary texts                                                                                                                                                                                                                                                                          | array        | —               | ['Terrible', 'Disappointed', 'Average', 'Satisfied', 'Surprised'] |
| score-template           | The template for score display                                                                                                                                                                                                                                                                        | string       | —               | {value}                                                           |

### Events

| Event Name | Description                            | Callback Parameters     |
| ---------- | -------------------------------------- | ----------------------- |
| change     | Triggered when the score value changes | The changed score value |
