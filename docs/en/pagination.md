## Pagination

When there is too much data, use pagination to break down the data.

### Basic Usage

Set `layout` to indicate the content to be displayed, separated by commas. The layout elements will be displayed in sequence.

-   `prev` represents the previous page.
-   `next` is the next page.
-   `pager` represents the page number list.
-   `jumper` is for jumping to a specified page number.
-   `total` represents the total number of items.
-   `sizes` is used to set the number of page numbers displayed per page.

> In addition, a special layout symbol `->` is provided. Elements after `->` will be displayed on the right.

!!!demo1!!!

### Set the Maximum Number of Page Number Buttons

By default, when the total number of pages exceeds 7, Pagination will collapse the extra page number buttons. The maximum number of page number buttons can be set through the `pager-count` attribute.

!!!demo2!!!

### Display the Total Number of Items

By configuring the layout and adding `total`, the total number of items can be displayed.

!!!demo3!!!

### Set the Number of Items per Page

By configuring the layout and adding `sizes`, the configuration of the number of items per page can be displayed.

!!!demo4!!!

### Display the Direct Jump

By configuring the layout and adding `jumper`, the direct jump function can be displayed.

!!!demo5!!!

### Hide Pagination When There is Only One Page

Configure `hide-on-single-page` to determine whether to hide the pagination when there is less than one page.

!!!demo6!!!

### Small-Sized Pagination

Configure `small` to display small-sized pagination.

!!!demo7!!!

### Pagination with Background Color

Configure `background` to display pagination with a background color. The background color follows the main color rule.

!!!demo8!!!

### Attributes

| Parameter           | Description                                                                                                                                                                                                  | Type     | Optional Values                                                      | Default Value                          |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | -------------------------------------------------------------------- | -------------------------------------- |
| small               | Whether to use the small-sized pagination style                                                                                                                                                              | boolean  | —                                                                    | false                                  |
| class               | Custom class style                                                                                                                                                                                           | string   | -                                                                    | -                                      |
| background          | Whether to add a background color to the pagination buttons                                                                                                                                                  | boolean  | —                                                                    | false                                  |
| page-size           | The number of items displayed per page                                                                                                                                                                       | number   | —                                                                    | 10                                     |
| total               | The total number of items                                                                                                                                                                                    | number   | —                                                                    | —                                      |
| page-count          | The total number of pages. Setting either `total` or `page-count` can achieve the function of displaying page numbers; if you want to support changes in `page-sizes`, you need to use the `total` attribute | Number   | —                                                                    | —                                      |
| pager-count         | The number of page number buttons. When the total number of pages exceeds this value, it will be collapsed                                                                                                   | number   | Odd numbers greater than or equal to 5 and less than or equal to 21  | 7                                      |
| current-page        | The current page number, supports the `.sync` modifier                                                                                                                                                       | number   | —                                                                    | 1                                      |
| layout              | The component layout, with sub-component names separated by commas                                                                                                                                           | string[] | `sizes`, `prev`, `pager`, `next`, `jumper`, `->`, `total`, `section` | 'prev, pager, next, jumper, ->, total' |
| page-sizes          | The option settings for the number-of-items-per-page selector                                                                                                                                                | number[] | —                                                                    | [10, 20, 30, 40, 50, 100]              |
| prev-text           | The text for the previous page instead of the icon                                                                                                                                                           | string   | —                                                                    | —                                      |
| next-text           | The text for the next page instead of the icon                                                                                                                                                               | string   | —                                                                    | —                                      |
| disabled            | Whether to disable                                                                                                                                                                                           | boolean  | —                                                                    | false                                  |
| hide-on-single-page | Whether to hide when there is only one page                                                                                                                                                                  | boolean  | —                                                                    | -                                      |

### Events

| Event Name  | Description                              | Callback Parameters      |
| ----------- | ---------------------------------------- | ------------------------ |
| size-change | Triggered when the `pageSize` changes    | Number of items per page |
| change      | Triggered when the `currentPage` changes | Current page             |
