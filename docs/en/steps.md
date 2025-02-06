## Steps

A step-by-step navigation bar that guides users to complete tasks according to a process. The steps can be set according to the actual application scenario, and the number of steps should not be less than 2.

### Basic Usage

A simple step bar.

Set the `active` attribute, which accepts a `Number` indicating the index of the step, starting from 0. When a step bar with a fixed width is needed, set the `space` attribute, which accepts a `Number` in units of px. If not set, it will be adaptive. Set the `finishStatus` attribute to change the status of completed steps.

!!!demo1!!!

### Step Bar with Status

Each step shows the status of that step.

You can also use the named slot `title`, and use the `sections` method to replace the attribute settings. There is a list of all `sections name` at the end of this document for reference.

!!!demo2!!!

### Step Bar with Descriptions

Each step has its corresponding step-status description.

!!!demo3!!!

### Centered Step Bar

Both the title and description will be centered.

Set the `active` attribute, which accepts a `Number` indicating the index of the step, starting from 0. When a step bar with a fixed width is needed, set the `space` attribute, which accepts a `Number` in units of px. If not set, it will be adaptive. Set the `finishStatus` attribute to change the status of completed steps.

!!!demo4!!!

### Step Bar with Icons

Various custom icons can be enabled within the step bar.

Set the icon through the `icon` attribute. The types of icons can refer to the documentation of the Icon component. In addition, custom icons can also be used through named `sections`.

!!!demo5!!!

### Vertical Step Bar

A step bar in the vertical direction.

Just set the `direction` attribute to `vertical` in the `jk-steps` element.

!!!demo6!!!

### Simple-style Step Bar

Set `simple` to apply the simple style. Under this condition, `alignCenter`, `description`, `direction`, and `space` will all be invalid.

Set the `active` attribute, which accepts a `Number` indicating the index of the step, starting from 0. When a step bar with a fixed width is needed, set the `space` attribute, which accepts a `Number` in units of px. If not set, it will be adaptive. Set the `finishStatus` attribute to change the status of completed steps.

!!!demo7!!!

### Steps Attributes

| Parameter   | Description                                                                                       | Type            | Optional Values     | Default Value |
| ----------- | ------------------------------------------------------------------------------------------------- | --------------- | ------------------- | ------------- |
| class       | Custom class style                                                                                | string          | -                   | -             |
| space       | The spacing between each step. If not filled, the spacing will be adaptive. Supports percentages. | number / string | —                   | —             |
| direction   | Display direction                                                                                 | string          | vertical/horizontal | horizontal    |
| active      | Set the currently active step                                                                     | number          | —                   | 0             |
| alignCenter | Perform centered alignment                                                                        | boolean         | —                   | false         |
| simple      | Whether to apply the simple style                                                                 | boolean         | —                   | false         |

### Step Attributes

| Parameter   | Description      | Type                                                                                                                 | Optional Values | Default Value |
| ----------- | ---------------- | -------------------------------------------------------------------------------------------------------------------- | --------------- | ------------- |
| title       | Title            | string                                                                                                               | —               | —             |
| description | Descriptive text | string                                                                                                               | -               | -             |
| icon        | Icon             | Pass in the full class name of the icon to customize the icon, and it also supports being written in the Section way | string          | -             |

### Step Sections

| Name        | Description             |
| ----------- | ----------------------- |
| icon        | Custom icon             |
| title       | Custom title            |
| description | Custom descriptive text |
