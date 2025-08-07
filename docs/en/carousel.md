## Carousel 

A component that cyclically displays images, text, or other content within limited space.

### Basic Usage

Widely applicable basic usage.

By combining the `jk-carousel` and `jk-carousel-item` tags, you can create a Carousel. Slide content can be anything and should be placed within `jk-carousel-item` tags. By default, hovering over the bottom indicators triggers a slide switch. Setting the `trigger` property to `click` enables switching via click.

!!! demo1 !!!

### Indicators 

Allows positioning indicators outside the container.

The `indicatorPosition` property defines the position of indicators. By default, they display inside the carousel. Setting it to `outside` displays them externally, while `none` hides indicators entirely.

!!! demo2 !!!

### Navigation Arrows 

Controls when navigation arrows are displayed.

The `arrow` property determines the display timing of navigation arrows. By default (`hover`), arrows appear only on hover. Setting it to `always` keeps them visible, while `never` permanently hides them.

!!! demo3 !!!

### Card Style 

Recommended when horizontal space is ample but vertical space is limited.

Enable card mode by setting the `type` property to `card`. The key interaction difference is the ability to switch slides by directly clicking on adjacent cards.

!!! demo4 !!!

### Direction 

By default, `direction` is `horizontal`. Set it to `vertical` for a vertically oriented carousel.

!!! demo5 !!!

### Carousel Attributes

| Parameter            | Description                                                                 | Type     | Optional Values              | Default      |
|----------------------|-----------------------------------------------------------------------------|----------|------------------------------|--------------|
| height               | Height of the carousel                                                      | string   | —                            | —            |
| class                | Custom CSS class                                                            | string   | -                            | -            |
| initialIndex         | Index of initially active slide (0-based)                                   | number   | —                            | 0            |
| trigger              | Trigger method for indicators                                               | string   | click                        | -            |
| autoplay             | Whether to autoplay slides                                                  | boolean  | —                            | true         |
| interval             | Autoplay interval (milliseconds)                                            | number   | -                            | 3000         |
| indicatorPosition    | Position of indicators                                                      | string   | outside/none                 | —            |
| arrow                | Display timing for navigation arrows                                        | string   | always/hover/never           | hover        |
| type                 | Carousel style                                                              | string   | card                         | -            |
| loop                 | Whether to loop slides                                                      | boolean  | -                            | true         |
| direction            | Display orientation                                                         | string   | horizontal/vertical          | horizontal   |

### Carousel Events

| Event Name  | Description                        | Callback Parameters                               |
|-------------|------------------------------------|---------------------------------------------------|
| change      | Triggers on slide change           | Index of new active slide, index of previous slide |

### Carousel Methods

| Method         | Description                       | Parameters                                                                 |
|----------------|-----------------------------------|----------------------------------------------------------------------------|
| setActiveItem  | Manually switch slides            | Target slide index (0-based) or `name` value of corresponding `jk-carousel-item` |
| prev           | Go to previous slide              | -                                                                          |
| next           | Go to next slide                  | -                                                                          |