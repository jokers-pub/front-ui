## Textarea

Used to input multi-line text information.

### Basic Usage

The height of the textarea can be controlled by the `rows` attribute.

!!!demo1!!!

### Textarea with Auto-adaptive Text Height

By setting the `autosize` attribute, the height of the textarea can be automatically adjusted according to the text content. Moreover, `autosize` can also be set as an object to specify the minimum and maximum number of rows.

!!!demo2!!!

### Input Length Limit

`maxlength` and `minlength` are native attributes used to limit the character length of the input box, where the character length is counted by the length of the JavaScript string. While using the `maxlength` attribute to limit the maximum input length, you can set the `show-word-limit` attribute to display the word count.

!!!demo3!!!

### Attributes

| Parameter       | Description                                                                                    | Type             | Optional Values                                                                                                       | Default Value |
| --------------- | ---------------------------------------------------------------------------------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------- | ------------- |
| type            | Type                                                                                           | string           | text, [types of native input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | text          |
| value           | Bound value                                                                                    | string / number  | —                                                                                                                     | —             |
| class           | Custom class style                                                                             | string           | -                                                                                                                     | -             |
| maxlength       | Native attribute, maximum input length                                                         | number           | —                                                                                                                     | —             |
| minlength       | Native attribute, minimum input length                                                         | number           | —                                                                                                                     | —             |
| show-word-limit | Whether to display the input word count                                                        | boolean          | —                                                                                                                     | false         |
| placeholder     | Placeholder text of the input box                                                              | string           | —                                                                                                                     | —             |
| disabled        | Disabled                                                                                       | boolean          | —                                                                                                                     | false         |
| size            | Size of the input box                                                                          | string           | medium / small / mini                                                                                                 | —             |
| rows            | Number of rows of the input box                                                                | number           | —                                                                                                                     | 1             |
| autosize        | Auto-adapt to the content height. An object can be passed in, e.g., { minRows: 2, maxRows: 6 } | boolean / object | —                                                                                                                     | false         |
| resize          | Control whether it can be resized by the user                                                  | string           | none, both, horizontal, vertical                                                                                      | —             |
| autocomplete    | Native attribute, auto-completion                                                              | string           | on, off                                                                                                               | off           |
| name            | Native attribute                                                                               | string           | —                                                                                                                     | —             |
| readonly        | Native attribute, whether it is read-only                                                      | boolean          | —                                                                                                                     | false         |
| autofocus       | Native attribute, auto-focus                                                                   | boolean          | true, false                                                                                                           | false         |
| label           | The label text associated with the input box                                                   | string           | —                                                                                                                     | —             |
| tabindex        | The tabindex of the input box                                                                  | string           | -                                                                                                                     | -             |

### Events

| Event Name | Description                                                             | Callback Parameters |
| ---------- | ----------------------------------------------------------------------- | ------------------- |
| blur       | Triggered when the Input loses focus                                    | VNode.Event         |
| focus      | Triggered when the Input gains focus                                    | VNode.Event         |
| change     | Triggered only when the input box loses focus or the user presses Enter | VNode.Event         |
| input      | Triggered when the value of the Input changes                           | VNode.Event         |

### Methods

| Method Name | Description                  | Parameter |
| ----------- | ---------------------------- | --------- |
| focus       | Make the input gain focus    | —         |
| blur        | Make the input lose focus    | —         |
| select      | Select the text in the input | —         |
