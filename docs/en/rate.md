## Rate Rating  

Rating component  

### Basic Usage  

The rating is divided into three levels by default. You can use the `colors` array to grade the score and its sentiment (colors are not distinguished by default). The colors corresponding to the three levels are set using the `colors` attribute, while their thresholds are defined by `low-threshold` and `high-threshold`. You can also customize segments by passing a color object, where the keys are the segment boundaries and the values are their corresponding colors.  

!!!demo1!!!  

### Auxiliary Text  

Use auxiliary text to directly express the corresponding score. Setting the `show-text` property for the component will display auxiliary text on the right. The `texts` property can be used to specify auxiliary text for each score. `texts` should be an array with a length equal to the maximum value `max`.  

!!!demo2!!!  

### Custom Icon  

When there are multiple levels of ratings, different types of icons can be used to distinguish between them. The `icon-classes` attribute allows customization of icons for different segments. If an array is passed, it should contain three elements corresponding to the class names for the three segments. If an object is passed, segments can be customized, where the keys are the segment boundaries and the values are the corresponding class names. This example also uses `void-icon-class` to specify the class name for unselected icons.  

!!!demo3!!!  

### Half-Star  

Enable half-star functionality by setting the `allowHalf` property.  

!!!demo4!!!  

### Read-Only  

A read-only rating is used to display scores and allows half-stars. Setting the `disabled` property indicates the component is read-only and supports decimal scores. If `show-score` is enabled, the current score will be displayed on the right.  

!!!demo5!!!  

### Attributes  

| Attribute                 | Description                                                                                                                                                                                                                                                                                                 | Type          | Options | Default                                                 |  
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------- | ------------------------------------------------------- |  
| value                     | Value                                                                                                                                                                                                                                                                                                      | number        | —       | 0                                                       |  
| class                     | Custom class for styling                                                                                                                                                                                                                                                                                   | string        | —       | —                                                       |  
| max                       | Maximum score                                                                                                                                                                                                                                                                                              | number        | —       | 5                                                       |  
| disabled                  | Whether it is read-only                                                                                                                                                                                                                                                                                    | boolean       | —       | false                                                   |  
| allow-half                | Whether half-selection is allowed                                                                                                                                                                                                                                                                          | boolean       | —       | false                                                   |  
| low-threshold             | Threshold between low and medium scores, where the value itself falls into the low segment                                                                                                                                                                                                                 | number        | —       | 2                                                       |  
| high-threshold            | Threshold between medium and high scores, where the value itself falls into the high segment                                                                                                                                                                                                               | number        | —       | 4                                                       |  
| colors                    | Colors for the icons. If an array is passed, it should contain three elements for the three segments. If an object is passed, segments can be customized, where the keys are the segment boundaries and the values are the corresponding colors.                                                              | array/object  | —       | ['#F7BA2A', '#F7BA2A', '#F7BA2A']                      |  
| void-color                | Color for unselected icons                                                                                                                                                                                                                                                                                 | string        | —       | #C6D1DE                                                 |  
| disabled-void-color       | Color for unselected icons in read-only mode                                                                                                                                                                                                                                                               | string        | —       | #EFF2F7                                                 |  
| icon-classes              | Class names for the icons. If an array is passed, it should contain three elements for the three segments. If an object is passed, segments can be customized, where the keys are the segment boundaries and the values are the corresponding class names.                                                   | array/object  | —       | ['jk-icon-star-on', 'jk-icon-star-on', 'jk-icon-star-on'] |  
| void-icon-class           | Class name for unselected icons                                                                                                                                                                                                                                                                            | string        | —       | jk-icon-star-off                                        |  
| disabled-void-icon-class  | Class name for unselected icons in read-only mode                                                                                                                                                                                                                                                         | string        | —       | jk-icon-star-on                                         |  
| show-text                 | Whether to display auxiliary text. If true, the text corresponding to the current score will be selected from the `texts` array.                                                                                                                                                                            | boolean       | —       | false                                                   |  
| show-score                | Whether to display the current score. `show-score` and `show-text` cannot both be true.                                                                                                                                                                                                                     | boolean       | —       | false                                                   |  
| text-color                | Color of the auxiliary text                                                                                                                                                                                                                                                                                | string        | —       | #1F2D3D                                                 |  
| texts                     | Array of auxiliary texts                                                                                                                                                                                                                                                                                   | array         | —       | ['Terrible', 'Disappointed', 'Average', 'Satisfied', 'Surprised'] |  
| score-template            | Score display template                                                                                                                                                                                                                                                                                     | string        | —       | {value}                                                 |  

### Events  

| Event Name | Description                    | Callback Parameters       |  
| ---------- | ------------------------------ | -------------------------- |  
| change     | Triggered when the score changes | The updated score value    |