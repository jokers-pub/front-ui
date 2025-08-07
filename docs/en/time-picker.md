## TimePicker  

A component for selecting or inputting time  

### Fixed Time Points  

Provides several fixed time points for users to choose  

Use the `jk-time-select` tag, where `start`, `end`, and `step` specify the selectable start time, end time, and time interval respectively.  

!!!demo1!!!  

### Fixed Time Range  

If the start time is selected first, the state of available end times will change accordingly.  

!!!demo2!!!  

### Arbitrary Time Points  

Allows selecting any time point. Use the `jk-time-picker` tag and restrict the selectable time range via `minTime`/`maxTime`.  
The `format` property can be configured to control whether seconds are displayed.  

!!!demo3!!!  

### Arbitrary Time Range  

Allows selecting any time range.  

!!!demo4!!!  

### Disabled  

!!!demo5!!!  

### Sizes  

Refer to the `input` component's `size` property.  

!!!demo6!!!  

### Attributes  

| Parameter          | Description                                           | Type     | Acceptable Values       | Default      |  
| ------------------ | ----------------------------------------------------- | -------- | ----------------------- | ------------ |  
| value              | Binding value                                         | string   | —                       | —            |  
| class              | Custom CSS class                                      | string   | —                       | —            |  
| readonly           | Fully read-only                                       | boolean  | —                       | false        |  
| disabled           | Disabled                                              | boolean  | —                       | false        |  
| editable           | Allows text input                                     | boolean  | —                       | true         |  
| clearable          | Whether to show the clear button                      | boolean  | —                       | true         |  
| size               | Input size                                            | string   | medium / small / mini   | —            |  
| placeholder        | Placeholder for non-range selection                   | string   | —                       | —            |  
| start-placeholder  | Placeholder for start time in range selection         | string   | —                       | —            |  
| end-placeholder    | Placeholder for end time in range selection           | string   | —                       | —            |  
| range              | Whether to enable time range selection (only for `<jk-time-picker>`) | boolean | — | false |  
| range-separator    | Separator for range selection                         | string   | —                       | '-'          |  
| value-format       | Optional, format of the binding value                 | string   | —                       | —            |  
| default-value      | Optional, default displayed time when picker opens    | string   | Must match `format`     | —            |  
| prefix-icon        | Custom icon class for the header                      | string   | —                       | el-icon-time |  

### Time Select Options  

| Parameter | Description                                   | Type   | Acceptable Values | Default |  
| --------- | -------------------------------------------- | ------ | ----------------- | ------- |  
| start     | Start time                                   | string | —                 | 09:00   |  
| end       | End time                                     | string | —                 | 18:00   |  
| step      | Time interval                                | string | —                 | 00:30   |  
| minTime   | Minimum time; time slots before this are disabled | string | —      | 00:00   |  
| maxTime   | Maximum time; time slots after this are disabled  | string | —      | —       |  

### Time Picker Options  

| Parameter         | Description                                                                 | Type           | Acceptable Values               | Default      |  
| ----------------- | --------------------------------------------------------------------------- | -------------- | ------------------------------- | ------------ |  
| selectableRange   | Selectable time ranges, e.g., `'18:30:00 - 20:30:00'` or array `['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']` | string / array | — | — |  
| format            | Time formatting                                                             | string         | Hours: `HH`, Minutes: `mm`, Seconds: `ss` | 'HH:mm:ss' |  

### Events  

| Event   | Description                         | Parameters        |  
| ------- | ----------------------------------- | ----------------- |  
| change  | Triggered when user confirms value  | Component binding value |  
| blur    | Triggered when input loses focus    | Component instance |  
| focus   | Triggered when input gains focus    | Component instance |  

### Methods  

| Method | Description               | Parameters |  
| ------ | ------------------------- | ---------- |  
| focus  | Focuses the input element | —          |