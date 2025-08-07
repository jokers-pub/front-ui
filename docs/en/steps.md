## Steps  

A step navigation bar that guides users through a process to complete tasks. The number of steps can be configured based on actual application scenarios, with a minimum of 2 steps required.  

### Basic Usage  

Simple step bar.  

Set the `active` property, which accepts a `Number` indicating the step's index, starting from 0. For fixed-width step bars, the `space` property can be set, which accepts a `Number` (unit: px). If not set, it will be adaptive. The `finishStatus` property can be used to modify the status of completed steps.  

!!!demo1!!!  

### Steps with Status  

Each step displays its current status.  

You can also use named slots (sections) to replace property settings. All available slot names are listed at the end of this documentation.  

!!!demo2!!!  

### Steps with Descriptions  

Each step has a corresponding status description.  

!!!demo3!!!  

### Centered Steps  

Both the title and description will be centered.  

Set the `active` property, which accepts a `Number` indicating the step's index, starting from 0. For fixed-width step bars, the `space` property can be set, which accepts a `Number` (unit: px). If not set, it will be adaptive. The `finishStatus` property can be used to modify the status of completed steps.  

!!!demo4!!!  

### Steps with Icons  

Custom icons can be enabled within steps.  

Use the `icon` property to set the icon. For icon types, refer to the Icon component documentation. Additionally, custom icons can be used via named slots.  

!!!demo5!!!  

### Vertical Steps  

Steps displayed vertically.  

Simply set the `direction` property of the `jk-steps` element to `vertical`.  

!!!demo6!!!  

### Simple-Style Steps  

Set the `simple` property to apply a minimalist style. In this case, `alignCenter`, `description`, `direction`, and `space` properties become ineffective.  

Set the `active` property, which accepts a `Number` indicating the step's index, starting from 0. For fixed-width step bars, the `space` property can be set, which accepts a `Number` (unit: px). If not set, it will be adaptive. The `finishStatus` property can be used to modify the status of completed steps.  

!!!demo7!!!  

### Steps Attributes  

| Parameter     | Description                                                  | Type             | Optional Values         | Default      |  
| ------------- | ------------------------------------------------------------ | ---------------- | ----------------------- | ------------ |  
| class         | Custom CSS class                                             | string           | -                       | -            |  
| space         | Spacing between steps (supports percentage). If not specified, it auto-adapts. | number / string  | —                       | —            |  
| direction     | Display direction                                             | string           | vertical / horizontal   | horizontal   |  
| active        | Sets the currently active step                               | number           | —                       | 0            |  
| alignCenter   | Aligns steps to center                                       | boolean          | —                       | false        |  
| simple        | Whether to apply simple style                                | boolean          | —                       | false        |  

### Step Attributes  

| Parameter     | Description                | Type                                                      | Optional Values | Default |  
| ------------- | -------------------------- | --------------------------------------------------------- | --------------- | ------- |  
| title         | Step title                 | string                                                    | —               | —       |  
| description   | Descriptive text           | string                                                    | -               | -       |  
| icon          | Icon (supports slot usage) | either icon class name (refer to Icon docs) or slot usage | string          | -       |  

### Step Slots  

| Name          | Description                  |  
| ------------- | ---------------------------- |  
| icon          | Custom icon                  |  
| title         | Custom title                 |  
| description   | Custom descriptive text      |