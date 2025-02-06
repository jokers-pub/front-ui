## Carousel

Circularly plays the same type of content such as images and text within a limited space.

### Basic Usage

A widely applicable basic usage.
By using the `<jk-carousel>` and `<jk-carousel-item>` tags together, you get a carousel. The content of the slides can be anything and needs to be placed within the `<jk-carousel-item>` tag. By default, the switch is triggered when the mouse hovers over the indicator at the bottom. By setting the `trigger` attribute to `click`, a click-triggered effect can be achieved.
!!! demo1!!!

### Indicator

The display position of the indicator can be set outside the container.
The `indicatorPosition` attribute defines the position of the indicator. By default, it is displayed inside the carousel. Setting it to `outside` will display it outside, and setting it to `none` will not display the indicator.
!!! demo2!!!

### Switch Arrows

The display timing of the switch arrows can be set.
The `arrow` attribute defines the display timing of the switch arrows. By default, the switch arrows are only displayed when the mouse hovers over the carousel. If `arrow` is set to `always`, they will be displayed all the time; setting it to `never` will hide them all the time.
!!! demo3!!!

### Card-style

When there is extra space in the width direction of the page but a shortage in the height direction, the card style can be used.
Setting the `type` attribute to `card` enables the card mode. In terms of interaction, the biggest difference between the card mode and the general mode is that you can switch by directly clicking on the slides on both sides.
!!! demo4!!!

### Direction

By default, `direction` is `horizontal`. Set `direction` to `vertical` to make the carousel display vertically.
!!! demo5!!!

### Carousel Attributes

| Parameter         | Description                                                            | Type    | Optional Values     | Default Value |
| ----------------- | ---------------------------------------------------------------------- | ------- | ------------------- | ------------- |
| height            | The height of the carousel                                             | string  | —                   | —             |
| class             | Custom class style                                                     | string  | -                   | -             |
| initialIndex      | The index of the activated slide in the initial state, starting from 0 | number  | —                   | 0             |
| trigger           | The triggering method of the indicator                                 | string  | click               | -             |
| autoplay          | Whether to switch automatically                                        | boolean | —                   | true          |
| interval          | The time interval for automatic switching, in milliseconds             | number  | -                   | 3000          |
| indicatorPosition | The position of the indicator                                          | string  | outside/none        | —             |
| arrow             | The display timing of the switch arrows                                | string  | always/hover/never  | hover         |
| type              | The type of the carousel                                               | string  | card                | -             |
| loop              | Whether to display in a loop                                           | boolean | -                   | true          |
| direction         | The display direction of the carousel                                  | string  | horizontal/vertical | horizontal    |

### Carousel Events

| Event Name | Description                          | Callback Parameters                                                            |
| ---------- | ------------------------------------ | ------------------------------------------------------------------------------ |
| change     | Triggered when the slide is switched | The index of the currently activated slide and the index of the original slide |

### Carousel Methods

| Method Name   | Description                  | Parameter                                                                                                                       |
| ------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| setActiveItem | Manually switch the slide    | The index of the slide to be switched, starting from 0; or the `name` attribute value of the corresponding `<jk-carousel-item>` |
| prev          | Switch to the previous slide | -                                                                                                                               |
| next          | Switch to the next slide     | -                                                                                                                               |

### Carousel-item Attributes

| Parameter | Description                                                                 | Type   | Optional Values | Default Value |
| --------- | --------------------------------------------------------------------------- | ------ | --------------- | ------------- |
| name      | The name of the slide, which can be used as a parameter for `setActiveItem` | string | —               | —             |
| label     | The text of the indicator corresponding to this slide                       | string | —               | —             |
