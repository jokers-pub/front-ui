## Avatar

Displays user or object information in the form of icons, images, or characters.

### Basic Usage

Set the shape and size of the avatar through `shape` and `size`.
!!! demo1!!!

### Display Types

Supports three types: icon, image, and character.
!!! demo2!!!

### Fallback Behavior for Image Loading Failure

When the display type is an image, this is the fallback behavior for image loading failure.
!!! demo3!!!

### How the Image Fits the Container

When the display type is an image, use the `fit` attribute to define how the image fits the container, similar to the native `object-fit`.
!!! demo4!!!

### Attributes

| Parameter | Description                                                                                                            | Type          | Optional Values                    | Default Value |
| --------- | ---------------------------------------------------------------------------------------------------------------------- | ------------- | ---------------------------------- | ------------- |
| icon      | Set the icon type of the avatar, referring to the Icon component                                                       | string        | -                                  | —             |
| size      | Set the size of the avatar                                                                                             | number/string | number/large/medium/small          | large         |
| shape     | Set the shape of the avatar                                                                                            | string        | circle/square                      | circle        |
| src       | The resource address of the image avatar                                                                               | string        | —                                  | -             |
| srcSet    | A comma-separated list of one or more strings indicating a series of possible images for user agents to use            | string        | —                                  | true          |
| alt       | The alternative text describing the image                                                                              | string        | —                                  | -             |
| fit       | When the display type is an image, set how the image fits the container                                                | string        | fill/contain/cover/none/scale-down | cover         |
| class     | Custom class style                                                                                                     | string        | -                                  | -             |
| error     | The callback for image avatar loading failure. Returning false will turn off the component's default fallback behavior | function      | -                                  | -             |

### Events

| Event Name | Description                          | Parameter |
| ---------- | ------------------------------------ | --------- |
| click      | Triggered when the avatar is clicked | -         |

### Sections

| Name    | Description                                   |
| ------- | --------------------------------------------- |
| default | Customize the content displayed by the avatar |
