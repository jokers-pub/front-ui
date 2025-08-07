## Drawer  

The Drawer component provides an API nearly identical to `Dialog`, but delivers a distinct UI experience.  

### Basic Usage  

Displays a sidebar that can slide in from multiple directions.  

!!!demo1!!!  

### Multi-level Nesting  

Supports multi-level nesting. The component automatically manages `z-index`.  

!!!demo2!!!  

### Attributes  

| Parameter  | Description       | Type     | Options                     | Default |  
| ---------- | ----------------- | -------- | --------------------------- | ------- |  
| direction  | Expansion direction | string   | left/top/right/bottom       | right   |  
| size       | Expansion size    | string   | -                           | 30%    |  
| title      | Title            | string   | -                           | -      |  

### Slots  

| Name      | Description       |  
| --------- | ----------------- |  
| default   | Content area      |  
| title     | Title area        |  

### Methods  

| Method  | Description   | Parameters | Returns |  
| ------- | ------------- | ---------- | ------- |  
| open    | Open the drawer | -          | -       |  
| close   | Close the drawer | -          | -       |  

### Events  

| Event    | Description   | Parameters |  
| -------- | ------------- | ---------- |  
| open     | Emitted when opened | -          |  
| close    | Emitted when closed | -          |  

Note: The translation maintains all the original structure, including marks like "!!!demo1!!!" for placeholder content, while ensuring technical accuracy and readability in English.