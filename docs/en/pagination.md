## Pagination  

When the amount of data is too large, use pagination to split the data.

### Basic Usage  

Set `layout` to specify the elements to be displayed, separated by commas. The layout components will be displayed in order.  

- `prev` for the previous page  
- `next` for the next page  
- `pager` for the page number list  
- `jumper` for jumping to a specific page  
- `total` for the total number of entries  
- `sizes` for setting the number of items displayed per page  

> Additionally, a special layout symbol `->` is provided. Elements after `->` will be aligned to the right.  

!!!demo1!!!  

### Set Maximum Page Button Count  

By default, when the total number of pages exceeds 7, the Pagination component will collapse excess page buttons. The maximum number of page buttons can be set via the `pager-count` property.  

!!!demo2!!!  

### Display Total Number of Entries  

Configure the layout by adding `total` to show the total number of entries.  

!!!demo3!!!  

### Set Items Per Page  

Configure the layout by adding `sizes` to display options for the number of items per page.  

!!!demo4!!!  

### Display Quick Jumper  

Configure the layout by adding `jumper` to enable the quick jump functionality.  

!!!demo5!!!  

### Hide Pagination When Only One Page Exists  

Configure `hide-on-single-page` to hide pagination when there is only one page.  

!!!demo6!!!  

### Small-Size Pagination  

Configure `small` to display pagination in a compact size.  

!!!demo7!!!  

### Pagination with Background Color  

Configure `background` to enable pagination with a colored background, following the primary color scheme.  

!!!demo8!!!  

### Attributes  

| Parameter           | Description                                                                                                        | Type     | Accepted Values                                                   | Default Value                          |  
| ------------------- | ------------------------------------------------------------------------------------------------------------------ | -------- | ----------------------------------------------------------------- | -------------------------------------- |  
| small               | Whether to use small pagination style                                                                              | boolean  | —                                                                 | false                                  |  
| class               | Custom class styles                                                                                                | string   | -                                                                 | -                                      |  
| background          | Whether to add a background color to pagination buttons                                                            | boolean  | —                                                                 | false                                  |  
| page-size           | Number of items displayed per page                                                                                 | number   | —                                                                 | 10                                     |  
| total               | Total number of entries                                                                                            | number   | —                                                                 | —                                      |  
| page-count          | Total page count. Either `total` or `page-count` can be set to enable pagination. If `page-sizes` is needed, use `total` | Number   | —                                                                 | —                                      |  
| pager-count         | Number of page buttons to display. Excess buttons are collapsed when the total pages exceed this value.            | number   | Odd number ≥5 and ≤21                                             | 7                                      |  
| current-page        | Current page number                                                                                                | number   | —                                                                 | 1                                      |  
| layout              | Component layout, with child component names separated by commas                                                   | string[] | `sizes`, `prev`, `pager`, `next`, `jumper`, `->`, `total`, `section` | 'prev, pager, next, jumper, ->, total' |  
| page-sizes          | Options for the page size selector                                                                                 | number[] | —                                                                 | [10, 20, 30, 40, 50, 100]              |  
| prev-text           | Custom text to replace the default prev icon                                                                       | string   | —                                                                 | —                                      |  
| next-text           | Custom text to replace the default next icon                                                                       | string   | —                                                                 | —                                      |  
| disabled            | Whether pagination is disabled                                                                                     | boolean  | —                                                                 | false                                  |  
| hide-on-single-page | Whether to hide pagination when there is only one page                                                             | boolean  | —                                                                 | -                                      |  

### Events  

| Event Name   | Description                                      | Callback Parameters  |  
| -----------  | ------------------------------------------------ | -------------------- |  
| size-change  | Triggered when pageSize changes                 | New page size        |  
| change       | Triggered when currentPage changes              | Current page number  |