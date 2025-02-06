## Alert

Used to display important prompt information on the page.

### Basic Usage

It is a non-floating element on the page and will not disappear automatically.
The Alert component provides four themes, specified by the `type` attribute, with the default value being `info`.
!!! demo1!!!

### Themes

The Alert component offers two different themes: `light` and `dark`.
Change the theme by setting the `effect` attribute, with the default being `light`.
!!! demo2!!!

### Custom Close Button

Customize the close button to be text or other symbols.
In the Alert component, you can set whether it is closable, the text of the close button, and the callback function when closing. The `closable` attribute determines whether it is closable, accepting a `boolean` value, with the default being `true`. You can set the `closeText` attribute to replace the close icon on the right. Note: `closeText` must be text. Set the `close` event to set the callback when closing.
!!! demo3!!!

### With Icon

Improve readability when indicating a certain state.
Display the icon of the Alert by setting the `showIcon` attribute, which can more effectively show your display intention to users.
!!!demo4!!!

### Center-aligned Text

Use the `center` attribute to center the text horizontally.
!!!demo5!!!

### With Supplementary Text Introduction

Contains a title and content to explain the warning in more detail.
In addition to the required `title` attribute, you can set the `description` attribute to help with a better introduction, which we call supplementary text. The supplementary text can only hold single-line text and will be displayed with automatic line breaks.
!!!demo6!!!

### With Icon and Supplementary Text Introduction

Finally, this is an example with both an icon and supplementary text.
!!!demo7!!!

### Attributes

| Parameter   | Description                                                           | Type    | Optional Values            | Default Value |
| ----------- | --------------------------------------------------------------------- | ------- | -------------------------- | ------------- |
| title       | Title                                                                 | string  | -                          | —             |
| type        | Theme                                                                 | string  | success/warning/info/error | info          |
| description | Supplementary text. Can also be passed in through the default section | string  | —                          | -             |
| closable    | Whether it is closable                                                | boolean | —                          | true          |
| center      | Whether the text is centered                                          | boolean | —                          | true          |
| closeText   | Custom text for the close button                                      | string  | —                          | -             |
| showIcon    | Whether to display the icon                                           | boolean | —                          | false         |
| icon        | Change the displayed icon                                             | string  | —                          | -             |
| effect      | Select the provided theme                                             | string  | light/dark                 | light         |
| class       | Custom class style                                                    | string  | -                          | -             |

### Events

| Event Name | Description                            | Parameter |
| ---------- | -------------------------------------- | --------- |
| close      | Event triggered when closing the alert | -         |

### Sections

| Name  | Description          |
| ----- | -------------------- |
| -     | Description          |
| title | Content of the title |
