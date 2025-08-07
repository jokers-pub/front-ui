## Dialog  

Displays a dialog window while preserving current page state to present information and handle related operations.

### Basic Usage  

The Dialog component creates a customizable pop-up dialog for scenarios requiring higher flexibility.  

Control the dialog's visibility using the `open`/`close` component methods. A Dialog consists of two sections: `body` and `footer`, where the footer must be a named `section` with the slot name `footer`. The `title` property defines an optional header title (default: empty). This example also demonstrates the usage of `before-close`.  

!!!demo1!!!  

> `before-close` only takes effect when the user closes the Dialog by clicking the close icon or the modal backdrop.  

### Nested Dialog  

To nest a Dialog inside another Dialog, set the `append-to` property to `body`.  

Nested Dialogs are generally discouraged. If multiple Dialogs must coexist, keep them at the same hierarchy level. For unavoidable nesting, the `append-to` property ensures proper layering by appending the inner Dialog to the `<body>` element. **Refer to core documentation for details on `append-to`**.  

!!!demo2!!!  

> Note: `append-to` only affects DOM output structure, not the VNode hierarchy. The component still follows the development-time parent-child lifecycle and destruction mechanisms without requiring manual intervention.  

### Centered Layout  

Enable horizontal centering for the header and footer by setting `center` to `true`. Note: `center` only applies to these sections. Dialog content can be freely structured; for centering content, apply custom CSS as needed.  

!!!demo3!!!  

> Dialog content is lazily rendered—default slots are not mounted to the DOM until the first opening. For DOM operations or `ref` access, perform them in the `open` event callback.  

### Draggable Dialog  

Enable free dragging by setting the `draggable` property.  

!!!demo4!!!  

### Attributes  

| Parameter               | Description                                                                 | Type                      | Options | Default   |  
|-------------------------|-----------------------------------------------------------------------------|---------------------------|---------|-----------|  
| title                   | Dialog title (can also be set via named slot, see below)                   | string                    | —       | —         |  
| width                   | Dialog width                                                               | string                    | —       | 50%       |  
| fullscreen              | Whether the Dialog is fullscreen                                           | boolean                   | —       | false     |  
| modal                   | Whether a modal backdrop is shown                                          | boolean                   | —       | true      |  
| custom-class            | Custom CSS class for Dialog                                                | string                    | —       | —         |  
| close-on-click-modal    | Whether clicking the backdrop closes the Dialog                            | boolean                   | —       | false     |  
| close-on-press-escape   | Whether pressing ESC closes the Dialog                                     | boolean                   | —       | true      |  
| closable                | Whether to show the close button                                           | boolean                   | —       | true      |  
| before-close            | Callback before closing (halts closing until `done` is called)             | function(done)            | —       | —         |  
| center                  | Whether to center header and footer                                        | boolean                   | —       | false     |  
| destroyOnClose          | Whether to destroy inner content on close                                  | boolean                   | —       | true      |  
| draggable               | Whether dragging is enabled                                                | boolean                   | —       | false     |  
| allowOutOfBounds        | Whether dragging outside viewport is allowed                               | boolean                   | —       | false     |  

### Slots  

| Name     | Description                      |  
|----------|----------------------------------|  
| default  | Main content of the Dialog       |  
| title    | Content for the title section    |  
| footer   | Content for the action buttons   |  

### Methods  

| Method  | Description          | Parameters |  
|---------|----------------------|------------|  
| open    | Opens the Dialog     | —          |  
| close   | Closes the Dialog    | —          |  

### Events  

| Event   | Description                          | Parameters |  
|---------|--------------------------------------|------------|  
| open    | Triggered when Dialog opens          | —          |  
| opened  | Triggered after opening animation    | —          |  
| close   | Triggered when Dialog closes         | —          |  
| closed  | Triggered after closing animation    | —          |