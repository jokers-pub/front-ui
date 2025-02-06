## Badge

A numeric or status mark that appears next to buttons or icons.

### Basic Usage

Displays the number of new messages.
Define the `value` attribute, which accepts either a `Number` or a `String`.
!!!demo1!!!

### Maximum Value

You can customize the maximum value.
Defined by the `max` attribute, which accepts a `Number`. Note that it only takes effect when `value` is of type `Number`.
!!!demo2!!!

### Custom Content

It can display text content other than numbers.
When `value` is defined as a `String` type, it can be used to display custom text.
!!!demo3!!!

### Red Dot

Marks the content that needs attention in the form of a red dot.
In addition to numbers, set the `is-dot` attribute, which accepts a `Boolean`.
!!!demo4!!!

### Attributes

| Parameter | Description                                                                                                      | Type          | Optional Values                             | Default Value |
| --------- | ---------------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------- | ------------- |
| value     | Display value                                                                                                    | string/number | -                                           | -             |
| max       | Maximum value. If the value exceeds the maximum, it will display '{max}+'. The `value` must be of type `Number`. | number        | -                                           | -             |
| isDot     | Small red dot                                                                                                    | boolean       | -                                           | false         |
| hidden    | Hide the badge                                                                                                   | boolean       | -                                           | false         |
| type      | Type                                                                                                             | string        | primary / success / warning / danger / info | -             |
