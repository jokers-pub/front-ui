## Scrollbar 

Used to replace native browser scrollbars.

### Basic Usage 

Define scrollbar height by setting the `height` property. If not set, it will adapt based on the parent container height.

!!!demo1!!!

### Horizontal Scrolling 

!!!demo2!!!

### Setting Maximum Size 

Control scrollbar trigger timing by setting parent container boundary values such as `max-width` and `max-height`.

!!!demo3!!!

### Manual Scrolling 

Use the scrollTo method to manually control the scrollbar position.

!!!demo4!!!

### Attributes 

| Parameter | Description | Type | Optional Values | Default |
|-----------|-------------|------|----------------|---------|
| native | Whether to use native interaction | boolean | — | false |
| wrapClass | Wrap element style extension | string | — | - |
| viewClass | View element style extension | string | — | - |
| class | Root style extension | string | — | - |
| noresize | Do not respond to container size changes (improves performance if container size is static) | boolean | — | false |
| tag | Output element tag | string | — | div |
| height | Custom height (defaults to parent container value if not set) | string | — | - |
| width | Custom width (defaults to parent container value if not set) | string | — | - |  
| max-height | Custom max height (defaults to parent container value if not set) | string | — | - |
| max-width | Custom max width (defaults to parent container value if not set) | string | — | - |

### Sections 

| Section Name | Description | Parameters |
|--------------|-------------|------------|
| default | Default content | - |

### Methods 

| Method Name | Description | Parameters |
|-------------|-------------|------------|
| scrollTo | Scroll to position | See `ScrollToOptions` for parameters |
| scrollToEl | Scroll to designated element position | HTMLElement |
| update | Recalculate scrollbars (call when internal elements are added/removed) | Execute callback after calculation |

### Events 

| Event Name | Description | Callback Parameters |
|------------|-------------|----------------------|
| scroll | Triggered when scroll position changes | {top:number,left:number,x:number,y:number,isUserScroll?:boolean} where x,y represent scrollbar progress by direction |