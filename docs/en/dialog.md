## Dialog

Informs users and hosts relevant operations while maintaining the current page state.

### Basic Usage

The Dialog pops up a dialog box, which is suitable for scenarios that require more customization.
You need to use the component's `open`/`close` methods to set whether the pop-up is displayed. The Dialog consists of two parts: `body` and `footer`. The `footer` requires a `section` named `footer`. The `title` attribute is used to define the title. It is optional, and the default value is empty. Finally, this example also shows the usage of `before-close`.
!!!demo1!!!

> `before-close` only takes effect when the user closes the Dialog by clicking the close icon or the mask.

### Nested Dialogs

If you need to nest one Dialog inside another, you need to set the `append-to` property to `body`.
Normally, we do not recommend using nested Dialogs. If you need to display multiple Dialogs on the page at the same time, you can place them at the same level. For scenarios where nested Dialogs are indeed necessary, we provide the `append-to` property. **Refer to the core's description of append-to**. Set this property of the inner Dialog to `body`, and it will be inserted into the `body` element, ensuring the correct hierarchical relationship between the inner and outer Dialogs and the mask.
!!!demo2!!!

> `append-to` only affects the DOM output interface and does not affect the VNode data structure. It is still created according to the data structure during development and also follows the parent-child component destruction mechanism, so there is no need for excessive intervention.

### Centered Layout

The title and the bottom can be horizontally centered. Setting `center` to `true` will center the title and the bottom. `center` only affects the title and the bottom areas. The content of the Dialog is arbitrary, and in some cases, the content is not suitable for a centered layout. If you need the content to be horizontally centered as well, please add CSS to it yourself.
!!!demo3!!!

> The content of the Dialog is lazily rendered. That is, before it is opened for the first time, the default `section` passed in will not be rendered to the DOM. Therefore, if you need to perform DOM operations or obtain the corresponding component through `ref`, please do so in the `open` event callback.

### Movable Window

We can enable the `draggable` property of the window component to activate the free movement function of the window.

!!!demo4!!!

### Attributes

| Parameter             | Description                                                                                        | Type                                                   | Optional Values | Default Value |
| --------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | --------------- | ------------- |
| title                 | The title of the Dialog, which can also be passed in through a named section (see the table below) | string                                                 | —               | —             |
| width                 | The width of the Dialog                                                                            | string                                                 | —               | 50%           |
| fullscreen            | Whether it is a full-screen Dialog                                                                 | boolean                                                | —               | false         |
| modal                 | Whether a mask layer is needed                                                                     | boolean                                                | —               | true          |
| custom-class          | The custom class name of the Dialog                                                                | string                                                 | —               | —             |
| close-on-click-modal  | Whether the Dialog can be closed by clicking the modal                                             | boolean                                                | —               | false         |
| close-on-press-escape | Whether the Dialog can be closed by pressing the ESC key                                           | boolean                                                | —               | true          |
| closable              | Whether to display the close button                                                                | boolean                                                | —               | true          |
| before-close          | The callback before closing, which will pause the closing of the Dialog                            | function(done), where done is used to close the Dialog | —               | —             |
| center                | Whether to use a centered layout for the header and the bottom                                     | boolean                                                | —               | false         |
| destroyOnClose        | Whether to destroy the interior when closing                                                       | boolean                                                | —               | true          |
| draggable             | Whether to enable drag-and-drop movement                                                           | boolean                                                | —               | false         |
| allowOutOfBounds      | Whether dragging is allowed to move beyond the boundary range                                      | boolean                                                | —               | false         |

### Sections

| name    | Description                                     |
| ------- | ----------------------------------------------- |
| default | The content of the Dialog                       |
| title   | The content of the Dialog title area            |
| footer  | The content of the Dialog button operation area |

### Methods

| Method Name | Description      | Method Parameter |
| ----------- | ---------------- | ---------------- |
| open        | Open the window  | —                |
| close       | Close the window | —                |

### Events

| Event Name | Description                                         | Callback Parameter |
| ---------- | --------------------------------------------------- | ------------------ |
| open       | The callback when the Dialog is opened              | —                  |
| opened     | The callback when the Dialog opening animation ends | —                  |
| close      | The callback when the Dialog is closed              | —                  |
| closed     | The callback when the Dialog closing animation ends | —                  |
