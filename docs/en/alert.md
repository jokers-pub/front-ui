## Alert Warning

Used to display important alert messages on the page.  

### Basic Usage  

Non-floating elements on the page that will not disappear automatically.  

The Alert component provides four themes specified by the `type` property, with the default value being `info`.  

!!! demo1 !!!  

### Themes  

The Alert component offers two different themes: `light` and `dark`.  

Use the `effect` property to change the theme, with the default being `light`.  

!!! demo2 !!!  

### Custom Close Button  

Customize the close button text or symbol.  

In the Alert component, you can configure whether it can be closed, the text for the close button, and the callback function when closed. The `closable` property determines whether it can be closed, accepting a boolean value (default: `true`). You can set the `closeText` property to replace the default close icon, but note that `closeText` must be a plain string. Use the `close` event to define the callback function upon closing.  

!!! demo3 !!!  

### With Icon  

Enhances readability by indicating certain states.  

Set the `showIcon` property to display an icon in the Alert, which helps users better understand the intent of the message.  

!!! demo4 !!!  

### Centered Text  

Use the `center` property to align text horizontally.  

!!! demo5 !!!  

### With Auxiliary Text  

Includes a title and description for more detailed explanations.  

In addition to the required `title` property, you can use the `description` property to provide supplementary text. Auxiliary text supports single-line content and will wrap automatically.  

!!! demo6 !!!  

### With Icon and Auxiliary Text  

Finally, here's an example featuring both an icon and auxiliary text.  

!!! demo7 !!!  

### Attributes  

| Attribute  | Description | Type | Accepted Values | Default |  
|------------|------------|------|----------------|---------|  
| title | Title | string | - | — |  
| type | Theme | string | success/warning/info/error | info |  
| description | Auxiliary text. Can also be passed via the default slot. | string | — | - |  
| closable | Whether the Alert can be closed | boolean | — | true |  
| center | Whether to center the text | boolean | — | false |  
| closeText | Custom close button text | string | — | - |  
| showIcon | Whether to display an icon | boolean | — | false |  
| icon | Custom icon | string | — | - |  
| effect | Select theme | string | light/dark | light |  
| class | Custom CSS class | string | - | - |  

### Events  

| Event Name | Description | Parameters |  
|------------|------------|------------|  
| close | Triggered when the Alert is closed | - |  

### Slots  

| Name | Description |  
|------|------------|  
| - | Description content |  
| title | Title content |