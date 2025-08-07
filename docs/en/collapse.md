## Collapse Panel  

Expand/Collapse content display  

### Basic Usage  

Basic collapse panel implementation.  

!!!demo1!!!  

### Accordion Mode  

!!!demo2!!!  

### Custom Title  

!!!demo3!!!  

### Attributes  

| Parameter | Description | Type | Accepted Values | Default |  
|----------|-----------------------------------------------------|----------------|-------------------------------------|---------|  
| value | Currently active panel (string in accordion mode, otherwise Array) | string / Array | - | - |  
| accordion | Whether to enable accordion mode | boolean | - | false |  

### Events  

| Event Name | Description | Callback Parameters |  
|-----------|-----------------------------------------------------|----------------|  
| change | Triggered when the active panel changes (Returns active panel's name as string in accordion mode, otherwise Array) | Active panel's name value |  

### Item Attributes  

| Parameter | Description | Type | Accepted Values | Default |  
|----------|-----------------------------------------------------|----------------|-------------------------------------|---------|  
| name | Unique identifier | string | - | - |  
| title | Panel title | string | - | - |  
| disabled | Whether to disable | boolean | - | false |