## DatePicker  

A component for selecting or inputting dates  

### Date Selection  

Basic date selection control with "day" as the fundamental unit  

The basic unit is specified by the `type` property. Quick options can be configured via `shortcuts`. Disabled dates are set using `disabledDate`, which is a function that returns a `boolean` to determine availability.  

!!!demo1!!!  

### Other Date Units  

By extending the basic date picker, week, month, and year selections are supported.  

!!!demo2!!!  

### Date Range Selection  

Conveniently select a date range within a single picker.  

!!!demo3!!!  

### Date Format  

Use `format` to specify the display format in the input box. Use `value-format` to control the bound value format.  

By default, the component accepts and returns `Date` objects. Here are the available format strings (using UTC January 2, 2017, 03:04:05 as an example):  

:::warning  
**Case sensitivity note:** Internally, `dayjs` is used for date operations and formatting. For detailed format values, refer to [dayjs](https://dayjs.fenxianglu.cn/).  
:::  

### Attributes  

| Parameter           | Description                                          | Type                                               | Accepted Values                                                       | Default        |  
| ------------------- | ---------------------------------------------------- | -------------------------------------------------- | --------------------------------------------------------------------- | -------------- |  
| value               | Binding value                                        | string(DatePicker) / Array<string>(DateRangePicker) | —                                                                     | —              |  
| class               | Custom CSS class                                     | string                                             | —                                                                     | —              |  
| readonly            | Fully read-only                                      | boolean                                            | —                                                                     | false          |  
| disabled            | Disabled state                                       | boolean                                            | —                                                                     | false          |  
| editable            | Allow text input in the field                        | boolean                                            | —                                                                     | true           |  
| clearable           | Whether to show the clear button                     | boolean                                            | —                                                                     | true           |  
| size                | Input field size                                     | string                                             | large, small, mini                                                    | —              |  
| placeholder         | Placeholder for non-range selection                  | string                                             | —                                                                     | —              |  
| start-placeholder   | Placeholder for the start date in range selection    | string                                             | —                                                                     | —              |  
| end-placeholder     | Placeholder for the end date in range selection      | string                                             | —                                                                     | —              |  
| type                | Display type                                         | string                                             | `year`/`month`/`date`/`week`/`datetime`/`daterange`/`datetimerange`   | date           |  
| format              | Display format in input box                          | string                                             | Refer to [Date Format](https://dayjs.fenxianglu.cn/)                  | yyyy-MM-dd     |  
| range-separator     | Separator in range selection mode                    | string                                             | —                                                                     | '-'            |  
| default-value       | Optional, default displayed date when opened         | string                                             | Follows `value-format`                                                | —              |  
| value-format        | Optional, bound value format. Defaults to `Date` obj | string                                             | Refer to [Date Format](https://dayjs.fenxianglu.cn/)                  | —              |  
| unlink-panels       | Unlink two date panels in range mode                 | boolean                                            | —                                                                     | false          |  
| prefix-icon         | Custom icon class for the header                     | string                                             | —                                                                     | jk-icon-date   |  

### Picker Options  

| Parameter        | Description                                                                 | Type            | Accepted Values | Default |  
| ---------------- | --------------------------------------------------------------------------- | --------------- | --------------- | ------- |  
| shortcuts        | Quick options configuration (requires `{ text, onClick }` objects). See demo or table below. | Object[]        | —               | —       |  
| disabledDate     | Sets disabled state (receives current date, returns `boolean`)              | Function        | —               | —       |  
| cellClassName   | Sets custom class for date cells                                            | Function(Date)  | —               | —       |  

### Shortcuts  

| Parameter | Description                                                                 | Type       | Accepted Values | Default |  
| --------- | --------------------------------------------------------------------------- | ---------- | --------------- | ------- |  
| text      | Title text                                                                  | string     | —               | —       |  
| onClick   | Receives a callback; executing the callback with a new value applies it     | function   | —               | —       |  

### Events  

| Event Name   | Description                               | Callback Parameters                                      |  
| ------------ | ----------------------------------------- | -------------------------------------------------------- |  
| change       | Triggered when user confirms selection    | Bound value (format matches binding, affected by `value-format`) |  
| blur         | Triggered when input loses focus          | Component instance                                       |  
| focus        | Triggered when input gains focus          | Component instance                                       |  

### Methods  

| Method | Description                  | Parameters |  
| ------ | ---------------------------- | ---------- |  
| focus  | Focuses the input field      | —          |