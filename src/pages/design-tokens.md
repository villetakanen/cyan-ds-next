---
layout: '../layout/page.astro'
---
<div class="content-columns">
  <div class="column-l">

# Desing tokens

The Cyan Design System can be customized using a set of CSS variables. The default values 
are defined in the `src/styles/core/default-desing-tokens.sass` file.

### Core variables

The following variables are used to define the layout of the Cyan Design System.

| Name            | Value                  | ~     | Description |
| --------------- | ------------------------------ | ----- | ----------- |
| `--cn-grid`     | `0.5em`                        | `8px`  |We expext all page components to be aligned to a 8px grid. The grid will auto-adjust to the font size of the root element, thus enabling the app to work with a larger font-size |
| `--cn-gap`        | `1em` | `16px` |All content elements should have a gap (and a margin) of 2 grids --> 1em. |
| `--cn-line`       | `1.5em` | `24px` |The default line height is 24px, or 3 grids. Heading, etc. components should use multiples of 24px for height, including margins and paddings. F.ex. top margin 16, height 48 and bottom margin of 8px|
| `--cn-rail-width` | --cn-grid * 10 | 80px  |The width of the navigation rail |
| `--cn-tray-width` | --cn-grid * 40 | 320px |The width of the navigation tray |

#### Content Grid

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
  </div>
</div>

