## Password

Password input box

### Basic Usage

!!!demo1!!!

### Input Box with Icon

Mark the input type with an icon.

You can add an icon to the head of the password component through the `prefix-icon` property.

!!!demo2!!!

### Size

You can specify the size of the input box through the `size` property. Besides the default size, there are also three sizes: medium, small, and mini.

!!!demo3!!!

### Input Length Limit

`maxlength` and `minlength` are native attributes used to limit the character length of the input box.

!!!demo4!!!

### Attributes

| Parameter   | Description                            | Type            | Optional Values       | Default Value |
| ----------- | -------------------------------------- | --------------- | --------------------- | ------------- |
| value       | Bound value                            | string / number | —                     | —             |
| class       | Custom class style                     | string          | -                     | -             |
| name        | Native attribute                       | string          | —                     | —             |
| size        | Size of the input box                  | string          | medium / small / mini | —             |
| maxlength   | Native attribute, maximum input length | number          | —                     | —             |
| minlength   | Native attribute, minimum input length | number          | —                     | —             |
| placeholder | Placeholder text of the input box      | string          | —                     | —             |
| prefix-icon | Icon at the head of the input box      | string          | —                     | —             |
| autofocus   | Native attribute, auto-focus           | boolean         | true, false           | false         |
| tabindex    | The tabindex of the input box          | string          | -                     | -             |
