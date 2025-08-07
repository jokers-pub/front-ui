## Layout  

Quickly and easily create layouts using a 24-column grid system.

### Basic Layout  

Create a foundational grid layout using a single column.

By utilizing the `row` and `col` components and specifying the `span` property of the `col` component, you can freely combine layouts.  

!!!demo1!!!  

### Column Gutter  

Add spacing between columns.  

The `row` component provides a `gutter` property to define the spacing between columns, with a default value of 0.  

!!!demo2!!!  

### Mixed Layout  

Combine and extend the basic 1/24 columns to create complex mixed layouts.  

!!!demo3!!!  

### Column Offset  

Support for offsetting specified columns.  

The `offset` property of the `col` component allows you to specify the number of columns to offset, optimizing layout flexibility.  

!!!demo4!!!  

### Alignment  

Use **flex** layout for flexible column alignment.  

By setting the `type` property to `'flex'`, you enable flexbox layout. The `justify` property can be used to define horizontal alignment with values such as `start`, `center`, `end`, `space-between`, or `space-around`.  

!!!demo5!!!  

### Responsive Layout  

Following Bootstrap’s responsive design approach, we preset five responsive breakpoints: `xs`, `sm`, `md`, `lg`, and `xl`.  

!!!demo6!!!  

### Row Attributes  

| Parameter | Description                                  | Type   | Accepted Values                                      | Default |
| --------- | ------------------------------------------- | ------ | ---------------------------------------------------- | ------- |
| gutter    | Grid spacing                                | number | —                                                    | 0       |
| type      | Layout mode, optional `flex` for modern browsers | string | —                                                   | —       |
| justify   | Horizontal alignment in flex layout         | string | `start` / `end` / `center` / `space-around` / `space-between` | `start` |
| align     | Vertical alignment in flex layout           | string | `top` / `middle` / `bottom`                         | —       |
| tag       | Custom HTML tag                             | string | \*                                                  | `div`   |

### Col Attributes  

| Parameter | Description                                   | Type                                        | Accepted Values                            | Default |
| --------- | -------------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------- |
| span      | Number of columns the grid occupies          | number                                      | —                                          | 24      |
| offset    | Number of columns to offset on the left      | number                                      | —                                          | 0       |
| push      | Number of columns to move to the right       | number                                      | —                                          | 0       |
| pull      | Number of columns to move to the left        | number                                      | —                                          | 0       |
| xs        | `<768px` Responsive columns or column props  | number / object (e.g., `{span: 4, offset: 4}`) | —                                          | —       |
| sm        | `≥768px` Responsive columns or column props  | number / object (e.g., `{span: 4, offset: 4}`) | —                                          | —       |
| md        | `≥992px` Responsive columns or column props  | number / object (e.g., `{span: 4, offset: 4}`) | —                                          | —       |
| lg        | `≥1200px` Responsive columns or column props | number / object (e.g., `{span: 4, offset: 4}`) | —                                          | —       |
| xl        | `≥1920px` Responsive columns or column props | number / object (e.g., `{span: 4, offset: 4}`) | —                                          | —       |
| tag       | Custom HTML tag                              | string                                      | \*                                        | `div`   |