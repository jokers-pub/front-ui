## Skeleton Screen  

Display skeleton placeholders during content loading for better visual experience than traditional loading indicators in certain scenarios.  

### Basic Usage  

Basic skeleton screen effect.  

!!! demo1 !!!  

### Additional Parameters  

Configure the number of skeleton paragraphs to better simulate the actual rendering effect. The first line will render a paragraph header with 33% width.  

!!! demo2 !!!  

### Animation Effect  

Enable animated loading effect.  

!!! demo3 !!!  

### Custom Styles  

The layout patterns provided by Joker-UI may not always meet requirements. You can define custom templates by using named slots.  

We provide different template units for use—refer to the API documentation for available options. When designing templates, aim to closely match the actual DOM structure to prevent layout shifts caused by height discrepancies.  

!!! demo4 !!!  

### Loading State  

After loading completes, the actual UI typically needs to be displayed. Control the rendering of the real DOM using the `loading` property, and use named slots to define the UI to be shown post-loading.  

!!! demo5 !!!  

### Rendering Multiple Items  

Skeleton screens are commonly used to render lists while waiting for server data. The `count` property determines how many placeholder items are displayed.  

**Note:** Keep the `count` value as low as possible. Even placeholder UI elements can impact performance if excessive, and a higher count may prolong teardown time.  

!!! demo6 !!!  

### Preventing Rendering Flicker  

If API responses are extremely fast, the skeleton placeholder may briefly appear before real data loads, causing a flicker effect. Use the `throttle` property to mitigate this issue.  

!!! demo7 !!!  

### Skeleton Attributes  

| Parameter  | Description                                        | Type      | Options         | Default |  
|------------|----------------------------------------------------|-----------|-----------------|---------|  
| class      | Custom CSS class                                   | string    | —               | —       |  
| animated   | Whether to enable animation                       | boolean   | true / false    | false   |  
| count      | Number of template instances to render (keep low) | number    | integer         | 1       |  
| loading    | Whether to display skeleton placeholders         | boolean   | true / false    | true    |  
| rows       | Number of skeleton paragraphs                    | number    | positive integer| 4       |  
| throttle   | Delay (ms) before rendering placeholder DOM      | number    | positive integer| 0       |  
| style      | Inline CSS styles                                | string    | —               | —       |  

### SkeletonItem Attributes  

| Parameter  | Description                      | Type            | Options                                                       | Default |  
|------------|----------------------------------|-----------------|---------------------------------------------------------------|---------|  
| variant    | Placeholder element style       | Enum (string)   | p / h1 / h3 / text / caption / button / image / circle / rect | text    |  
| style      | Inline CSS styles               | string          | —                                                             | —       |  
| class      | Custom CSS class                | string          | —                                                             | —       |  

### Skeleton Slots  

| Name       | Description                     |  
|------------|---------------------------------|  
| default    | Displays actual UI content      |  
| template   | Displays custom placeholder UI |