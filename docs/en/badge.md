## Badge  

A numeric or status indicator displayed next to buttons or icons.

### Basic Usage  

Displays the count of new messages.  

Define the `value` property, which accepts a `Number` or `String`.  

!!!demo1!!!  

### Maximum Value  

Allows customization of the maximum value.  

The `max` property defines the maximum value, accepting a `Number`. Note that it only takes effect when `value` is of type `Number`.  

!!!demo2!!!  

### Custom Content  

Supports displaying non-numeric text content.  

When `value` is defined as a `String`, it can be used to display custom text.  

!!!demo3!!!  

### Red Dot  

Displays a small red dot to highlight content requiring attention.  

In addition to numeric values, set the `is-dot` property, which accepts a `Boolean`.  

!!!demo4!!!  

### Attributes  

| Attribute | Description                                                  | Type           | Accepted Values                           | Default |  
|-----------|--------------------------------------------------------------|----------------|------------------------------------------|---------|  
| value     | Displayed value                                              | string/number  | -                                        | -       |  
| max       | Maximum value. Exceeding this displays `{max}+`. Requires `value` to be a `Number` | number         | -                                        | -       |  
| isDot     | Displays a small dot                                         | boolean        | -                                        | false   |  
| hidden    | Hides the badge                                              | boolean        | -                                        | false   |  
| type      | Badge type                                                  | string         | primary / success / warning / danger / info | -       |