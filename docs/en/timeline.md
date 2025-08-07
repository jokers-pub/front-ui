## Timeline

Visually displays chronological information flows.

### Basic Usage

The Timeline component can be split into multiple chronological activities using timestamps as key identifiers - this distinguishes it from other components like Steps. Pay attention to differentiate between these use cases.

!!!demo1!!!

### Custom Node Style

Customize node size, color, or directly use icons based on actual scenarios.

!!!demo2!!!

### Custom Timestamp

When content height exceeds normal vertical space, timestamps can be positioned above the content.  

!!!demo3!!!

### Timeline Attributes

| Parameter | Description           | Type   | Options | Default |
|-----------|-----------------------|--------|---------|---------|
| class     | Custom CSS class name | string | -       | -       |

### Timeline-item Attributes  

| Parameter       | Description             | Type    | Options                              | Default |
|-----------------|-------------------------|---------|--------------------------------------|---------|
| timestamp      | Timestamp content       | string  | -                                    | -       |
| hideTimestamp  | Whether to hide timestamp | boolean | -                                    | false   |
| placement      | Timestamp position      | string  | top / bottom                         | bottom  |
| type           | Node type               | string  | primary / success / warning / danger / info | -       |
| color          | Node color              | string  | hsl / hsv / hex / rgb                | -       |
| size           | Node size               | string  | normal / large                       | normal  |
| icon           | Node icon               | string  | -                                    | -       |

### Timeline-Item Slots  

| Slot Name | Description               |
|-----------|---------------------------|  
| default   | Timeline-Item content     |  
| dot       | Custom node               |  

(Note: Maintained original formatting typesetting while optimizing technical terminology and structure for professional readability)