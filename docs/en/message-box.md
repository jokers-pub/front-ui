## MessageBox Popup

A modal dialog component that simulates system message prompts, used for displaying messages, confirmations, and submission forms.

> In terms of scenarios, MessageBox enhances the native `alert`, `confirm`, and `prompt` dialogs, making it suitable for relatively simple content. For more complex content, use the Dialog component instead.

### Message Alert

Triggered when a user performs an operation, this dialog interrupts the user's workflow until they acknowledge the message.

Invoke the `MessageBox.alert` method to display a message prompt, which simulates the system's `alert` and cannot be closed by pressing ESC or clicking outside the box. This example accepts two parameters: `message` and `title`.

!!!demo1!!!

### Confirmation Dialog  

Used to prompt users to confirm an action and verify whether they intend to proceed.

Invoke the `MessageBox.confirm` method to open the confirmation dialog, which simulates the system's `confirm`. The MessageBox component offers high customizability—we can pass `options` as a third parameter, which is a literal object. The `type` field specifies the message type, which can be `success`, `error`, `info`, or `warning`. Invalid settings are ignored. Note that the second parameter, `title`, must be defined as a `String` type; if it is an `Object`, it will be interpreted as `options`.

!!!demo2!!!

### Submission Prompt

Triggered when a user performs an operation, this dialog interrupts the workflow to prompt the user for input.

Invoke the `MessageBox.prompt` method to open the input prompt, which simulates the system's `prompt`. The `validate` function can define validation rules, returning either a `String` or `Boolean`. A returned string acts as an error message, while `false` triggers the default error prompt. For precise interaction, it's recommended to return a `String` error message. Additionally, the `inputPlaceholder` field can define the input placeholder text.

The `beforeClose` callback allows custom operations, such as data submission, leaving the decision to close the window to the caller.

!!!demo3!!!

### Using HTML Fragments  

The `message` property supports injecting HTML snippets. When the `useHtml` property is set to `true`, `message` is processed as an HTML fragment.

:::warning  
Although the `message` property supports HTML fragments, dynamically rendering arbitrary HTML on a website is highly dangerous, as it can lead to [XSS attacks](https://en.wikipedia.org/wiki/Cross-site_scripting). When `useHtml` is enabled, ensure the `message` content is trusted—**never** assign user-submitted content to the `message` property.  
:::  

!!!demo4!!!

### Queue Display  

The presentation logic of `MessageBox` follows the same queue-based "first in, first out" pattern as browser-native message prompts. If necessary, the `MessageBox.closeAll` method can be used to close all dialogs and clear the queue.

!!!demo5!!!

### Differentiating Cancel and Close  

In some scenarios, clicking the cancel button and closing the dialog (via the close button, mask layer, or pressing ESC) may have different meanings. By default, both actions resolve the Promise's `reject` callback or `callback` with the parameter `'cancel'`. If `distinguishCancelAndClose` is set to `true`, the respective callback parameters will be `'cancel'` and `'close'`.  

!!!demo6!!!  

### Centered Layout  

Content can be center-aligned by setting `center` to `true`.  

!!!demo7!!!  

### Import Method  

Import `MessageBox`:  

```javascript
import { MessageBox } from "@joker.front/ui";
```

The corresponding global method calls are: MessageBox, MessageBox.alert, MessageBox.confirm, and MessageBox.prompt, with the same parameters as the global methods.  

### Options  

| Parameter                  | Description                                                                                                                         | Type                                                                                                                                                                                                                                                    | Accepted Values                  | Default Value                                  |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------------------------------------------- |
| title                      | MessageBox title                                                                                                                    | string                                                                                                                                                                                                                                                  | —                                | Prompt                                        |
| message                    | MessageBox content                                                                                                                  | string                                                                                                                                                                                                                                                  | —                                | —                                              |
| useHtml                    | Whether `message` is treated as an HTML fragment                                                                                    | boolean                                                                                                                                                                                                                                                 | —                                | false                                         |
| type                       | Message type, for icon display                                                                                                      | string                                                                                                                                                                                                                                                  | success / info / warning / error | —                                              |
| iconClass                  | Custom icon class name (overrides `type`)                                                                                           | string                                                                                                                                                                                                                                                  | —                                | —                                              |
| customClass                | Custom CSS class for MessageBox                                                                                                     | string                                                                                                                                                                                                                                                  | —                                | —                                              |
| callback                   | Fallback callback when Promises are not used                                                                                        | function(action, instance). `action` can be 'confirm', 'cancel', or 'close'; `instance` is the MessageBox instance, providing access to its properties/methods                                                                                          | —                                | —                                              |
| closable                   | Whether to show the close button in the top-right corner                                                                            | boolean                                                                                                                                                                                                                                                 | —                                | true                                          |
| beforeClose                | Callback before MessageBox closes (pauses closing)                                                                                  | function(action, instance, close). `action` as above; `instance` for properties/methods; `close` to manually close the dialog; `inputValue` can be accessed via `instance.inputValue`                                                                    | —                                | —                                              |
| distinguishCancelAndClose  | Whether to differentiate between cancel (button click) and close (mask/ESC)                                                         | boolean                                                                                                                                                                                                                                                 | —                                | false                                         |
| showCancelButton           | Whether to display the cancel button                                                                                                | boolean                                                                                                                                                                                                                                                 | —                                | false (true for `confirm` and `prompt` calls) |
| showConfirmButton          | Whether to display the confirm button                                                                                               | boolean                                                                                                                                                                                                                                                 | —                                | true                                          |
| cancelButtonText           | Cancel button text                                                                                                                  | string                                                                                                                                                                                                                                                  | —                                | Cancel                                        |
| confirmButtonText          | Confirm button text                                                                                                                 | string                                                                                                                                                                                                                                                  | —                                | Confirm                                       |
| closeOnClickModal          | Whether clicking the mask closes MessageBox                                                                                         | boolean                                                                                                                                                                                                                                                 | —                                | true (false for `alert` calls)                |
| closeOnPressEscape         | Whether pressing ESC closes MessageBox                                                                                              | boolean                                                                                                                                                                                                                                                 | —                                | true (false for `alert` calls)                |
| showInput                  | Whether to show an input field                                                                                                      | boolean                                                                                                                                                                                                                                                 | —                                | false (true for `prompt` calls)               |
| inputPlaceholder           | Input field placeholder                                                                                                             | string                                                                                                                                                                                                                                                  | —                                | —                                              |
| validate                   | Input validation function. Returns `boolean` or `string` (error message). Takes the current input value as an argument.            | function                                                                                                                                                                                                                                                | —                                | —                                              |
| center                     | Whether to center-align content                                                                                                     | boolean                                                                                                                                                                                                                                                 | —                                | false                                         |
| roundButton                | Whether to use rounded buttons                                                                                                      | boolean                                                                                                                                                                                                                                                 | —                                | false                                         |
| id                         | If configured, only one instance with this ID can appear in the queue at a time                                                    | string                                                                                                                                                                                                                                                  | —                                | -                                             |

### Methods  

| Method Name   | Description                       | Parameters           |
| ------------- | --------------------------------- | -------------------- |
| close         | Closes the current MessageBox     | —                    |
| setErrorMsg   | Manually sets an error message    | errMsg: string       |