## Layout

Create layouts quickly and easily through the basic 24-column system.

### Basic Layout

Create a basic grid layout using a single column.

By using the `row` and `col` components, and through the `span` attribute of the `col` component, we can freely combine layouts.

!!!demo1!!!

### Column Spacing

There is a spacing between columns.

The `row` component provides the `gutter` attribute to specify the spacing between each column, with a default spacing of 0.

!!!demo2!!!

### Mixed Layout

Arbitrarily expand and combine through the basic 1/24 columns to form a more complex mixed layout.

!!!demo3!!!

### Column Offset

Supports offsetting a specified number of columns.

By setting the `offset` attribute of the `col` component, you can specify the number of columns to offset, optimizing the layout effect.

!!!demo4!!!

### Alignment

Use `flex` layout for flexible alignment of columns.

Assigning the `type` attribute as 'flex' enables the flex layout. You can use the `justify` attribute to specify values such as `start`, `center`, `end`, `space-between`, `space-around` to flexibly define the layout of child elements.

!!!demo5!!!

### Responsive Layout

Referencing the responsive design of Bootstrap, five responsive sizes are preset: `xs`, `sm`, `md`, `lg`, and `xl`.

!!!demo6!!!

### Row Attributes

| Parameter | Description                                         | Type   | Optional Values                                     | Default Value |
| --------- | --------------------------------------------------- | ------ | --------------------------------------------------- | ------------- |
| gutter    | Grid spacing                                        | number | —                                                   | 0             |
| type      | Layout mode, 'flex' is available in modern browsers | string | —                                                   | —             |
| justify   | Horizontal arrangement in flex layout               | string | start / end / center / space-around / space-between | start         |
| align     | Vertical arrangement in flex layout                 | string | top / middle / bottom                               | —             |
| tag       | Custom element tag                                  | string | \*                                                  | div           |

### Col Attributes

| Parameter | Description                                                   | Type                                         | Optional Values | Default Value |
| --------- | ------------------------------------------------------------- | -------------------------------------------- | --------------- | ------------- |
| span      | The number of columns occupied by the grid                    | number                                       | —               | 24            |
| offset    | The number of grid-spaced cells on the left side of the grid  | number                                       | —               | 0             |
| push      | The number of cells the grid moves to the right               | number                                       | —               | 0             |
| pull      | The number of cells the grid moves to the left                | number                                       | —               | 0             |
| xs        | Responsive grid number or grid attribute object for `<768px`  | number / object (e.g., {span: 4, offset: 4}) | —               | —             |
| sm        | Responsive grid number or grid attribute object for `≥768px`  | number / object (e.g., {span: 4, offset: 4}) | —               | —             |
| md        | Responsive grid number or grid attribute object for `≥992px`  | number / object (e.g., {span: 4, offset: 4}) | —               | —             |
| lg        | Responsive grid number or grid attribute object for `≥1200px` | number / object (e.g., {span: 4, offset: 4}) | —               | —             |
| xl        | Responsive grid number or grid attribute object for `≥1920px` | number / object (e.g., {span: 4, offset: 4}) | —               | —             |
| tag       | Custom element tag                                            | string                                       | \*              | div           |
