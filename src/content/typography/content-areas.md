---
name: 'Content areas'
---

## Content colums

Overrides content-grid, if present (grid-columns: full width).

| Class | Description |
| --- | --- |
| `.content-columns` | Flexbox container for column. Breaks out of `.content-grid`, if any. |
| `.small-width` | Small width column |
| `.large-width` | Large width column |
| `.full-width` | Full width column |

#### Example code

```html
<section class="content-columns elevation-2">
  <div class="width-small elevation-1">
    <h2>Column 1</h2>
    <p>Content</p>
  </div>
  <cn-card title="101" elevation="0" class="small-width"
    cover="/images/lego-1.jpg"></cn-card>
  <div class="small-width elevation-3">
    <h2>Column 2</h2>
    <p>Content</p>
  </div>
</section>
```

#### Result

<section class="content-columns elevation-2">
  <div class="elevation-1">
    <h2>Column 1</h2>
    <p>Content</p>
  </div>
  <cn-card title="101" elevation="0" class="small-width" cover="/images/lego-1.png"></cn-card>
  <div class="small-width elevation-3">
    <h2>Column 2</h2>
    <p>Content</p>
  </div>
</section>

## Card grid

Auto-scaling card grid for displaying content in a grid.
<section class="card-grid breakout elevation-1">
  <cn-card title="101" elevation="0"></cn-card>
  <cn-card title="102"
    elevation="0"
    cover="/images/night.jpg"></cn-card>
  <cn-card
    elevation="4"
    title="103"
    href="/"
    cover="/images/mountains.jpg"></cn-card>
</section>

