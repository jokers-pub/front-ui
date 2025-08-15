## Form

A component for collecting, validating, and submitting form data through interactive elements.

### Basic Form

Includes various form items such as input fields, selectors, switches, radio buttons, checkboxes, etc.

!!!demo1!!!

### Inline Form

Setting the `inline` property allows the form to display as an inline form, which is suitable when vertical space is limited and the form is relatively simple.

!!!demo2!!!

### Label Alignment

The `label-position` property can be used to set label alignment. Currently supported values are `top` and `left`, where `top` will place labels above form items.

!!!demo3!!!

### Form Validation

The Form component provides validation functionality with built-in validation methods. Configure validation rules using the `validate` property.

!!!demo4!!!

> Setting `required` in `form-item` only controls whether to display the **asterisk** indicator and does not perform any validation.

### Built-in Validation Rules

Common validation rules are provided internally and can be configured using `validate`.

| Rule                                  | Description                    | Parameter Details                                                                                         |
| ------------------------------------- | ------------------------------ | --------------------------------------------------------------------------------------------------------- |
| `Global.isRequired(msg)`              | Non-empty validation           | Configure error messages via this property. If not set, the `placeholder` text is used for error prompts. |
| `Global.isInt(msg)`                   | Positive integer validation    | Error message                                                                                             |
| `Global.isNumber(msg)`                | Numeric validation             | Error message                                                                                             |
| `Global.isPhone(msg)`                 | Phone number format validation | Error message                                                                                             |
| `Global.isEmail(msg)`                 | Email format validation        | Error message                                                                                             |
| `Global.isMatched(regex,msg)`         | Custom regex validation        | {pattern:string,msg:string} - `pattern` is mandatory for regex rules, `msg` for error text.               |
| `Global.isLengthInRange(min,max,msg)` | Length validation              | `(min, max, errorMsg)` - Array format for min/max length constraints.                                     |

!!!demo5!!!

Custom validation rules can be registered via `global method registration`. Below is an example of a built-in validation method for reference:

```ts
import { registerValidateAll } from "@joker.front/app-ui";

//Register UI Validate
registerValidateAll();

registerGlobalFunction({
    isPhone: (message?: string) => {
        return (value: any) => {
            if (!value) return;
            if (value.length !== 11) {
                return message || "Please enter an 11-digit phone number";
            }

            if (/^1[3456789]\d{9}$/.test(value) === false) {
                return message || "Invalid phone number format, please re-enter";
            }
        };
    }
});
```

```html
<input validate="@Global.isPhone()" />
```

Validation executes in the following order:

1. `Control.beforeValidate()`
2. `Control.ctrlValidate`
3. `Control.props.validate` (custom validation, supports array-based multi-rule validation)

### Custom Validation

Custom validation rules can be configured via the component's `validate` parameter. Return an error message on failure, or an empty value on success. Supports asynchronous validation.

!!!demo6!!!

> The `status-icon` property can be used in `input` components to display validation status indicators.

### Sizing

Set the size of all form controls using the `size` property in `form`. Note that if a component has its own `size` configured, the form-level setting will be overridden.

!!!demo7!!!

### Submission

Trigger form submission via the form's `submit` event. This process only handles validation and data collection. If validation succeeds, the event notifies the caller with the form data.

!!!demo8!!!

> During submission:
>
> - The form automatically sets the submit button (must be `jk-button`) to `loading` during async validation.
> - Callers must manually handle `loading` during the submission phase (validation-phase loading is handled automatically).

### Extending Form Controls

For custom form controls to work with `Form`, they must:

1. Register via `registerFormCtrl(this)` during creation.
2. Include a `model.value` property.
3. Pass `props.name` (context-dependent).
4. Render within a `jk-form` component (context-dependent).

**Optional Functional Extensions:**

1. Trigger `this.$trigger("validate")` on value changes (recommended but optional).
2. Implement `ctrlValidate` for custom validation logic.
3. Implement `beforeValidate` for pre-validation preparation.

### Form Attributes

| Parameter         | Description                                                          | Type     | Options           | Default |
| ----------------- | -------------------------------------------------------------------- | -------- | ----------------- | ------- |
| class             | Custom CSS class                                                     | string   | -                 | -       |
| inline            | Inline form mode                                                     | boolean  | —                 | false   |
| label-position    | Label alignment. Requires `label-width` if set to left/right.        | string   | right/left/top    | right   |
| label-width       | Label width (e.g., '50px'). Inherited by child `form-item` elements. | string   | —                 | 80px    |
| size              | Controls the size of form components                                 | string   | medium/small/mini | —       |
| showErrorMessage  | Custom error message display                                         | Function | -                 | -       |
| clearErrorMessage | Custom error message clearing                                        | Function | -                 | -       |

### Form Methods

| Method   | Description                                                                  | Parameters                                                                            |
| -------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| validate | Validates the entire form. Takes a callback function that returns a promise. | Function(string / string[]) - Optional: validate specific fields by passing name(s).  |
| reset    | Resets all fields to initial values and clears validation results.           | —                                                                                     |
| getData  | Retrieves form data **without validation**.                                  | Function(string / string[]) - Optionally pass field name(s) to fetch specific values. |
| submit   | Triggers form submission.                                                    | -                                                                                     |

### Form Events

| Event         | Description                 | Parameters |
| ------------- | --------------------------- | ---------- |
| before-submit | Triggered before submission | -          |
| submit        | Triggered on submission     | Form data  |

### Form-Item Attributes

| Parameter   | Description                                                               | Type    | Options | Default |
| ----------- | ------------------------------------------------------------------------- | ------- | ------- | ------- |
| class       | Custom CSS class                                                          | string  | -       | -       |
| label       | Label text                                                                | string  | —       | —       |
| label-width | Label width (e.g., '50px')                                                | string  | —       | 80px    |
| required    | Required field indicator (displays asterisk, does not enforce validation) | boolean | —       | false   |
| inline      | Inline layout                                                             | boolean | —       | false   |

### Form-Item Slots

| Name  | Description               |
| ----- | ------------------------- |
| —     | Default form item content |
| label | Custom label content      |
| error | Validation error content  |
