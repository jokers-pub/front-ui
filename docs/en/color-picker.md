## ColorPicker  

A color picker component that supports multiple color formats.  

### Basic Usage  

Set the default color display using the `value` variable and retrieve the selected color by accessing `value`.  

!!!demo1!!!  

### Alpha Channel Selection  

ColorPicker supports both standard colors and colors with Alpha channel (transparency). Toggle alpha channel selection using the `show-alpha` property.  

!!!demo2!!!  

### Different Sizes  

!!!demo3!!!  

### Read-only/Disabled  

!!!demo4!!!  

### Attributes  

| Attribute  | Description                | Type     | Options                | Default |  
| ---------- | -------------------------- | -------- | ---------------------- | ------- |  
| value      | Binding value              | string   | —                      | —       |  
| disabled   | Whether disabled           | boolean  | —                      | false   |  
| class      | Custom CSS class           | string   | -                      | -       |  
| size       | Size                       | string   | medium / small / mini  | —       |  
| show-alpha | Show alpha channel option  | boolean  | —                      | false   |  
| format     | Color output format        | string   | hex / rgba             | -       |  

### Events  

| Event Name | Description                     | Callback Parameter |  
| ---------- | ------------------------------- | ------------------ |  
| change     | Triggered when value changes    | Current selected value |