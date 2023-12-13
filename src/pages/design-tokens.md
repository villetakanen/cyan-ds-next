---
layout: '../layout/page.astro'
---
## Desing tokens

The Cyan Design System can be customized using a set of CSS variables. The default values 
are defined in the `src/styles/core/default-desing-tokens.sass` file.

### Layout

| Name            | Default value                 | Description |
| --------------- | ----------------------------- | ----------- |
| --cn-grid-size  | 0.5em                         | The size of the grid unit |
| --cn-gap        | calc(var(--cn-grid-size) * 2) | ~1em, The gap between elements |
| --cn-width-rail | 80px                          | The width of the rail |

** Content Grid **

`.content-grid` is an atomic container style that can be used to create a simple layout.

| Name | Default value | Description |
| ----------------------- | ------------- | ----------- |
| --cn-content-max-width  | 58ch | The maximum width of the content |
| --cn-breakout-width     | calc(4 * var(--cn-gap)) | The expected extra width of the breakout |
| --cn-breakout-max-width | calc(var(--cn-breakout-width) + var(--cn-content-max-width)) | The maximum width of the breakout container |

### Theming

| Name | Default value | Description |
| ---- | ------------- | ----------- |
| --cn-color-key | #002337 | The primary color |
