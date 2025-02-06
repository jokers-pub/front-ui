## Form

A component used to provide interactive functions such as form data collection, validation, and submission.

### Typical Forms

It includes various form items, such as input boxes, selectors, switches, radio boxes, checkboxes, etc.

!!!demo1!!!

### Inline Forms

Setting the `inline` attribute can turn the form into an inline form. When vertical space is limited and the form is relatively simple, an inline form can be used.

!!!demo2!!!

### Text Alignment

The alignment of the title can be set through the `label-position` attribute. Currently, it supports: `top`, `left`. When set to `top`, the title will be placed at the top of the form item.

!!!demo3!!!

### Form Validation

The Form component provides a form validation function. It has basic validation methods internally, and validation rules can be configured by adding `validate`.

!!!demo4!!!

> Configuring `required` in `form-item` is only used to determine whether to display an **asterisk** and does not perform any validation operations itself.

### Built-in Rules

Common validation rules are provided internally, and `validate` is used for configuration.

| Rule                                  | Description                           | Value Description                                                                                                                             |
| ------------------------------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `Global.isRequired(msg)`              | Non-empty validation                  | Error information can be configured through this attribute. If not set, the error will be prompted according to `placeholder`.                |
| `Global.isInt(msg)`                   | Positive integer validation           | Error prompt                                                                                                                                  |
| `Global.isNumber(msg)`                | Numeric validation                    | Error prompt                                                                                                                                  |
| `Global.isPhone(msg)`                 | Mobile phone number format validation | Error prompt                                                                                                                                  |
| `Global.isEmail(msg)`                 | Email format validation               | Error prompt                                                                                                                                  |
| `Global.isMatched(regex,msg)`         | Custom regular expression validation  | {pattern:string,msg:string}, where `pattern` is a required item used to configure the regular expression rule, and `msg` is the error prompt. |
| `Global.isLengthInRange(min,max,msg)` | Length validation                     | `（Minimum value, maximum value, error message）`: The maximum and minimum values can be set in the form of an array.                         |

!!!demo5!!!

Custom validation rules can be registered through `Global method registration`. Here is the code of a built-in check method for reference.

```ts
registerGlobalFunction({
    isPhone: (message?: string) => {
        return (value: any) => {
            if (!value) return;
            if (value.length !== 11) {
                return message || "Please enter an 11-digit mobile phone number";
            }

            if (/^1[3456789]\d{9}$/.test(value) === false) {
                return message || "The mobile phone number format is incorrect. Please re-enter.";
            }
        };
    }
});
```

```html
<input validate="@Global.isPhone()" />
```

The validation rules are in order:

1. `control.beforeValidate()`
2. `control.ctrlValidate`
3. `control.props.validate(Custom validation)` Supports arrays for multiple combined validations

### Custom Validation

Custom validation rules can be configured by setting the `validate` parameter of the component. If the validation fails, return the prompt message. If the return value is empty, it means the validation is successful. This method supports asynchronous validation.

!!!demo6!!!

> The `status-icon` attribute can be used to display the verification process status in the `input` component.

### Size

The size of the overall form control can be set by configuring the `size` attribute in `form`. If the component already has a private `size` configured, it cannot be overridden.

!!!demo7!!!

### Submission

The form submission can be achieved by calling the `submit` event in the form. It should be noted that the submission process only includes form validation and form value acquisition. If the validation is successful, the `submit` event will be used to notify the caller and return the form data together.

!!!demo8!!!

> During the internal processing of the submit event, the form will set the initiating button (which needs to be a jk-button) to loading during the asynchronous validation process. After the asynchronous validation is successful, the loading is removed and transferred to the submit event for self-handling. Therefore, the caller needs to control the loading during the `submission` process by themselves, and there is no need to care about the loading during the validation.

### Expansion of Form Controls

If you want to add form controls that can be recognized by the `Form` form, the following conditions need to be met:

1. When creating, the `registerFormCtrl(this)` method needs to be called to register the form control.
2. The `value` attribute needs to be configured in the model.
3. `props.name` needs to be passed in (depending on the usage scenario).
4. The current control is rendered in the jk-form component (depending on the usage scenario).

The following are functional expansions (not mandatory constraints):

1. Trigger the `this.$trigger("validate")` form validation event at an appropriate time, usually when the content value changes (not mandatory).
2. If the `ctrlValidate` method exists in the component, it will execute its own built-in validation when the form performs this item of validation.
3. If the `beforeValidate` method exists in the component, some pre-data preparation work will be executed before the form performs this item of validation.

### Form Attributes

| Parameter         | Description                                                                                                            | Type     | Optional Values       | Default Value |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------- | -------- | --------------------- | ------------- |
| class             | Custom class style                                                                                                     | string   | -                     | -             |
| inline            | Inline form mode                                                                                                       | boolean  | —                     | false         |
| label-position    | The position of the form label. If the value is left or right, `label-width` needs to be set.                          | string   | right/left/top        | right         |
| label-width       | The width of the form label, for example, '50px'. Form-items that are direct children of Form will inherit this value. | string   | —                     | 80px          |
| size              | Used to control the size of components within this form                                                                | string   | medium / small / mini | —             |
| showErrorMessage  | Custom error message display                                                                                           | Function | -                     | -             |
| clearErrorMessage | Custom clear error message                                                                                             | Function | -                     | -             |

### Form Methods

| Method Name | Description                                                                                                                                                               | Parameter                                                                                                                                                                                            |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| validate    | A method to validate the entire form. The parameter is a callback function. The callback function will be called after the validation is completed and returns a promise. | Function(string /string[]). If no parameter is passed, the entire form control will be validated. You can pass in name (string / string[]) to validate the value of the specified control.           |
| reset       | Reset the entire form, reset all field values to their initial values and remove the validation results.                                                                  | —                                                                                                                                                                                                    |
| getData     | Get the current form data. Note that **the data obtained has not passed form validation**.                                                                                | Function(string / string[]). If no parameter is passed, the values of the entire form control will be obtained. You can pass in name (string / string[]) to get the values of the specified control. |
| submit      | Trigger the form submission operation.                                                                                                                                    | -                                                                                                                                                                                                    |

### Form Events

| Event Name    | Description                           | Parameter |
| ------------- | ------------------------------------- | --------- |
| before-submit | Triggered before form submission      | -         |
| submit        | Trigger the form submission operation | Form data |

### Form-Item Attributes

| Parameter   | Description                                                                                                                                 | Type    | Optional Values | Default Value |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------- | --------------- | ------------- |
| class       | Custom class style                                                                                                                          | string  | -               | -             |
| label       | Label text                                                                                                                                  | string  | —               | —             |
| label-width | The width of the form field label, for example, '50px'.                                                                                     | string  | —               | 80px          |
| required    | Whether it is required (used to control whether to display an **asterisk** and does not participate in the formulation of validation rules) | boolean | —               | false         |
| inline      | Whether to use an inline layout                                                                                                             | boolean | —               | false         |

### Form-Item Sections

| name  | Description                       |
| ----- | --------------------------------- |
| —     | The content of Form Item          |
| label | The content of the label text     |
| error | The content of validation failure |
