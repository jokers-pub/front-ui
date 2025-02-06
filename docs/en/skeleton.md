## Skeleton

Set a skeleton screen in the position where content needs to be loaded. In some scenarios, it has a better visual effect than Loading.

### Basic Usage

The basic skeleton effect.

!!! demo1!!!

### More Parameters

You can configure the number of skeleton screen paragraphs to be closer to the real rendering effect. The first line will be rendered with a 33%-length paragraph head.

!!! demo2!!!

### Animation Effect

Display the animation effect.

!!! demo3!!!

### Custom Styles

The layout mode provided by Joker-UI sometimes does not meet the requirements. When you want to use your own defined template, you can set the template through a named section.

We provide different template units for use. For specific optional values, please refer to the API detailed description. When describing the template, it is recommended to be as close as possible to the real DOM structure to avoid jitter caused by the height difference of the DOM.

!!! demo4!!!

### Loading State

After the Loading is completed, we often need to display the real UI. You can control whether to display the real DOM through the value of `loading`. Then, set the UI to be displayed after the loading is completed through the named section.

!!! demo5!!!

### Rendering Multiple Data

Most of the time, the skeleton screen is used to render lists. When we need to render a fake UI while fetching data from the server. The `count` attribute can be used to control how many fake data are rendered on the page.

Please note that try to keep the size of `count` to a minimum. Even for a fake UI, too many DOM elements will still cause performance problems, and it will also take longer (relatively) to destroy the skeleton screen.

!!! demo6!!!

### Preventing Rendering Jitter

Sometimes, the API request returns very quickly. Often, just after the skeleton placeholder is rendered, the real data has already arrived, and the user's interface will flash suddenly. At this time, to avoid this situation, the `throttle` attribute is needed to solve this problem.

!!! demo7!!!

### Skeleton Attributes

| Parameter | Description                                                                          | Type    | Optional Values  | Default Value |
| --------- | ------------------------------------------------------------------------------------ | ------- | ---------------- | ------------- |
| class     | Custom class style                                                                   | string  | -                | -             |
| animated  | Whether to use animation                                                             | boolean | true / false     | false         |
| count     | How many `template` to render. It is recommended to use the smallest possible number | number  | integer          | 1             |
| loading   | Whether to display the skeleton screen                                               | boolean | true / false     | true          |
| rows      | The number of skeleton screen paragraphs                                             | number  | Positive integer | 4             |
| throttle  | The time to delay the rendering of the placeholder DOM, in milliseconds              | number  | Positive integer | 0             |
| style     | In-line style sheet                                                                  | string  | —                | —             |

### SkeletonItem Attributes

| Parameter | Description                                              | Type         | Optional Values                                               | Default Value |
| --------- | -------------------------------------------------------- | ------------ | ------------------------------------------------------------- | ------------- |
| variant   | The style of the currently displayed placeholder element | Enum(string) | p / h1 / h3 / text / caption / button / image / circle / rect | text          |
| style     | In-line style sheet                                      | string       | —                                                             | —             |
| class     | Custom style                                             | string       | —                                                             | —             |

### Skeleton Sections

| Name     | Description                            |
| -------- | -------------------------------------- |
| default  | Used to display the real UI            |
| template | Used to display the custom placeholder |
