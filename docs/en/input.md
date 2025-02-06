## Input

Used to input characters via mouse or keyboard.

### Basic Usage

!!!demo1!!!

### Disabled State

Specify whether to disable the input component through the `disabled` attribute.

!!!demo2!!!

### Clearable

Adding the `clearable` attribute gives you a clearable input box.

!!!demo3!!!

### Input Box with Icon

Use an icon to mark the input type.

You can add icons to the front and end of the input component through the `prefix-icon` and `suffix-icon` attributes, or you can place the icon through `section`.

!!!demo4!!!

### Composite Input Box

It can have pre-or post-elements, usually labels or buttons.

You can use `section` to specify the pre-or post-content in the input.

!!!demo5!!!

### Size

You can specify the size of the input box through the `size` attribute. Besides the default size, there are also three sizes: medium, small, and mini.

!!!demo6!!!

### Input Length Limit

`maxlength` and `minlength` are native attributes used to limit the character length of the input box. The character length is counted by the length of the JavaScript string. For input boxes of type `text` or `textarea`, while using the `maxlength` attribute to limit the maximum input length, you can set the `show-word-limit` attribute to display the word count.

!!!demo7!!!

### Input Attributes

| Parameter       | Description                                  | Type            | Optional Values                                                                                                          | Default Value |
| --------------- | -------------------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------- |
| type            | Type                                         | string          | text, [native input type values](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | text          |
| value           | Bound value                                  | string / number | —                                                                                                                        | —             |
| class           | Custom class style                           | string          | -                                                                                                                        | -             |
| maxlength       | Native attribute, maximum input length       | number          | —                                                                                                                        | —             |
| minlength       | Native attribute, minimum input length       | number          | —                                                                                                                        | —             |
| show-word-limit | Whether to display the input word count      | boolean         | —                                                                                                                        | false         |
| placeholder     | Placeholder text of the input box            | string          | —                                                                                                                        | —             |
| clearable       | Whether it is clearable                      | boolean         | —                                                                                                                        | false         |
| disabled        | Disabled                                     | boolean         | —                                                                                                                        | false         |
| size            | Size of the input box                        | string          | medium / small / mini                                                                                                    | —             |
| prefix-icon     | Icon at the head of the input box            | string          | —                                                                                                                        | —             |
| suffix-icon     | Icon at the end of the input box             | string          | —                                                                                                                        | —             |
| autocomplete    | Native attribute, auto-complete              | string          | on, off                                                                                                                  | off           |
| name            | Native attribute                             | string          | —                                                                                                                        | —             |
| readonly        | Native attribute, whether it is read-only    | boolean         | —                                                                                                                        | false         |
| autofocus       | Native attribute, auto-focus                 | boolean         | true, false                                                                                                              | false         |
| label           | The label text associated with the input box | string          | —                                                                                                                        | —             |
| tabindex        | The tabindex of the input box                | string          | -                                                                                                                        | -             |
| status-icon     | Whether to display the validation status     | boolean         | -                                                                                                                        | -             |

### Input Sections

| name    | Description                          |
| ------- | ------------------------------------ |
| prefix  | Content at the head of the input box |
| suffix  | Content at the end of the input box  |
| prepend | Pre-content of the input box         |
| append  | Post-content of the input box        |

### Input Events

| Event Name | Description                                                                     | Callback Parameters |
| ---------- | ------------------------------------------------------------------------------- | ------------------- |
| blur       | Triggered when the Input loses focus                                            | VNode.Event         |
| focus      | Triggered when the Input gains focus                                            | VNode.Event         |
| change     | Triggered only when the input box loses focus or the user presses Enter         | VNode.Event         |
| input      | Triggered when the value of the Input changes                                   | VNode.Event         |
| clear      | Triggered when clicking the clear button generated by the `clearable` attribute | VNode.Event         |

### Input Methods

| Method Name | Description                  | Parameter |
| ----------- | ---------------------------- | --------- |
| focus       | Make the input gain focus    | —         |
| blur        | Make the input lose focus    | —         |
| select      | Select the text in the input | —         |
