---
name: "Typography"
---

<div class="center">
  <cn-icon noun="font" xlarge></cn-icon>
</div>

_A longish treatise on typography for the Cyan, Pelilauta, and Mekanismi._

## Headings

Headings support 2 to 3 variants: default, small and card. The default variant is used for the main heading of a
page or section. The small variant is used for subheadings, and the card variant is used for headings in cards. 

To avoid ARIA issues, the `h1` tag should only be used once per page, and thus it does not have a card-variant.

### Heading 1

<div class="demo-grid">
  <h1>Heading 1</h1>
  <h1 class="small">Small heading 1</h1>
</div>

### Heading 2

<div class="demo-grid">
  <h2>Heading 2</h2>
  <h2 class="small">Small heading 2</h2>
  <cn-card>
    <h2>Card heading 2</h2>
  </cn-card>
</div>

### Heading 3

<div class="demo-grid">
  <h3>Heading 3</h3>
  <h3 class="small">Small heading 3</h3>
  <cn-card>
    <h3>Card heading 3</h3>
  </cn-card>
</div>

#### Heading 4

<div class="demo-grid">
  <h4>Heading 4</h4>
  <h4 class="small">Small heading 4</h4>
  <cn-card>
    <h4>Card heading 4</h4>
  </cn-card>
</div>


