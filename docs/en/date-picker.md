## DatePicker

Used to select or input dates.

### Selecting a Day

A basic date-selection control with the "day" as the basic unit.
The basic unit is specified by the `type` attribute. Shortcut options need to be configured with `shortcuts`, and disabled dates are set through `disabledDate`. This attribute is of function type, and it determines whether a date is selectable by returning a `boolean` value.
!!!demo1!!!

### Other Date Units

By extending the basic date selection, weeks, months, and years can be selected.
!!!demo2!!!

### Selecting a Date Range

A time range can be conveniently selected in one picker.
!!!demo3!!!

### Date Format

Use `format` to specify the format of the input box; use `value-format` to specify the format of the bound value.
By default, the component accepts and returns `Date` objects. The following are the available formatting strings, taking January 2, 2017, 03:04:05 UTC as an example:

:::warning
Please note the case. Internally, `dayjs` is used for time operations and formatting. For detailed format values, please refer to [dayjs](https://dayjs.fenxianglu.cn/).
:::

### Attributes

| Parameter         | Description                                                                                 | Type                                                | Optional Values                                                     | Default Value |
| ----------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------- | ------------------------------------------------------------------- | ------------- |
| value             | Bound value                                                                                 | string(DatePicker) / Array<string>(DateRangePicker) | —                                                                   | —             |
| class             | Custom class style                                                                          | string                                              | -                                                                   | -             |
| readonly          | Completely read-only                                                                        | boolean                                             | —                                                                   | false         |
| disabled          | Disabled                                                                                    | boolean                                             | —                                                                   | false         |
| editable          | The text box is editable                                                                    | boolean                                             | —                                                                   | true          |
| clearable         | Whether to display the clear button                                                         | boolean                                             | —                                                                   | true          |
| size              | Size of the input box                                                                       | string                                              | large, small, mini                                                  | —             |
| placeholder       | Placeholder content when not in range selection                                             | string                                              | —                                                                   | —             |
| start-placeholder | Placeholder content for the start date in range selection                                   | string                                              | —                                                                   | —             |
| end-placeholder   | Placeholder content for the end date in range selection                                     | string                                              | —                                                                   | —             |
| type              | Display type                                                                                | string                                              | `year`/`month`/`date`/`week`/`datetime`/`daterange`/`datetimerange` | date          |
| format            | The format displayed in the input box                                                       | string                                              | See [Date Format](https://dayjs.fenxianglu.cn/)                     | yyyy-MM-dd    |
| range-separator   | Separator when selecting a range                                                            | string                                              | —                                                                   | '-'           |
| default-value     | Optional, the time that is displayed by default when the picker is opened                   | string                                              | Follows value-format                                                | —             |
| value-format      | Optional, the format of the bound value. If not specified, the bound value is a Date object | string                                              | See [Date Format](https://dayjs.fenxianglu.cn/)                     | —             |
| unlink-panels     | Cancel the linkage between the two date panels in the range picker                          | boolean                                             | —                                                                   | false         |
| prefix-icon       | The class name of the custom header icon                                                    | string                                              | —                                                                   | jk-icon-date  |

### Picker Options

| Parameter     | Description                                                                                                     | Type           | Optional Values | Default Value |
| ------------- | --------------------------------------------------------------------------------------------------------------- | -------------- | --------------- | ------------- |
| shortcuts     | Set shortcut options, need to pass in { text, onClick } object. For usage, refer to the demo or the table below | Object[]       | —               | —             |
| disabledDate  | Set the disabled state, the parameter is the current date, and it is required to return a Boolean               | Function       | —               | —             |
| cellClassName | Set the className of the date                                                                                   | Function(Date) | —               | —             |

### Shortcuts

| Parameter | Description                                                                                                               | Type     | Optional Values | Default Value |
| --------- | ------------------------------------------------------------------------------------------------------------------------- | -------- | --------------- | ------------- |
| text      | Title text                                                                                                                | string   | —               | —             |
| onClick   | This method will pass in a callback. Executing the callback and passing in a new value will perform the setting operation | function | —               | —             |

### Events

| Event Name | Description                                         | Callback Parameters                                                                                              |
| ---------- | --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| change     | Triggered when the user confirms the selected value | The component-bound value. The format is consistent with the bound value and can be controlled by `value-format` |
| blur       | Triggered when the input loses focus                | The component instance                                                                                           |
| focus      | Triggered when the input gets focus                 | The component instance                                                                                           |

### Methods

| Method Name | Description              | Parameter |
| ----------- | ------------------------ | --------- |
| focus       | Make the input get focus | —         |
