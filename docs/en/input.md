## Input Component

Accepts text input via mouse or keyboard

### Basic Usage

!!!demo1!!!

### Disabled State

Disable the input component using the `disabled` property

!!!demo2!!!

### Clearable 

Use the `clearable` property to create an input with clear functionality

!!!demo3!!!

### Input with Icons

Input with icon indicators  

Display icons at the beginning or end of input using the `prefix-icon` and `suffix-icon` properties. Icons can also be placed via the `section` slot.

!!!demo4!!!

### Composite Input  

Add prefix or suffix elements, typically labels or buttons  

Use the `section` slot to prepend or append content to the input.  

!!!demo5!!!

### Sizes

Set input size via the `size` property. Options include medium, small and mini in addition to the default size.

!!!demo6!!!

### Input Length Limits

`maxlength` and `minlength` are native attributes that limit input length, where length is calculated via JavaScript string length counting. For text/textarea inputs, enable the word count display using `show-word-limit` when restricting max length with `maxlength`.

!!!demo7!!!

### Input Attributes  

| Parameter | Description | Type | Options | Default |  
|-----------|-------------|------|---------|---------|
| type | Input type | string | text, [native input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | text |
| value | Binding value | string/number | — | — |
| class | Custom CSS class | string | - | - |  
| maxlength | Native attribute, max input length | number | — | — |  
| minlength | Native attribute, min input length | number | — | — |  
| show-word-limit | Show word count | boolean | — | false |  
| placeholder | Input placeholder | string | — | — |  
| clearable | Clearable | boolean | — | false |  
| disabled | Disabled | boolean | — | false |  
| size | Input size | string | medium/small/mini | — |  
| prefix-icon | Prefix icon | string | — | — |  
| suffix-icon | Suffix icon | string | — | — |  
| autocomplete | Native autocomplete | string | on/off | off |  
| name | Native name | string | — | — |  
| readonly | Readonly | boolean | — | false |  
| autofocus | Autofocus | boolean | true/false | false |  
| label | Associated label text | string | — | — |  
| tabindex | Tab index | string | - | - |  
| status-icon | Show validation icon | boolean | - | - |  

### Input Slots  

| Name | Description |  
|-------|-------------|  
| prefix | Content prepended to input |  
| suffix | Content appended to input |  
| prepend | Content placed before input |  
| append | Content placed after input |  

### Input Events  

| Event | Description | Parameters |  
|-------|-------------|------------|  
| blur | Triggers when input loses focus | VNode.Event |  
| focus | Triggers when input gets focus | VNode.Event |  
| change | Only triggers when input loses focus or user presses enter | VNode.Event |  
| input | Triggers when input value changes | VNode.Event |  
| clear | Triggers when clear button (via `clearable`) is clicked | VNode.Event |  

### Input Methods  

| Method | Description | Params |  
|--------|-------------|--------|  
| focus | Focus the input | — |  
| blur | Blur the input | — |  
| select | Select input text | — |