## TimePicker

Used to select or input time.

### Fixed Time Points

Provides several fixed time points for users to choose from.

Use the `jk-time-select` tag, and specify the optional start time, end time, and step through `start`, `end`, and `step` respectively.

!!!demo1!!!

### Fixed Time Range

If the start time is selected first, the state of the options in the end time will change accordingly.

!!!demo2!!!

### Arbitrary Time Point

You can select any time. Use the `jk-time-picker` tag and limit the selectable time range through `minTime`/`maxTime`. You can control whether to display seconds by configuring `format`.

!!!demo3!!!

### Arbitrary Time Range

You can select any time range.

!!!demo4!!!

### Disabled

!!!demo5!!!

### Size

Refer to the `input` size attribute.

!!!demo6!!!

### Attributes

| Parameter         | Description                                                             | Type    | Optional Values                  | Default Value |
| ----------------- | ----------------------------------------------------------------------- | ------- | -------------------------------- | ------------- |
| value             | Bound value                                                             | string  | —                                | —             |
| class             | Custom class style                                                      | string  | -                                | -             |
| readonly          | Completely read-only                                                    | boolean | —                                | false         |
| disabled          | Disabled                                                                | boolean | —                                | false         |
| editable          | The text box is editable                                                | boolean | —                                | true          |
| clearable         | Whether to display the clear button                                     | boolean | —                                | true          |
| size              | Size of the input box                                                   | string  | medium / small / mini            | —             |
| placeholder       | Placeholder content when not in range selection                         | string  | —                                | —             |
| start-placeholder | Placeholder content for the start date in range selection               | string  | —                                | —             |
| end-placeholder   | Placeholder content for the end date in range selection                 | string  | —                                | —             |
| range             | Whether it is a time range selection, only valid for `<jk-time-picker>` | boolean | —                                | false         |
| range-separator   | Separator when selecting a range                                        | string  | -                                | '-'           |
| value-format      | Optional, the format of the bound value                                 | string  | -                                | —             |
| default-value     | Optional, the time displayed by default when the picker is opened       | string  | In line with the `format` format | —             |
| prefix-icon       | Class name of the custom header icon                                    | string  | —                                | el-icon-time  |

### Time Select Options

| Parameter | Description                                                        | Type   | Optional Values | Default Value |
| --------- | ------------------------------------------------------------------ | ------ | --------------- | ------------- |
| start     | Start time                                                         | string | —               | 09:00         |
| end       | End time                                                           | string | —               | 18:00         |
| step      | Interval time                                                      | string | —               | 00:30         |
| minTime   | Minimum time, time periods less than this time will be disabled    | string | —               | 00:00         |
| maxTime   | Maximum time, time periods greater than this time will be disabled | string | —               | —             |

### Time Picker Options

| Parameter       | Description                                                                                                             | Type           | Optional Values                           | Default Value |
| --------------- | ----------------------------------------------------------------------------------------------------------------------- | -------------- | ----------------------------------------- | ------------- |
| selectableRange | Selectable time periods, such as `'18:30:00-20:30:00'` or pass in an array `['09:30:00-12:00:00', '14:30:00-18:30:00']` | string / array | —                                         | —             |
| format          | Time formatting                                                                                                         | string         | Hours: `HH`, minutes: `mm`, seconds: `ss` | 'HH:mm:ss'    |

### Events

| Event Name | Description                                         | Parameters            |
| ---------- | --------------------------------------------------- | --------------------- |
| change     | Triggered when the user confirms the selected value | Component bound value |
| blur       | Triggered when the input loses focus                | Component instance    |
| focus      | Triggered when the input gains focus                | Component instance    |

### Methods

| Method Name | Description               | Parameter |
| ----------- | ------------------------- | --------- |
| focus       | Make the input gain focus | -         |
