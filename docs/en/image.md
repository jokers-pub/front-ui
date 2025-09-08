## Image

An image container that retains all native `<img>` tag features, supporting lazy loading, custom placeholders, load failure states, etc.

### Basic Usage

!!!demo1!!!

### Placeholder Content

!!!demo2!!!

### Load Failure

!!!demo3!!!

### Lazy Loading

!!!demo4!!!

### Image Preview

!!!demo5!!!

### Attributes

| Parameter        | Description                                               | Type                 | Options                                    | Default Value                             |
| ---------------- | --------------------------------------------------------- | -------------------- | ------------------------------------------ | ----------------------------------------- |
| src              | Image source (same as native)                             | string               | —                                          | —                                         |
| class            | Custom CSS class                                          | string               | -                                          | -                                         |
| fit              | Defines how image fits container (same as CSS object-fit) | string               | fill / contain / cover / none / scale-down | —                                         |
| lazy             | Whether to enable lazy loading                            | boolean              | —                                          | false                                     |
| scroll-container | Scroll container for lazy loading event listener          | string / HTMLElement | —                                          | Nearest parent with overflow: auto/scroll |
| preview          | Enables image preview                                     | boolean              | —                                          | —                                         |
| preview-src-list | Enables image preview with src list                       | Array                | —                                          | —                                         |
| z-index          | z-index for image preview overlay                         | Number               | —                                          | 2000                                      |
| errMsg           | Error message when loading fails                          | string               | —                                          | "Failed to load"                          |

### Events

| Event Name | Description                             | Callback Parameters |
| ---------- | --------------------------------------- | ------------------- |
| load       | Triggered when image loads successfully | (e: Event)          |
| error      | Triggered when image fails to load      | (e: Error)          |

### Slots

| Slot Name   | Description                      |
| ----------- | -------------------------------- |
| placeholder | Content shown before image loads |
| error       | Content shown when loading fails |

Note: Maintained technical formatting (e.g., HTML tags, CSS properties) in original case while translating Chinese content to natural professional English. Preserved markdown structure including tables, code blocks, and placeholder tags.
