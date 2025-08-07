## Password  

Password input field  

### Basic Usage  

!!!demo1!!!  

### Input with Icon  

Input field with icon indicator  

You can add an icon at the beginning of the Password component using the `prefix-icon` property.  

!!!demo2!!!  

### Sizes  

The size of the input field can be specified using the `size` property. In addition to the default size, medium, small, and mini sizes are also available.  

!!!demo3!!!  

### Input Length Limit  

`maxlength` and `minlength` are native attributes used to restrict the number of characters in the input field.  

!!!demo4!!!  

### Attributes  

| Attribute     | Description                  | Type            | Options               | Default |  
| ------------ | ---------------------------- | --------------- | --------------------- | ------- |  
| value        | Bound value                  | string / number | —                     | —       |  
| class        | Custom CSS class             | string          | -                     | -       |  
| name         | Native attribute             | string          | —                     | —       |  
| size         | Input field size             | string          | medium / small / mini | —       |  
| maxlength    | Native attribute, max input length | number          | —                     | —       |  
| minlength    | Native attribute, min input length | number          | —                     | —       |  
| placeholder  | Input field placeholder text | string          | —                     | —       |  
| prefix-icon1 | Icon at the beginning of the input field | string          | —                     | —       |  
| autofocus1   | Native attribute, auto-focus | boolean         | true, false           | false   |  
| tabindex     | Input field tabindex         | string          | -                     | -       |