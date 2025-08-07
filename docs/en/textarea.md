## Textarea Input Field  

Used for inputting multi-line text information  

### Basic Usage  

Text area height can be controlled via the `rows` property  

!!!demo1!!!  

### Auto-Resizing Textarea  

By setting the `autosize` property, the height of the text area can automatically adjust based on the text content. Additionally, `autosize` can be configured as an object to specify the minimum and maximum number of rows.  

!!!demo2!!!  

### Input Length Limit  

`maxlength` and `minlength` are native attributes used to restrict the input length. The character count is calculated using JavaScript’s string length. When using the `maxlength` attribute to limit the maximum input length, the `show-word-limit` property can be set to display the character count.  

!!!demo3!!!  

### Attributes  

| Parameter        | Description                                                                                       | Type             | Allowed Values                                                                                                  | Default |
|------------------|---------------------------------------------------------------------------------------------------|------------------|-----------------------------------------------------------------------------------------------------------------|---------|
| type            | Input type                                                                                       | string           | text, [native input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | text    |
| value           | Bound value                                                                                      | string / number  | —                                                                                                               | —       |
| class           | Custom CSS class                                                                                 | string           | —                                                                                                               | —       |
| maxlength       | Native attribute, maximum input length                                                           | number           | —                                                                                                               | —       |
| minlength       | Native attribute, minimum input length                                                           | number           | —                                                                                                               | —       |
| show-word-limit | Whether to display character count                                                               | boolean          | —                                                                                                               | false   |
| placeholder     | Input placeholder text                                                                           | string           | —                                                                                                               | —       |
| disabled        | Disabled state                                                                                   | boolean          | —                                                                                                               | false   |
| size            | Input field size                                                                                 | string           | medium / small / mini                                                                                           | —       |
| rows            | Number of text rows                                                                              | number           | —                                                                                                               | 1       |
| autosize        | Auto-resize height based on content. Can be an object, e.g., `{ minRows: 2, maxRows: 6 }`        | boolean / object | —                                                                                                               | false   |
| resize          | Controls whether the textarea can be resized by the user                                         | string           | none, both, horizontal, vertical                                                                               | —       |
| autocomplete    | Native attribute, auto-complete                                                                  | string           | on, off                                                                                                         | off     |
| name            | Native attribute                                                                                 | string           | —                                                                                                               | —       |
| readonly        | Native attribute, read-only mode                                                                 | boolean          | —                                                                                                               | false   |
| autofocus       | Native attribute, auto-focus                                                                     | boolean          | true, false                                                                                                     | false   |
| label           | Label text associated with the input field                                                       | string           | —                                                                                                               | —       |
| tabindex        | Input field tabindex                                                                             | string           | —                                                                                                               | —       |

### Events  

| Event Name | Description                                                         | Callback Parameter |
|------------|---------------------------------------------------------------------|--------------------|
| blur       | Triggers when the Input loses focus                                 | VNode.Event        |
| focus      | Triggers when the Input gains focus                                 | VNode.Event        |
| change     | Triggers only when the Input loses focus or the user presses Enter  | VNode.Event        |
| input      | Triggers when the Input value changes                               | VNode.Event        |

### Methods  

| Method  | Description                     | Parameters |
|---------|---------------------------------|------------|
| focus   | Focuses the input field         | —          |
| blur    | Unfocuses the input field       | —          |
| select  | Selects the text in the input   | —          |